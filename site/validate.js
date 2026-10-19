// Validates a level file against the structure the tracker (site/index.html) parses.
// Run: node site/validate.js 01-A1.md [--strict]
// Exit code 1 on structural errors (bad IDs, duplicates, unknown tags, missing sections).
const fs = require('fs');
const file = process.argv[2];
const strict = process.argv.includes('--strict');
if (!file) { console.error('usage: node site/validate.js <level.md>'); process.exit(2); }
const text = fs.readFileSync(file, 'utf8');
const lines = text.split(/\r?\n/);
const code = (file.match(/0\d-([A-C][12])\.md$/) || [])[1];
const stepRe = /^- \[[ xX]\] \*\*([A-C][12]-\d{3,4}[a-z]?)\*\*\s*(.*)$/;
const TYPES = ['Setup', 'Study', 'Drill', 'Input', 'Produce', 'Culture', 'Check', 'Habit'];
const EFFORTS = ['Casual', 'Focused', 'Deep'];
const errors = [], warns = [];
let mode = 'intro', block = null, week = null, step = null, app = null;
const steps = [], blocks = [], appendices = [], patterns = [];
let dayTable = false, timeLine = false, goalLine = false, title = '';
function parseMinutes(tag) {
  if (!tag) return 0;
  const m = tag.match(/(\d+(?:[.,]\d+)?)\s*(min|h)\b/i); if (!m) return 0;
  let v = parseFloat(m[1].replace(',', '.')); if (m[2].toLowerCase() === 'h') v *= 60;
  const x = tag.match(/[×x]\s*(\d+)/); if (x) v *= parseInt(x[1], 10);
  return Math.round(v);
}
for (let i = 0; i < lines.length; i++) {
  const line = lines[i]; let m;
  if (!title && (m = line.match(/^# (.*)/))) { title = m[1]; continue; }
  if (/^\*\*Time:\*\*/.test(line)) timeLine = true;
  if (/^\*\*Goal at exit:\*\*/.test(line)) goalLine = true;
  if (new RegExp('^## The ' + code + ' day').test(line)) dayTable = true;
  if ((m = line.match(/^## Appendix ([A-Z]):\s*(.*)/))) { step = null; mode = 'app'; app = { letter: m[1], title: m[2].trim(), lines: [] }; appendices.push(app); continue; }
  if (mode === 'app') { app.lines.push(line); continue; }
  if (/^## Patterns\b/.test(line)) { step = null; mode = 'patterns'; continue; }
  if (mode === 'patterns' && !/^## /.test(line)) { patterns.push(line); continue; }
  if ((m = line.match(/^## (.*)/))) { step = null; mode = 'block'; block = { title: m[1].trim(), weeks: [], line: i + 1 }; blocks.push(block); week = null; continue; }
  if ((m = line.match(/^### (.*)/))) { step = null; if (!block) { errors.push('line ' + (i + 1) + ': ### heading before any ## block'); continue; } week = { title: m[1].trim(), steps: [] }; block.weeks.push(week); continue; }
  if (mode === 'block' && (m = line.match(stepRe))) {
    let rest = m[2], tags = []; const t = rest.match(/^\[([^\]]+)\]\s*(.*)$/);
    if (t) { tags = t[1].split('·').map(s => s.trim()); rest = t[2]; }
    const type = tags.length ? tags[0] : (/Milestone/.test(rest) ? 'Milestone' : 'Step');
    const effort = tags.find(x => EFFORTS.includes(x)) || '';
    const timeTag = tags.find(x => /\d/.test(x)) || '';
    let minutes = parseMinutes(timeTag);
    if (!minutes && type === 'Check') minutes = /Milestone|Part \d/.test(rest) ? 60 : 10;
    if (!minutes && type === 'Milestone') minutes = 5;
    step = { id: m[1], title: rest.trim(), type, effort, timeTag, minutes, body: [], line: i + 1, block: block.title, week: week ? week.title : '' };
    if (!week) { week = { title: '', steps: [] }; block.weeks.push(week); }
    week.steps.push(step); steps.push(step);
    if (type !== 'Milestone' && !TYPES.includes(type)) errors.push('line ' + (i + 1) + ' ' + step.id + ': unknown type tag "' + type + '"');
    if (type !== 'Check' && type !== 'Milestone' && !effort) warns.push(step.id + ': no effort tag');
    if (type !== 'Check' && type !== 'Milestone' && !minutes) warns.push(step.id + ': no time tag');
    continue;
  }
  if (step && /^\s+\S/.test(line)) { step.body.push(line); continue; }
  if (step && line.trim() === '') { const nx = lines[i + 1] || ''; if (/^\s+\S/.test(nx)) { step.body.push(''); continue; } step = null; continue; }
  if (mode === 'block' && /^- \[/.test(line)) errors.push('line ' + (i + 1) + ': step line does not match the required format "- [ ] **XX-NNN** [Type · Effort · N min] Title"');
}
// structure checks
if (!code) errors.push('file name must be like 01-A1.md');
if (!title) errors.push('missing "# Level ..." title');
if (!goalLine) errors.push('missing "**Goal at exit:**" line');
if (!timeLine) errors.push('missing "**Time:**" line');
if (!dayTable) errors.push('missing "## The ' + code + ' day" section');
if (!steps.length) errors.push('no steps found');
// id sequence
const ids = steps.map(s => s.id); const seen = new Set();
ids.forEach((id, i) => {
  if (seen.has(id)) errors.push('duplicate id ' + id); seen.add(id);
  if (code && !id.startsWith(code + '-')) errors.push('id ' + id + ' does not belong to level ' + code);
  const n = parseInt(id.split('-')[1], 10);
  if (n !== i + 1) errors.push('id ' + id + ' out of sequence (expected ' + code + '-' + String(i + 1).padStart(3, '0') + ')');
});
// body checks
steps.forEach(s => {
  const body = s.body.join('\n');
  const oneLiner = !s.body.length;
  const refsPattern = /\(as [A-C][12]-\d{3,4}\)|pattern\)|pattern\.|Same criteria|Criteria as|as [A-C][12]-\d{3,4}\)/i.test(s.title);
  if (s.type === 'Check') {
    if (!/Pass if:|Pass:|Same criteria|Criteria as|Pass if/.test(body + ' ' + s.title)) warns.push(s.id + ' (Check): no "Pass if:" line');
  } else if (s.type !== 'Milestone') {
    if (!oneLiner && !/Done when:/.test(body)) warns.push(s.id + ': body without a "Done when:" line');
    if (oneLiner && !refsPattern && strict) warns.push(s.id + ': one-line step that names no pattern or earlier step');
  }
  s.body.forEach((l, j) => { if (l && !/^ {4,8}\S/.test(l) && !/^\s*$/.test(l)) warns.push(s.id + ' body line ' + (s.line + 1 + j) + ': indentation should be 6 spaces'); });
});
// report
const byType = {}; steps.forEach(s => { byType[s.type] = (byType[s.type] || 0) + 1; });
const minutes = steps.reduce((a, s) => a + s.minutes, 0);
const habits = steps.filter(s => s.type === 'Habit');
const checks = steps.filter(s => s.type === 'Check');
console.log('file       : ' + file);
console.log('title      : ' + title);
console.log('blocks     : ' + blocks.length + '  weeks: ' + blocks.reduce((a, b) => a + b.weeks.filter(w => w.title).length, 0));
console.log('steps      : ' + steps.length + '  (' + Object.entries(byType).map(([k, v]) => k + ' ' + v).join(', ') + ')');
console.log('step hours : ' + (minutes / 60).toFixed(1) + ' h of timed steps');
console.log('appendices : ' + appendices.map(a => a.letter).join('') + (patterns.length ? '  patterns section: yes' : '  patterns section: no'));
console.log('habit steps: ' + (habits.map(h => h.id + ' ' + h.title.replace(/\*\*/g, '')).join(' | ') || 'none'));
console.log('checks     : ' + checks.length);
blocks.forEach(b => { const n = b.weeks.reduce((a, w) => a + w.steps.length, 0); console.log('  ' + b.title + ' -> ' + n + ' steps, ' + b.weeks.filter(w => w.title).map(w => w.title.replace(/^Week /, 'W') + '(' + w.steps.length + ')').join(' ') ); });
if (warns.length) { console.log('\nWARNINGS (' + warns.length + '):'); warns.slice(0, 80).forEach(w => console.log('  ' + w)); if (warns.length > 80) console.log('  ... ' + (warns.length - 80) + ' more'); }
if (errors.length) { console.log('\nERRORS (' + errors.length + '):'); errors.slice(0, 80).forEach(e => console.log('  ' + e)); if (errors.length > 80) console.log('  ... ' + (errors.length - 80) + ' more'); process.exit(1); }
console.log('\nOK: structure is valid.');
