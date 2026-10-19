# French Self-Study Roadmap: Zero to C2

A literal, sequential, checkbox-driven guide for learning French entirely by self-study, with no tutor and no human speaking partner. Follow the steps in order. Each step has a **Done when** line that tells you exactly what "finished" means. Do not skip ahead.

## Files

| File | Level | Status |
|---|---|---|
| [README.md](README.md) | Conventions, methods, full roadmap | Done |
| [01-A1.md](01-A1.md) | A1 (Breakthrough), ~200 hours, 12 weeks | Done |
| [02-A2.md](02-A2.md) | A2 (Waystage), ~440 hours, 18 weeks | Done |
| [03-B1.md](03-B1.md) | B1 (Threshold), ~860 hours, 30 weeks | Done |
| [04-B2.md](04-B2.md) | B2 (Vantage), ~1020 hours, 34 weeks | Done |
| [05-C1.md](05-C1.md) | C1 (Effective operational proficiency), ~1100 hours, 36 weeks | Done |
| [06-C2.md](06-C2.md) | C2 (Mastery), ~1200 hours, 36 weeks | Done |

## How to read a step

Every step looks like this:

```
- [ ] A1-040 [Study · Deep · 60 min] Assimil cycle 3 (a): lessons 15–17, LRS cycle.
      Do: ...
      Done when: ...
```

- **ID** (A1-040): level and sequence number. Steps are prerequisites for everything after them.
- **Type tag**:
  - `Setup`: installing, buying, registering, organising.
  - `Study`: working through a lesson with a textbook or course.
  - `Drill`: memorisation and repetition (Anki, shadowing, copying, dictation, a song or poem by heart).
  - `Input`: listening, reading, watching for understanding.
  - `Produce`: writing or speaking (recorded) output.
  - `Culture`: orientation in the literature, film, television, chanson and societies of the French-speaking world, often in English at low levels.
  - `Check`: a verification step with a pass threshold. If you fail, the step tells you which earlier steps to repeat.
  - `Habit`: starts, changes or ends a **daily** (see *A study day* below). Tick it on the first day you do the daily; the daily then runs every study day until a later step ends it.
- **Effort tag**:
  - `Casual`: background or relaxed activity. Dictionary lookups optional. You can be tired.
  - `Focused`: normal study. Sit at a desk, no phone.
  - `Deep`: intensive study. Everything gets looked up, written down, and reviewed. Plan for the full time.
- **Time**: a realistic estimate for the step, which is always one sitting with one focus. Tasks too long for one sitting are written as numbered parts, (1/3), (2/3), (3/3), each its own step.
- **Patterns.** Each level file defines a few named patterns near its top (the *unit pattern*, the *series pattern*, the *book pattern* and so on). A one-line step that names a pattern, or says "(as A2-035)", is done exactly as the pattern or the named step says, and it is finished when that pattern's last instruction is done.

## The five standard methods

These are referred to by name throughout the guide so they are defined once here.

### Method 1: LRS cycle (Listen, Read, Shadow)

Used for every textbook dialogue, podcast segment or short audio clip.

1. **Listen blind**: play the audio 3 times without any text. After the third time, write down in English what you think happened and any French words you caught.
2. **Read**: read the transcript or dialogue slowly. Look up every unknown word on Larousse (larousse.fr/dictionnaires/francais) or WordReference, or in the textbook glossary. Write unknown words in your notebook with the sentence they appeared in.
3. **Listen with text**: play the audio while reading along, 2 times. Mark every liaison you hear (*les amis* with a *z*, *un homme* with an *n*) and every silent final letter.
4. **Shadow**: play the audio one sentence at a time. Pause, repeat the sentence aloud imitating rhythm, the nasal vowels, the *u/ou* contrast, the uvular *r*, the liaisons and the final-syllable stress as exactly as you can. Do the whole dialogue this way twice.
5. **Shadow live**: play the audio and speak along with it simultaneously, without pausing, 3 times.
6. **Record**: record yourself reading the dialogue aloud without the audio. Listen back once. Note the 3 words you were least happy with and look them up on Forvo or Larousse to hear a native pronunciation. Say each 10 times.

### Method 2: Anki card rules

