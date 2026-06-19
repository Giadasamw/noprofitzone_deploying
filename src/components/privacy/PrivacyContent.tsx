"use client";

const lastUpdated = "Giugno 2026";

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 18,
};

export default function PrivacyContent() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <p style={monoStyle}>— Privacy Policy</p>
        <h1 className="privacy-title">
          Informativa sul trattamento dei{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>dati personali.</em>
        </h1>
        <p className="privacy-intro">
          La presente informativa descrive le modalità di trattamento dei dati personali
          degli utenti che consultano il sito <strong>noprofitzone.com</strong> e che
          interagiscono con i servizi offerti da No Profit Zone, ai sensi del Regolamento
          (UE) 2016/679 (&ldquo;GDPR&rdquo;) e del D.lgs. 196/2003 come modificato dal D.lgs. 101/2018.
        </p>
        <p className="privacy-updated">Ultimo aggiornamento: {lastUpdated}</p>

        <div className="privacy-body">
          <article className="privacy-block">
            <h2 className="privacy-h2">1. Titolare del trattamento</h2>
            <p className="privacy-p">
              Il Titolare del trattamento è <strong>No Profit Zone</strong>, un progetto di
              Allarà Nicoletta, con sede in Via S. Marco, 21 — 20121 Milano (Italia), P.IVA
              09912150969.
            </p>
            <p className="privacy-p">
              Per qualsiasi richiesta relativa al trattamento dei dati è possibile scrivere
              a <a className="privacy-link" href="mailto:infonoprofitzone@gmail.com">infonoprofitzone@gmail.com</a>.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">2. Tipologie di dati raccolti</h2>
            <p className="privacy-p">
              Trattiamo le seguenti categorie di dati, a seconda dell&apos;interazione con il sito:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Dati di contatto e di candidatura</strong> — nome, cognome,
                organizzazione, indirizzo email, eventuali informazioni sul bando o sul
                progetto e contenuto dei messaggi inviati tramite il form di contatto.
              </li>
              <li>
                <strong>Dati di prenotazione</strong> — informazioni fornite durante la
                prenotazione di una call tramite Calendly (nome, email, orario scelto).
              </li>
              <li>
                <strong>Dati di navigazione</strong> — dati tecnici raccolti automaticamente
                (indirizzo IP, tipo di browser e dispositivo, pagine visitate, durata della
                visita) attraverso strumenti di analisi statistica.
              </li>
              <li>
                <strong>Cookie e identificatori</strong> — come descritto al paragrafo 6.
              </li>
            </ul>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">3. Finalità e basi giuridiche</h2>
            <p className="privacy-p">I dati sono trattati per le seguenti finalità:</p>
            <ul className="privacy-list">
              <li>
                <strong>Rispondere alle richieste</strong> ricevute tramite il form di
                contatto o via email e gestire la relazione conoscitiva — base giuridica:
                misure precontrattuali e consenso dell&apos;interessato (art. 6.1 lett. a e b GDPR).
              </li>
              <li>
                <strong>Gestire la prenotazione delle call</strong> conoscitive — base
                giuridica: misure precontrattuali (art. 6.1 lett. b GDPR).
              </li>
              <li>
                <strong>Analizzare in forma statistica</strong> l&apos;utilizzo del sito per
                migliorarne contenuti e funzionalità — base giuridica: consenso (art. 6.1
                lett. a GDPR) per i cookie analitici non anonimizzati.
              </li>
              <li>
                <strong>Adempiere a obblighi di legge</strong> di natura fiscale, contabile
                e amministrativa — base giuridica: obbligo legale (art. 6.1 lett. c GDPR).
              </li>
            </ul>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">4. Servizi e strumenti di terze parti</h2>
            <p className="privacy-p">
              Per il funzionamento del sito e dei servizi ci avvaliamo dei seguenti
              fornitori, che possono trattare dati personali in qualità di responsabili o
              titolari autonomi:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Vercel Inc.</strong> — hosting e distribuzione del sito.
                Raccoglie dati tecnici e log di sistema necessari all&apos;erogazione del
                servizio.
              </li>
              <li>
                <strong>Google Analytics / Google Tag Manager</strong> (Google Ireland Ltd.)
                — misurazione statistica delle visite e gestione dei tag. Può utilizzare
                cookie e raccogliere dati di navigazione in forma aggregata.
              </li>
              <li>
                <strong>Google Search Console</strong> (Google Ireland Ltd.) — monitoraggio
                della presenza del sito sui motori di ricerca; tratta dati aggregati e
                anonimi relativi alle ricerche.
              </li>
              <li>
                <strong>Calendly LLC</strong> — gestione delle prenotazioni delle call
                conoscitive. Tratta i dati forniti al momento della prenotazione secondo la
                propria informativa.
              </li>
              <li>
                <strong>Google Meet</strong> (Google Ireland Ltd.) — piattaforma utilizzata
                per lo svolgimento delle call online.
              </li>
            </ul>
            <p className="privacy-p">
              Alcuni di questi fornitori possono trasferire dati al di fuori dello Spazio
              Economico Europeo. In tali casi il trasferimento avviene sulla base di
              decisioni di adeguatezza o di Clausole Contrattuali Standard approvate dalla
              Commissione Europea.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">5. Modalità e luogo del trattamento</h2>
            <p className="privacy-p">
              I dati sono trattati con strumenti informatici e telematici, adottando misure
              di sicurezza tecniche e organizzative adeguate a prevenire la perdita,
              l&apos;uso illecito o non autorizzato e l&apos;accesso non consentito ai dati.
              Il trattamento è effettuato dal Titolare e dai responsabili sopra indicati.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">6. Cookie</h2>
            <p className="privacy-p">
              Il sito utilizza cookie tecnici necessari al corretto funzionamento e, previo
              consenso, cookie analitici e di terze parti collegati a Google Analytics e
              Google Tag Manager. I cookie tecnici non richiedono consenso; quelli analitici
              e di profilazione vengono installati solo dopo l&apos;accettazione da parte
              dell&apos;utente. È possibile gestire le preferenze sui cookie in qualsiasi
              momento dalle impostazioni del proprio browser.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">7. Periodo di conservazione</h2>
            <p className="privacy-p">
              I dati di contatto e di candidatura sono conservati per il tempo necessario a
              gestire la richiesta e l&apos;eventuale rapporto di consulenza, e comunque non
              oltre quanto previsto dagli obblighi di legge. I dati di navigazione e i cookie
              analitici sono conservati secondo i tempi indicati dai rispettivi fornitori.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">8. Diritti dell&apos;interessato</h2>
            <p className="privacy-p">
              In qualità di interessato hai il diritto di accedere ai tuoi dati, chiederne la
              rettifica o la cancellazione, limitarne od opporti al trattamento, nonché il
              diritto alla portabilità dei dati (artt. 15-22 GDPR). Puoi inoltre revocare in
              qualsiasi momento il consenso prestato e proporre reclamo all&apos;Autorità
              Garante per la protezione dei dati personali (
              <a className="privacy-link" href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">
                garanteprivacy.it
              </a>
              ).
            </p>
            <p className="privacy-p">
              Per esercitare i tuoi diritti scrivi a{" "}
              <a className="privacy-link" href="mailto:infonoprofitzone@gmail.com">infonoprofitzone@gmail.com</a>.
            </p>
          </article>

          <article className="privacy-block">
            <h2 className="privacy-h2">9. Modifiche alla presente informativa</h2>
            <p className="privacy-p">
              Il Titolare si riserva di aggiornare la presente informativa per adeguarla a
              modifiche normative o ai servizi offerti. Le eventuali variazioni saranno
              pubblicate su questa pagina con l&apos;indicazione della data di ultimo
              aggiornamento.
            </p>
          </article>
        </div>
      </div>

      <style jsx>{`
        .privacy-section {
          padding: 80px 0 120px;
        }
        .privacy-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .privacy-title {
          font-family: "Mackinac", "Iowan Old Style", Georgia, serif;
          font-size: clamp(33.6px, 3.64vw, 50.4px);
          line-height: 1.04;
          letter-spacing: -0.018em;
          font-weight: 700;
        }
        .privacy-intro {
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 640px;
          margin-top: 32px;
        }
        .privacy-updated {
          font-family: "Mallory", sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 20px;
        }
        .privacy-body {
          margin-top: 64px;
          border-top: 1px solid var(--line);
        }
        .privacy-block {
          padding: 40px 0;
          border-bottom: 1px solid var(--line);
        }
        .privacy-h2 {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(18px, 1.8vw, 23px);
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .privacy-p {
          font-size: 13.2px;
          line-height: 1.7;
          color: var(--ink-soft);
          margin-bottom: 14px;
        }
        .privacy-p:last-child {
          margin-bottom: 0;
        }
        .privacy-list {
          list-style: none;
          margin-top: 8px;
        }
        .privacy-list li {
          font-size: 13.2px;
          line-height: 1.7;
          color: var(--ink-soft);
          padding-left: 22px;
          position: relative;
          margin-bottom: 14px;
        }
        .privacy-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .privacy-link {
          color: var(--accent-deep);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .privacy-section {
            padding: 40px 0 60px;
          }
          .privacy-container {
            padding: 0 24px;
          }
          .privacy-title {
            font-size: 28px;
          }
          .privacy-intro {
            font-size: 13px;
            max-width: 100%;
          }
          .privacy-body {
            margin-top: 40px;
          }
          .privacy-block {
            padding: 32px 0;
          }
        }
      `}</style>
    </section>
  );
}
