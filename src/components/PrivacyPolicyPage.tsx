import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
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
              Privacy Policy (Datenschutzerklärung)
            </h1>
            <p className="text-muted-foreground">
              Der Schutz deiner Daten ist mir wichtig. Nachfolgend informiere ich
              dich darüber, welche personenbezogenen Daten beim Besuch dieser
              Website verarbeitet werden und zu welchen Zwecken.
            </p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-8 p-8 md:p-12">
              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  1. Verantwortlicher
                </h2>
                <p className="text-muted-foreground">
                  [Vorname Nachname / Firma]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [PLZ Ort]
                  <br />
                  E-Mail: [E-Mail-Adresse]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  2. Hosting &amp; Server-Logfiles
                </h2>
                <p className="text-muted-foreground">
                  Bei jedem Zugriff auf diese Website erfasst der Hosting-Anbieter
                  automatisch technische Daten (z. B. IP-Adresse, Datum/Uhrzeit,
                  angeforderte Datei/URL, Referrer, Browser- und Betriebssystem-
                  Informationen). Diese Verarbeitung ist erforderlich, um die
                  Website bereitzustellen und abzusichern.
                </p>
                <p className="text-muted-foreground">
                  Zweck: Betrieb, Auslieferung, Stabilität, Fehleranalyse und
                  Schutz vor Missbrauch/Angriffen.
                  <br />
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse am sicheren Betrieb).
                  <br />
                  Empfänger: Hosting-Anbieter (Auftragsverarbeiter).
                  <br />
                  Speicherdauer: [z. B. 7/14/30 Tage oder „gemäß Vorgaben des
                  Hosting-Anbieters“].
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  3. Kontaktaufnahme
                </h2>
                <p className="text-muted-foreground">
                  Wenn du mich per E-Mail kontaktierst, verarbeite ich deine
                  Angaben (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich
                  zur Bearbeitung der Anfrage.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Anfrage/
                  Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  4. Drittanbieter-Links (GitHub)
                </h2>
                <p className="text-muted-foreground">
                  Diese Website verlinkt auf GitHub (z. B. Repository, Releases).
                  Beim Anklicken eines Links gelten die Datenschutzbestimmungen
                  von GitHub.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  5. GitHub Live-Daten (nur relevant, wenn clientseitig geladen)
                </h2>
                <p className="text-muted-foreground">
                  Auf der Website werden Projekt-Live-Daten (z. B. Release-Infos
                  oder Status) von GitHub geladen. Dabei kann u. a. deine
                  IP-Adresse an GitHub übermittelt werden.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an aktueller Projektdarstellung).
                  <br />
                  Empfänger: GitHub (Drittanbieter).
                  <br />
                  Hinweis: Eine Datenübermittlung in Drittländer (z. B. USA) ist
                  möglich; es gelten die Datenschutzbestimmungen von GitHub.
                  <br />
                  Hinweis: Wenn Live-Daten build-time geholt und statisch
                  ausgeliefert werden, kann dieser Abschnitt entfernt werden.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  6. Lokale Speicherung (localStorage)
                </h2>
                <p className="text-muted-foreground">
                  Bestimmte Funktionen speichern Daten lokal in deinem Browser
                  (localStorage), z. B. Kontaktanfragen, beigetretene E-Mail-
                  Adressen oder Sitzungs-/Fortschrittsdaten. Diese Daten werden
                  nicht automatisch an mich oder Dritte übertragen und bleiben
                  auf deinem Endgerät.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der
                  Funktion) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an einer nutzerfreundlichen Bereitstellung).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  7. Kontaktformular / Community-Beitritt
                </h2>
                <p className="text-muted-foreground">
                  Sofern du über die Website Kontakt aufnimmst oder dich mit
                  deiner E-Mail-Adresse anmeldest, werden die eingegebenen Daten
                  ausschließlich lokal im Browser gespeichert. Eine Übermittlung
                  an einen Server findet nicht statt.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Anfrage/
                  Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  8. Cookies / Endgerät-Zugriffe
                </h2>
                <p className="text-muted-foreground">
                  Diese Website setzt nach aktuellem Stand keine Analyse- oder
                  Marketing-Cookies ein. Technisch erforderliche Funktionen (falls
                  vorhanden) erfolgen auf Grundlage der gesetzlichen Vorgaben.
                  Für nicht technisch erforderliche Cookies/Technologien wäre eine
                  Einwilligung nach § 25 TDDDG erforderlich.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  9. Rechte der betroffenen Personen
                </h2>
                <p className="text-muted-foreground">
                  Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
                  (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18),
                  Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21).
                  Zudem hast du ein Beschwerderecht bei einer Aufsichtsbehörde
                  (Art. 77 DSGVO).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  10. Datensicherheit
                </h2>
                <p className="text-muted-foreground">
                  Die Übertragung erfolgt verschlüsselt (HTTPS/TLS). Zusätzlich
                  setze ich angemessene technische und organisatorische Maßnahmen
                  zur Absicherung der Website ein.
                </p>
              </section>

              <div className="border-border/40 text-muted-foreground border-t pt-4 text-sm">
                Stand: 20.01.2026
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