- One deck named `Français`. Sub-decks are not needed.
- Card format: front = the French word **in a short phrase or sentence** (never the bare word alone), back = English meaning plus gender for nouns (`le`/`la`, or `un`/`une`) and the plural when it is irregular, plus for verbs the group, the past participle and, once you have learned them, the irregular present forms.
  - Good front: `J'habite à **Lyon**.` Back: `Lyon (proper noun)`.
  - Good front: `la **ville**` Back: `town, city (f.) · les villes`.
  - Good front: `Je **prends** le bus.` Back: `to take · prendre (je prends, nous prenons, ils prennent) · participle pris`.
  - Bad front: `ville`.
- Add audio when a resource provides it. For textbook words, use Larousse or Forvo audio. Do not skip words because they lack audio.
- Write every accent, cedilla and ligature. A card with `a` when you mean `à`, `ou` when you mean `où`, `ca` for `ça`, or `oeuf` for `œuf` is a wrong card. Learn the keyboard shortcuts on day one (step A1-002).
- Settings: 15 new cards per day, 200 max reviews per day, default FSRS scheduling. Never "reset" the deck.
- **Anki is a daily, non-negotiable habit** from step A1-004 onward through C2. Missing days is the single biggest cause of failure in self-study.
- "Mature" below means a card with an interval of 21 days or more (visible in Anki Stats).

### Method 3: Recording protocol

Used for all `Produce` speaking steps.

1. Read the prompt. You get 2 minutes of silent planning. You may write 5 keywords, no more.
2. Record with your phone's voice recorder. Do not stop or restart. Silence is allowed, quitting is not.
3. Name the file `YYYY-MM-DD-<stepID>.m4a` and keep it in a `recordings` folder. You will listen to old recordings at milestones to hear your progress.
4. Listen back once. Write down every error you notice yourself. Then transcribe what you said (as accurately as you can, errors included) and run it through the correction protocol below.

### Method 4: Correction protocol (AI-assisted)

Because there is no tutor, an AI assistant (Claude, ChatGPT or similar) is your correction service. Save this prompt and reuse it every time:

```
You are a strict but kind French teacher. I am a [A1/A2/...] learner. Below is my French text.
1. List every error as a table: my version | corrected version | one-line rule.
2. Give a fully corrected version.
3. Give a version a native speaker at my level would naturally write, keeping my meaning.
4. Tell me the 2 grammar points I should review.
Treat a missing or wrong accent, cedilla, agreement (gender, number, past participle) or elision as an error. Do not add content I did not write.
```

Rules: read every correction and copy each corrected sentence into your notebook by hand. If the same error type appears 3 times across texts, add a card to Anki with the rule and an example.

### Method 5: Intensive vs. extensive input

- **Intensive** (`Deep` tag): short text or clip. Understand 100 percent. Every unknown word looked up and written down. Reread or replay until it is fully clear.
- **Extensive** (`Casual` tag): long text or clip. Tolerate not understanding. No pausing, no dictionary unless a word appears 3 or more times. The goal is volume and getting used to real speed.

Both are required. Intensive builds the system; extensive makes it automatic.

## A study day

Every study day has two parts, always in this order:

1. **The dailies.** A short fixed list of things done every day in the same form: Anki, the commute-slot listening, the journal, and a few others. Each level's file lists them in a table near its top (*The A1 day*, *The A2 day* and so on) with their minutes, their content and their order. The content of a daily is always fixed by the guide (the next episode, the next book on a list, a topic cycle), so you never have to choose or schedule it. A `Habit` step in the sequence starts, changes or ends a daily.
2. **The current step.** The first unticked step in the guide. One step is one sitting with one focus. If you finish it and have time, start the next one. If it is too long for today, stop at a natural break and resume it tomorrow. Never skip ahead and never run two steps side by side.

That is the whole method. There are no weekly lanes, rhythms or background tracks to juggle: the podcast episodes, series episodes, readings, monologues and dictations that recur every week are written out as individual steps inside each week, in the order to do them, and long tasks are split into numbered sittings. The week headings are pacing marks of about six study days at the planned pace; if your days are shorter, a "week" simply takes longer.

The dailies take about an hour at the start of A1 and about two hours from A2 on, of which roughly half is listening or reading that needs no desk. The planned pace adds between one and three hours of steps a day. Each level's **Time** line gives its own figures and says how long the level takes at one hour of steps a day.

## Rules that never change

