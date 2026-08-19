# Salvation High — guida

Questo è il sito della scuola, costruito con **Eleventy** (uno static site generator), esattamente come *salvation-herald* e *salvation-museum*. Il concetto chiave: **non tocchi quasi mai l'HTML**. Il testo delle pagine è scritto in file Markdown facili da leggere, e i dati che si ripetono ovunque (indirizzo, telefono, nome del preside...) stanno in un unico file.

---

## 1. Mettere il sito online (una volta sola)

Servono due account gratuiti: **GitHub** (dove vivono i file) e **Netlify** (che pubblica il sito e lo aggiorna da solo). Nessun pagamento, nessuna carta.

1. **Crea un account su github.com.**
2. **Crea un repository nuovo** (bottone "New"), chiamalo per esempio `salvation-high`.
3. **Carica i file.** Nella pagina del repository vuoto scegli "uploading an existing file" e trascina dentro **tutto il contenuto di questa cartella** (`package.json`, `.eleventy.js`, `netlify.toml`, la cartella `src/`, ecc.). NON serve caricare `node_modules` né `_site` — si generano da soli.
4. **Crea un account su netlify.com** (puoi entrare con GitHub).
5. In Netlify: **"Add new site" → "Import an existing project" → GitHub →** scegli il repository `salvation-high`. Netlify legge da solo il file `netlify.toml` e sa già cosa fare. Premi **Deploy**.
6. Dopo circa un minuto avrai un indirizzo tipo `salvation-high.netlify.app`. Il sito è online.

Da questo momento **non torni più su Netlify**: ogni modifica ai file su GitHub ripubblica il sito automaticamente in meno di un minuto.

---

## 2. Modificare il testo di una pagina esistente

Ogni pagina del sito corrisponde a un file `.md` dentro `src/` (per esempio `src/about.md` è la pagina "Chi siamo", `src/athletics/football.md` è la pagina dei Bucks). Per modificarla:

1. Vai nel repository su GitHub, apri il file.
2. Premi l'icona della matita ("Edit this file").
3. Modifica il testo — è scritto in Markdown: `**testo**` diventa **grassetto**, `## Titolo` diventa un sottotitolo, `[testo](/link/)` diventa un link.
4. In fondo alla pagina premi **"Commit changes"**.

Fatto: in meno di un minuto la modifica è online.

---

## 3. Pubblicare un nuovo avviso in bacheca

Ogni avviso è un file `.md` dentro `src/news/`. Per aggiungerne uno:

1. Vai in `src/news/` su GitHub → **"Add file" → "Create new file"**.
2. Dai un nome al file con la data davanti, per esempio: `2026-09-10-nuovo-avviso.md`
3. Incolla questo schema e cambia i valori:

```
---
title: "Il titolo dell'avviso"
date: 2026-09-10
category: "Atletica"
author: "Nome Cognome, ruolo"
---

Qui scrivi il testo dell'avviso. Vai a capo con una riga vuota tra un
paragrafo e l'altro.
```

4. Premi **"Commit changes"**.

L'avviso comparirà in cima alla [bacheca `/news/`](/news/) e tra i primi cinque in homepage — automaticamente, dal più recente al più vecchio.

**Nota:** dentro i file di `src/news/` NON puoi usare `{{ ... }}` nei campi in alto (title, date, category, author) — quelli restano testo semplice. `{{ school.qualcosa }}` funziona solo nel testo dell'avviso, sotto la riga `---`.

---

## 4. Cambiare i dati generali della scuola (indirizzo, telefono, nomi...)

Tutti i dati che si ripetono in più pagine — indirizzo, telefono, nome del preside, anno scolastico, colori — stanno in un solo file: **`src/_data/school.json`**. Cambi lì un valore e si aggiorna automaticamente ovunque compaia nel sito (header, footer, pagine contatti, ecc.).

---

## 5. (Opzionale) Lavorare in anteprima sul tuo PC

Non è necessario, ma se vuoi vedere le modifiche dal vivo prima di pubblicarle: installa Node.js, poi nella cartella del progetto esegui `npm install` una volta, e `npm start`. Apri l'indirizzo che compare (di solito `localhost:8080`): il sito si aggiorna mentre modifichi i file.

---

## Struttura delle cartelle

```
salvation-high/
├── package.json          → dipendenze (Eleventy)
├── .eleventy.js           → configurazione del generatore
├── netlify.toml           → istruzioni per Netlify
├── LEGGIMI.md              → questa guida
└── src/
    ├── index.njk           → homepage
    ├── news.njk            → bacheca avvisi (elenco automatico)
    ├── about.md             → Chi siamo
    ├── about/staff.md        → Staff e amministrazione
    ├── academics.md          → Materie e dipartimenti
    ├── academics/vocational.md → Percorsi vocazionali
    ├── athletics.md          → Tutti gli sport
    ├── athletics/football.md  → Salvation Bucks Football
    ├── activities.md          → Attività e Club
    ├── library.md              → Salvation Public Library
    ├── contact.md               → Contatti
    ├── students-families/       → Calendario, chiusure, mensa, trasporti, regolamento
    ├── news/                    → un file .md per ogni avviso
    ├── _data/
    │   └── school.json          → indirizzo, telefono, nomi, colori...
    ├── _includes/
    │   ├── base.njk              → scheletro HTML comune a tutte le pagine
    │   └── news-article.njk      → scheletro della pagina di un singolo avviso
    ├── css/
    │   └── school.css            → tutto lo stile del sito
    └── js/
        └── site.js               → menu mobile e rotazione foto in homepage
```
