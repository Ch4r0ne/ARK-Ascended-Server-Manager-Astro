import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ImprintPage() {
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
              data-testid="button-back-imprint"
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
              Imprint (Impressum)
            </h1>
            <p className="text-muted-foreground">
              Angaben gemäß § 5 TMG. Bitte ergänze die Platzhalter mit deinen
              eigenen Daten.
            </p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-8 p-8 md:p-12">
              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Anbieter
                </h2>
                <p className="text-muted-foreground">
                  [Vorname Nachname / Firma]
                  <br />
                  [Rechtsform, z. B. Einzelunternehmen/GmbH]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [PLZ Ort]
                  <br />
                  [Land, falls außerhalb Deutschlands]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Kontakt
                </h2>
                <p className="text-muted-foreground">
                  E-Mail: [E-Mail-Adresse]
                  <br />
                  Telefon: [Telefonnummer, optional]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Vertretungsberechtigt
                </h2>
                <p className="text-muted-foreground">
                  [Vertretungsberechtigte Person, falls abweichend]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Registereintrag
                </h2>
                <p className="text-muted-foreground">
                  [Registergericht, Registernummer, falls vorhanden]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-muted-foreground">
                  [USt-IdNr. nach § 27a UStG, falls vorhanden]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Wirtschafts-ID
                </h2>
                <p className="text-muted-foreground">
                  [Wirtschafts-Identifikationsnummer, falls vorhanden]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Aufsichtsbehörde
                </h2>
                <p className="text-muted-foreground">
                  [Zuständige Aufsichtsbehörde, falls eine behördliche Zulassung
                  erforderlich ist]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
                </h2>
                <p className="text-muted-foreground">
                  [Name, Anschrift, ggf. wie oben]
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Hinweis auf Streitbeilegung
                </h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    className="text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Ich bin nicht verpflichtet und nicht bereit, an einem
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>
              </section>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-imprint"
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