1. **Order is law.** Do steps in sequence. A step assumes every previous step is done.
2. **Done when means done when.** Do not tick a step whose criterion you have not met.
3. **Fail a Check, go back.** Every `Check` step lists what to repeat. Repeat it, then retake the check. There is no penalty; there is also no bypass.
4. **Anki every day.** See Method 2.
5. **Speak out loud every day**, even at A1, even alone. The French *r*, the nasal vowels, *u* against *ou*, the mute *e*, liaison and the even, final-stressed rhythm only come from daily use of the mouth, and they are what makes a learner understood or not.
6. **Keep a paper notebook.** Grammar notes, corrected sentences, verb tables and word lists go in it by hand. Handwriting slows you down in the useful way, and it forces you to write the accents and the agreements.
7. **Track the calendar, not the clock.** Log the date you finish each step in the margin. Milestone checks ask you to compare old and new recordings and texts.
8. **The dailies come first.** They carry most of your listening and reading volume (the comprehensible-input video, the commute slot, free reading) and they are done before the current step, every day. On a short day, do the dailies and a shorter stretch of the current step, never the other way round; grammar can be caught up, hours of input cannot.

## The full roadmap (detailed in each level's file)

All six levels are written. The rows summarise what each file contains.

| Level | Approx. hours (cumulative) | Spine resources | Input focus | Exit verification |
|---|---|---|---|---|
| A1 | 200 (200) | Assimil *French* (With Ease) lessons 1–56 in seven-lesson cycles, Language Transfer *Introduction to French* (all 40 tracks), TV5Monde *Apprendre le français* A1 exercises, *Grammaire progressive du français, niveau débutant* pages, Collins *Easy Learning French Grammar* and a *Bescherelle* | Children's songs, Prévert and Desnos poems and three La Fontaine fables, *Peppa Pig* and *Trotro* in French, Alice Ayel and *French Comprehensible Input* videos daily, a CLE *Lectures en français facile* A1 reader, *Extra en français* episodes 1–2, two films with English subtitles; the commute slot from Week 2 | Written A1 exit test in [01-A1.md](01-A1.md) plus the official DELF A1 sample paper |
| A2 | 440 (640) | Assimil *French* lessons 57–100 with the second wave as a daily, *Édito A2* (Didier) as the coursebook from Week 9, TV5Monde A2, *Grammaire progressive* débutant finished and intermédiaire begun, *1jour1actu* graded news | Olly Richards' *Short Stories in French for Beginners*, two A2 graded readers, the first *Petit Nicolas* stories, *Le Petit Prince* as the first unabridged book, Apollinaire, Verlaine and Hugo poems in the original, *Extra en français* in full, *Easy French*, *Un gars, une fille* weekly, *Kirikou*, *Ernest et Célestine*, *Intouchables*, *Bienvenue chez les Ch'tis*, *Le Dîner de cons*; the listening-only commute slot, free reading and the AI voice daily | Written A2 exit test in [02-A2.md](02-A2.md) plus the official DELF A2 sample paper |
| B1 | 860 (1500) | *Édito B1* (Didier) as the coursebook spine, *Grammaire progressive, niveau intermédiaire* complete, a systematic pass through *French Grammar and Usage* (Hawkins & Towell), RFI's *Journal en français facile* daily, *InnerFrench*, *C'est pas sorcier*, the *Livret du citoyen*; the weekly dictée begins | *Fais pas ci, fais pas ça* as the television spine, *Le Petit Nicolas* complete, *Oscar et la Dame rose*, *Monsieur Ibrahim*, *Kiffe kiffe demain*, *La Gloire de mon père*, Daudet, four Maupassant stories, Anouilh's *Antigone*, Simenon's *Le Chien jaune*, Camus's *L'Étranger*, *Tintin*, *Astérix*, *Persepolis*, eleven films with French subtitles; free reading from a B1 list, *Un gars, une fille* and *C'est pas sorcier* every week | Written B1 exit test in [03-B1.md](03-B1.md) plus the official DELF B1 sample paper and a *Livret du citoyen* quiz |
| B2 | 1020 (2520) | *Édito B2* (Didier) as the weekly coursebook, *Grammaire progressive, niveau avancé*, *French Grammar and Usage* in depth, *Projet Voltaire* and the weekly dictée; *Le Monde* daily, *Les Pieds sur terre*, *Transfert*, *Affaires sensibles*, *La Grande Librairie*; *Métronome* with its television series and *Secrets d'Histoire* for the history spine | *Dix pour cent* and *Kaamelott* as spines, *Le Bureau des légendes*, *Bref*, *Engrenages*; *Candide*, *La Peste*, *Huis clos*, *L'Avare*, *Bel-Ami*, *Un cœur simple*, *La Place*, *L'Amant*, *La Vie devant soi*, *Stupeur et tremblements*, *Le Silence de la mer*, *Une si longue lettre*, *Rhinocéros*, Baudelaire, Rimbaud, Verlaine, Apollinaire, Éluard; sixteen films, subtitles ending mid-level; the audiobook of each book in the commute slot, popular novels as free reading | Written B2 exit test in [04-B2.md](04-B2.md) plus the official DELF B2 sample paper |
| C1 | 1100 (3620) | Grevisse's *Le Bon Usage*, *Le Petit Robert*, the TLFi and the Académie's *Dire, ne pas dire*, the Certificat Voltaire; a *Français 1re* textbook for the *commentaire composé* and the *dissertation*, a *Terminale* philosophy manual, *Lagarde et Michard* as the literary-history spine; *Les Chemins de la philosophie*, *Le Masque et la Plume*, *Le Cours de l'histoire*, *Concordance des temps*, *Répliques*; *Le Monde* with *Le Monde des livres*, *Le Canard enchaîné*, *Le Monde diplomatique*, *Philosophie Magazine*; the Francophonie (Québec, Belgium, Switzerland, Africa, the Antilles) by radio and television; Gallica facsimiles for language history | *Le Bureau des légendes*, *Baron noir*, *En thérapie*, *Engrenages*, *Quotidien*, *Les Inconnus*, *Groland*, *Tout le monde en parle* (Radio-Canada); *Du côté de chez Swann*, *Madame Bovary*, *Le Rouge et le Noir*, *Le Père Goriot*, *Germinal*, *La Chute*, *Les Mots*, *Mémoires d'Hadrien*, *Zazie dans le métro* and *Exercices de style*, *Les Choses*, *Les Années*, *Au revoir là-haut*, *Trois femmes puissantes*, *Meursault, contre-enquête*, *Verre cassé*, *Cahier d'un retour au pays natal*, *Les Belles-sœurs*, *Phèdre*, *Tartuffe*, *Le Mariage de Figaro*, *Les Liaisons dangereuses*, *La Princesse de Clèves*, Montaigne, Pascal, Rousseau; 24 poems and 12 chansons by heart; sixteen films without subtitles; the living French and Francophone novel as free reading | Written C1 exit test in [05-C1.md](05-C1.md) plus the official DALF C1 sample paper, an EAF *commentaire composé* and a bac philosophy essay |
| C2 | 1200 (4820) | *Le Bon Usage* in depth and the *Grammaire méthodique du français*, Walter's *Le Français dans tous les sens* and Rey's *Mille ans de langue française*, the TLFi, Littré and the Académie's dictionaries from 1694, Godefroy, Frantext, Gallica; the speech archive (Académie *discours de réception*, de Gaulle, Malraux, Veil, Badinter, Hugo, Zola, Jaurès, the Nobel speeches, the Assemblée's *questions au gouvernement*); France Culture's *Fictions*, *Affaires sensibles*, *Le Masque et la Plume*, *Les Grosses Têtes*; *Le Monde* in full, *Le Canard enchaîné*, *Esprit*, the *Le Débat* archive; translation both ways against printed translations, proofreading, pastiche; the dictée de Pivot archive; the DALF C2 sample paper twice | The INA archive as the television spine: *Apostrophes*, *Cinq colonnes à la une*, *Les Dossiers de l'écran*, *Au théâtre ce soir*, *Les Shadoks*, Devos, Desproges, Coluche, Bourvil, Les Inconnus, Les Nuls, Les Deschiens, the Guignols; *La Chanson de Roland* and Marie de France, Villon, Rabelais and Montaigne in their own spelling, Ronsard and du Bellay, *Le Cid*, *Dom Juan*, La Bruyère and La Rochefoucauld, Saint-Simon, Voltaire's *Lettres philosophiques*, Rousseau's *Rêveries*, Chateaubriand, *Les Misérables* in full, *Illusions perdues*, *L'Assommoir*, Mallarmé and Lautréamont, *Voyage au bout de la nuit*, *Les Faux-monnayeurs*, *La Route des Flandres*, *La Vie mode d'emploi*, *Vies minuscules*, *Texaco*, *Les Soleils des indépendances*, *Nedjma*, *L'Avalée des avalés*, *Tristes Tropiques*, *Mythologies*, *Vernon Subutex*, *L'Adversaire*; 36 poems, chansons and comic pieces by heart; fifteen films without subtitles; a contemporary series every week and the *Misérables* adaptations after the novel; Proust's *Recherche*, Balzac, Stendhal, Flaubert, Zola and the living novel as free reading | The DALF C2 sample paper in full plus a C2 portfolio (3000-word essay, *nouvelle*, *chronique*, translation, *conférence*, *discours*, podcast) and the twelve-part exit check in [06-C2.md](06-C2.md) |

