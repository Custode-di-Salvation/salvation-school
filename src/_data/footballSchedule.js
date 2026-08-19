// Calendario stagionale dei Salvation Bucks, generato a ogni build.
//
// La squadra gioca sempre contro le stesse sette rivali di conference, nello
// stesso ordine e con la stessa alternanza casa/trasferta (compresa la
// "Rivalry Night" contro Parsons e l'Homecoming contro Cassidy County) — è
// il calendario di venerdì che viene ricalcolato sulla data reale, così la
// pagina mostra sempre la prossima stagione utile invece di restare
// bloccata su date passate.

const MESI_IT = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"
];

const AVVERSARI = [
  { opponent: "North Fork Eagles", home: true, time: "19:00" },
  { opponent: "Coalburg Raiders", home: false, time: "19:00" },
  { opponent: "Hendrick Falls Miners", home: true, time: "19:00" },
  { opponent: "St. Osmund Academy Crusaders", home: false, time: "19:30" },
  { opponent: "Parsons Ridgerunners", home: true, time: "19:00", tag: "Rivalry Night", rivalry: true },
  { opponent: "Cassidy County Wolves", home: true, time: "19:00", tag: "Homecoming" },
  { opponent: "Parsons Ridgerunners", home: false, time: "19:00", rivalry: true },
];

// Scarto in giorni di ogni partita rispetto al primo venerdì di settembre:
// quattro settimane consecutive, poi Rivalry Night, un turno di riposo,
// Homecoming, un altro turno di riposo, e il ritorno a Parsons.
const SCARTI_GIORNI = [0, 7, 14, 21, 28, 42, 56];

function nEsimoVenerdi(anno, meseIndice0, n) {
  const d = new Date(anno, meseIndice0, 1);
  let trovati = 0;
  while (true) {
    if (d.getDay() === 5) {
      trovati++;
      if (trovati === n) return new Date(d);
    }
    d.setDate(d.getDate() + 1);
  }
}

function primoVenerdiSettembre(anno) {
  return nEsimoVenerdi(anno, 8, 1); // settembre = indice 8
}

function formattaData(d) {
  return `Ven ${d.getDate()} ${MESI_IT[d.getMonth()]}`;
}

function generaStagione(anno) {
  const base = primoVenerdiSettembre(anno);
  return AVVERSARI.map((partita, i) => {
    const data = new Date(base);
    data.setDate(data.getDate() + SCARTI_GIORNI[i]);
    return {
      dateObj: data,
      date: formattaData(data),
      opponent: partita.opponent,
      home: partita.home,
      time: partita.time,
      tag: partita.tag || null,
      rivalry: !!partita.rivalry
    };
  });
}

module.exports = () => {
  const oggi = new Date();
  let anno = oggi.getFullYear();
  let partite = generaStagione(anno);

  // Se l'ultima partita della stagione di quest'anno è già passata,
  // la stagione mostrata diventa quella dell'anno successivo.
  const ultima = partite[partite.length - 1].dateObj;
  if (oggi > ultima) {
    anno += 1;
    partite = generaStagione(anno);
  }

  return {
    seasonYear: anno,
    games: partite
  };
};
