---
layout: base.njk
title: "Salvation Bucks Football"
eyebrow: "Atletica"
crumb:
  href: "/athletics/"
  label: "Torna a Tutti gli sport"
description: "Storia, calendario e tradizioni della squadra di football della Salvation Junior-Senior High School."
---

<div class="figure">
  <img src="https://i.imgur.com/KAOdHyM.jpeg" alt="Il campo da football dei Salvation Bucks illuminato di sera">
  <figcaption>Il campo, sul lato est del complesso scolastico, durante una partita casalinga.</figcaption>
</div>

I **Salvation Bucks** sono la squadra di football della scuola, fondata nel **1927**. Il nome non fu scelto a caso: nella tradizione locale il cervo era già simbolo profondo della città grazie al folklore della Festa del Cervo, e associarlo alla squadra fu un modo per legare lo sport all'identità storica di Salvation. I colori ufficiali – **verde bosco e bianco** – richiamano la foresta appalachiana che circonda la città.

La squadra gioca nel campionato scolastico del **West Virginia**, categoria delle scuole rurali di media dimensione, con un calendario di sei-otto partite in stagione più eventuali playoff. Non è mai stata una potenza a livello statale, ma resta una squadra rispettata nella zona, con qualche buona stagione ogni tanto e una **rivalità storica** con la squadra di **Parsons**, la cui partita annuale viene giocata a turno nelle due città ed è tra le più sentite del calendario cittadino.

## Calendario stagione {{ footballSchedule.seasonYear }}

<table class="data-table">
  <thead>
    <tr><th>Data</th><th>Avversario</th><th>Sede</th><th>Ora</th></tr>
  </thead>
  <tbody>
    {%- for g in footballSchedule.games %}
    <tr><td>{{ g.date }}</td><td>{% if g.rivalry %}<strong>{{ g.opponent }}</strong>{% else %}{{ g.opponent }}{% endif %}{% if g.tag %} &middot; {{ g.tag }}{% endif %}</td><td>{{ "Casa" if g.home else "Trasferta" }}</td><td>{{ g.time }}</td></tr>
    {%- endfor %}
  </tbody>
</table>

<div class="alert-box">
  <h3>Friday Night Lights</h3>
  <p>Da settembre a novembre, ogni venerdì sera di partita casalinga, i sei riflettori a torre del campo si accendono al tramonto. È una tradizione sacra a Salvation quanto in tutta l'America rurale: il diner riduce l'orario, l'Hearth &amp; Brew chiude presto, e tre generazioni della stessa famiglia si ritrovano sulle stesse tribune.</p>
</div>

## Staff tecnico

L'allenatore capo (**Head Coach**) è **{{ school.headCoach }}**, ex giocatore della squadra tornato a Salvation dopo il college per allenare i Bucks, come da tradizione quasi tutti gli allenatori della scuola sono ex studenti. Gli allenamenti si svolgono cinque pomeriggi a settimana durante la stagione, spesso fino al buio.

## Tribune e impianti

Le tribune principali, sul lato ovest del campo, ospitano circa **seicento spettatori** su gradinate in metallo verniciato verde bosco; le tribune per i tifosi ospiti, sul lato opposto, hanno una capienza di circa centocinquanta posti. Il campo è circondato da una pista di atletica in terra battuta rossa. Un chiosco gestito a turno dai genitori dei giocatori vende hot dog, popcorn e cioccolata calda durante le partite, come raccolta fondi per la squadra.

Nel corridoio principale della scuola, una parete intera è dedicata alle fotografie della squadra di ogni anno dal 1927 a oggi.