Hours are total time at the planned pace: the dailies (Anki, the commute slot, free reading and the rest) plus every step, counted at the minutes the steps state. Each level's **Time** line splits the figure into dailies and steps and says how long the level takes at one hour of steps a day. From A2 on, roughly a third of the total is casual input that needs no desk, and that third is the first thing to protect when life intervenes: a learner whose first language is English and who has no prior Romance language needs the volume more than the drills. French listening comprehension runs well behind reading, because the spoken language drops sounds, syllables and whole words (*je ne sais pas* is said *chais pas*) that the page keeps; the guide compensates with daily comprehensible-input video from the first weeks, a listening-only commute slot from Week 2 of A1, and a series every week from A2.

## A note on French specifically

- **Both sound and grammar are the problem, in different ways.** French spelling is historical, not phonetic: most final consonants are silent, *-ent* on a verb is silent, *eau*, *au* and *o* are one sound, and the same letters are read differently in *fils* (son) and *fils* (threads). Learn the reading rules once, early, in Block 1 of A1, and they hold for life. The sound system has what English lacks: four nasal vowels, the front rounded *u* (*tu*) against *ou* (*tout*), the uvular *r*, a mute *e* that appears and disappears, and liaison, which glues words together (*les enfants* with a *z*) and makes the spoken language sound like one long word. Grammar is the long haul: two genders with few reliable clues, agreement everywhere, three verb groups and a long list of irregular verbs, *passé composé* against *imparfait*, object pronouns and *y/en* in a fixed order, and the subjunctive. The guide front-loads sound and reading rules, then never lets verb tables drop.
- **Written and spoken French are two registers of one language.** Speech drops *ne* (*je sais pas*), says *on* for *nous*, uses *tu* among friends and *vous* with strangers, and has its own vocabulary (*bouquin*, *boulot*, *bagnole*) and verlan (*meuf*, *ouf*). Writing keeps *ne*, keeps *nous*, uses the *passé simple* in narrative, and is judged by a nation that holds spelling competitions (*la dictée*). You learn both, in parallel: the spoken register from the series, podcasts and comedians, the written register from the books and the weekly dictée from B1.
- **Liaison and elision are not optional.** *Les amis* with the *z* sound, *l'homme* not *le homme*, *j'ai* not *je ai*. A learner who gets these right is understood even with a thick accent; one who gets them wrong is not. They are drilled in every LRS cycle.
- **Numbers.** 70 is *soixante-dix*, 80 is *quatre-vingts*, 90 is *quatre-vingt-dix* in France. Belgium and Switzerland say *septante* and *nonante*, and Switzerland says *huitante*. There is a dedicated step for this.
- **One language, many countries.** The guide uses the French of France (the Paris standard of radio and television) as the pronunciation model and grammar default, because most free French-made resources (TV5Monde, RFI, France Télévisions, Radio France, the DELF/DALF exams) come from France. If you have a reason to prefer Québec French (family, work, where you live), say so at step A1-009 and follow the *Québec option* lines wherever they appear; the differences at A1 are the meal names (*déjeuner, dîner, souper*), a few greetings and the vowels. Belgian, Swiss, African and Antillean French enter the guide at C1 as varieties to understand. The literature, film and chanson canon is deliberately drawn from the whole Francophonie.
- **Literature and screen culture** are a stated goal of this programme. Every level includes a `Culture` track that builds familiarity with the canon in French (La Fontaine, Molière, Voltaire, Hugo, Flaubert, Baudelaire, Proust, Camus, Duras, Ernaux and the living generation, in France and beyond it), with the chanson that French speakers know by heart (Brassens, Brel, Piaf, Gainsbourg, Barbara, Stromae), and with the film and television they actually reference (Truffaut, Godard, Tati, *Les Tontons flingueurs*, *Amélie*, *Intouchables*, *Kaamelott*, *Dix pour cent*, *Le Bureau des légendes*, Devos and Coluche). At A1 and A2 much of this is done in English so that, by B1, you already know what you are reading.
