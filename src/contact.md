---
layout: base.njk
title: "Contatti"
eyebrow: "Trovaci"
description: "Indirizzo, telefono e orari della Salvation Junior-Senior High School."
---

<div class="info-strip">
  <div class="info-tile"><div class="k">Indirizzo</div><div class="v-text">{{ school.address }}</div></div>
  <div class="info-tile"><div class="k">Telefono</div><div class="v-text">{{ school.phone }}</div></div>
  <div class="info-tile"><div class="k">Fax</div><div class="v-text">{{ school.fax }}</div></div>
  <div class="info-tile"><div class="k">Email</div><div class="v-text">{{ school.email }}</div></div>
</div>

## Uffici

<ul class="staff-list">
  <li class="staff-row"><span class="who">Segreteria</span><span class="role">{{ school.phone }} &middot; {{ school.officeHours }}</span></li>
  <li class="staff-row"><span class="who">Ufficio presenze</span><span class="role">{{ school.attendancePhone }}</span></li>
  <li class="staff-row"><span class="who">Infermeria</span><span class="role">interno segreteria, {{ school.phone }}</span></li>
  <li class="staff-row"><span class="who">Salvation Public Library</span><span class="role">stesso edificio, ingresso indipendente sul cortile</span></li>
</ul>

## Come raggiungerci

La scuola sorge nella parte alta di **The Terrace**, l'area residenziale a nord-est del centro di Salvation, raggiungibile a piedi o in auto da Main Street seguendo Ridge School Road in salita. Un parcheggio visitatori è disponibile davanti all'ingresso principale; il parcheggio sterrato sul lato del campo da football viene usato nei giorni di partita.

<div class="alert-box">
  <h3>Visite ed eventi pubblici</h3>
  <p>Auditorium e mensa sono disponibili, fuori dall'orario scolastico, per eventi cittadini e riunioni pubbliche del Consiglio Cittadino. Per informazioni, contatta la segreteria.</p>
</div>

<h2 id="non-discriminazione">Avviso di non discriminazione</h2>

<p>Salvation City Schools non discrimina sulla base di razza, colore, origine nazionale, sesso, disabilità o età nei propri programmi, attività e opportunità di impiego, in conformità con il Titolo VI, il Titolo IX, la Sezione 504 e l'Americans with Disabilities Act (ADA). Per segnalazioni o richieste in merito alle politiche di non discriminazione, contattare <strong>{{ school.vicePrincipal }}</strong>, Coordinatrice distrettuale per la non discriminazione, al {{ school.phone }}.</p>
