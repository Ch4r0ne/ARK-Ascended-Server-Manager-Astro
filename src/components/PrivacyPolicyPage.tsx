import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <a href="/">
            <button
              data-testid="button-back-privacy"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h1 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="text-muted-foreground">
              Der Schutz deiner Daten ist wichtig. Nachfolgend informiere ich dich gemäß Art. 13
              DSGVO darüber, welche personenbezogenen Daten bei der Nutzung dieser Website
              verarbeitet werden, zu welchen Zwecken und auf welcher Rechtsgrundlage.
            </p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-8 p-8 md:p-12">
              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  1. Verantwortlicher (Art. 13 DSGVO)
                </h2>
                <p className="text-muted-foreground">
                  Tim Leinich
                  <br />
                  Farbgasse 10
                  <br />
                  73553 Alfdorf
                  <br />
                  Deutschland
                  <br />
                  E-Mail: legal@technetpro.de
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  2. Hosting über GitHub Pages &amp; Server-Logfiles
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird über GitHub Pages bereitgestellt (GitHub, Inc.). Beim Zugriff
                  werden Server-Logfiles verarbeitet, die insbesondere die IP-Adresse, Datum und
                  Uhrzeit des Abrufs, abgerufene Datei, Referrer-URL und User-Agent enthalten
                  können. Weitere Informationen findest du im{' '}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    className="text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Privacy Statement
                  </a>
                  .
                </p>
                <p className="text-muted-foreground">
                  Zweck: Bereitstellung der Website, Gewährleistung von Stabilität und Sicherheit,
                  Fehleranalyse sowie Abwehr von Missbrauch.
                  <br />
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                  <br />
                  Empfänger: GitHub, Inc. als Hostingdienstleister.
                  <br />
                  Drittlandtransfer: Eine Verarbeitung in den USA kann erfolgen. GitHub gibt an,
                  nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert zu sein.
                </p>
                <p className="text-muted-foreground">
                  Speicherdauer: Logdaten werden durch GitHub nach deren Vorgaben gespeichert und
                  gelöscht.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">3. Kontaktaufnahme</h2>
                <p className="text-muted-foreground">
                  Wenn du mich per E-Mail kontaktierst, verarbeite ich die von dir übermittelten
                  Daten (E-Mail-Adresse, Name soweit angegeben, Inhalt der Nachricht) ausschließlich
                  zur Bearbeitung deiner Anfrage.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche
                  Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (allgemeine Kommunikation).
                </p>
                <p className="text-muted-foreground">
                  Speicherdauer: Die Daten werden gelöscht, sobald die Anfrage abschließend
                  bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  4. Drittanbieter-Links (GitHub)
                </h2>
                <p className="text-muted-foreground">
                  Diese Website verlinkt auf GitHub (z. B. Repository, Releases). Beim Anklicken
                  eines Links werden Daten an GitHub übermittelt; es gelten dann die
                  Datenschutzbestimmungen von GitHub.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  5. GitHub Live-Daten (nur relevant, wenn clientseitig geladen)
                </h2>
                <p className="text-muted-foreground">
                  Sofern auf der Website Projekt-Live-Daten (z. B. Stars, Release-Informationen oder
                  Status) clientseitig von GitHub geladen werden, kann dabei u. a. die IP-Adresse an
                  GitHub übermittelt werden.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an aktueller
                  Projektdarstellung).
                  <br />
                  Hinweis: Wenn Live-Daten ausschließlich build-time geholt und statisch ausgeliefert
                  werden, kann dieser Abschnitt entfallen.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  6. Lokale Speicherung (localStorage) – nur falls genutzt
                </h2>
                <p className="text-muted-foreground">
                  Soweit diese Website Funktionen nutzt, die Daten lokal im Browser speichern (z. B.
                  UI-Einstellungen), verbleiben diese Informationen auf deinem Endgerät und werden
                  nicht automatisch an mich übermittelt.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
                  nutzerfreundlichen Bereitstellung) oder Art. 6 Abs. 1 lit. b DSGVO (Erfüllung einer
                  von dir gewünschten Funktion).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  7. Cookies / Endgerätezugriffe
                </h2>
                <p className="text-muted-foreground">
                  Diese Website setzt nach aktuellem Stand keine Analyse- oder Marketing-Cookies
                  ein. Für nicht technisch erforderliche Cookies oder vergleichbare Technologien
                  wäre eine Einwilligung nach § 25 TDDDG erforderlich.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  8. Rechte der betroffenen Personen
                </h2>
                <p className="text-muted-foreground">
                  Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
                  (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
                  Widerspruch (Art. 21). Außerdem kannst du dich bei einer Aufsichtsbehörde
                  beschweren (Art. 77 DSGVO).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">9. Datensicherheit</h2>
                <p className="text-muted-foreground">
                  Die Übertragung erfolgt verschlüsselt (HTTPS/TLS). Darüber hinaus setze ich
                  angemessene technische und organisatorische Maßnahmen ein, um die Website zu
                  schützen.
                </p>
              </section>

              <div className="border-border/40 text-muted-foreground border-t pt-4 text-sm">
                Stand: 08.03.2025
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-privacy"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-bold"
              >
                Back to Home
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
