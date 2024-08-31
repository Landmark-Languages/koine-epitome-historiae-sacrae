# Ἐπιτομὴ τῆς Παλαιᾶς Διαθήκης (koine-epitome-historiae-sacrae)

This repository represents an ongoing project to translate Charles Lhomond's simple Latin [Epitome Historiae Sacrae](./doc/epitome_historia_sacrae.pdf) into equally simple Koine Greek.

The current HTML version of the work can be viewed at https://landmark-languages.github.io/koine-epitome-historiae-sacrae/. This version always represents the current state of the project's approved work (i.e., the `main` branch of the project).

## Motivations

There are various motivations for this project; here are some of the main ones:

- A similar work already exists for the New Testament, Nicholas Stoffel's Ἐπιτομὴ τῆς Καινῆς Διαθήκης. The Old Testament equivalent is lacking.
- There is a general need for additional "easy" input in Ancient Greek generally.
- Reading the entire Old Testament in Ancient Greek is daunting because of the text's size and complexity; a reader of this nature would be a good introduction to some of the vocabulary and idiom, as well as a more comprehensible summary of the whole.
- Learners of Ancient Greek who are already familiar with the Latin _Epitome_, the Old Testament stories, or both, will find this text much more readily comprehensible than other readers' texts.
- Many (most?) learners of Ancient Greek are first exposed to Attic Greek, e.g., via _Athenaze_, and thus lack the familiarity with vocabulary and idiom required to jump right in to reading the Old (or New) Testament.

## Principles

Related to the motivations, the project follows these principles:

- Assume the reader has learned _some_ Ancient Greek (the text is not fit to teach Ancient Greek "from zero"), but perhaps not much. More specifically, we'll assume that the reader has available the vocabulary of the 1st volume of _Athenaze_.
- We will thus gloss all vocabulary that does not appear in the 1st volume of _Athenaze_, using only vocabulary that _does_ appear in the volume _or_ using images and other aids to create the gloss.
- Lhomond's Latin text will be our guide. We will essentially be translating it, while using Koine (and especially Old Testament) idiom, phrasing, and vocabulary whenever possible, so long as it conforms with the other goals of being simple, readable, and close enough to Lhomond's text to be comprehensible to those familiar with that text.
- It is a bonus if a vocabulary/translation choice also uses vocabulary from Stoffel's Epitome of the New Testament.
- We will make this available freely (currently as HTML and as a PDF (PDF is TODO)). It is _possible_ that, when the work is finished, it will also be published as a hard copy somewhere.

## Contributing

Contributions are 100% welcome! The way to contribute is to fork this repository, make changes on your fork, and then open a PR back to this repository (TODO: include links for this). When you make the PR, if you have not already signed the contributor agreement, you will have to do that (TODO); this is essentially just saying that you agree that your contribution is also public domain and could theoretically be published anywhere without attribution, etc. If the PR is approved and the contributor agreement is signed, your PR will be merged in to this repository and published as HTML and PDF (PDF is TODO).

PRs will of course be approved only if they conform with the goals and principles outlined above (I'll have to be the ultimate judge of that, but I'll try my best to be fair and flexible). PRs will also have to follow these conventions:

1. All contributions must be written in Markdown. See [pt1.md](./src/pt1/pt1.md) file for some examples. Note in particular that we are using [markdown-it](TODOLINK) and [markdown-it-footnote](TODOLINK) to create the text. So, you should write using Markdown compatible with those tools. The footnotes, in particular, are used to provide glosses and other readers' aids: you should write them in the same way they are written in the just-referenced pt1.md file.
2. For organizational purposes, the text is divided into seven parts (seven "ages" -- here we are following the same structure found in the version of the Epitome Historiae Sacrae put out by Focus Publishing). Each part lives in its own sub-directory of the `src` directory. Each part's sub-directory contains an "images" directory with any images used for that part of the text. And the Markdown text for that part lives at the root of that sub-directory, with a filename like `ptX.md`, where 'X' is the number for the part (1-7).
3. Do not edit [preface.md](./src/preface.md); nothing goes there except for the title of the work, and it's already there.
4. Always base your work on the version of Lhomond's text [found in this repository](./doc/epitome_historia_sacrae.pdf).

There's probably more that I'll think of soon, but that's it for now.
