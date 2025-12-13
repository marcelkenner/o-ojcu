import { withMetadata } from "@/lib/metadata";
import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";

export const metadata = withMetadata({
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych na stronie książki O ojcu, który nigdy nim nie był.",
});

export default function PrivacyPolicyPage() {
  return (
    <SectionShell title="Polityka prywatności" eyebrow="Legal">
      <Container className="legal">
        <p className="muted">
          Szanujemy Twoją prywatność. Dane przesyłane za pośrednictwem tej strony służą wyłącznie do
          kontaktu i analityki odwiedzin. Nie prowadzimy newslettera ani zautomatyzowanego profilowania.
        </p>
        <ul className="legal__list">
          <li>Administratorem danych jest właściciel książki “O ojcu, który nigdy nim nie był”.</li>
          <li>Pliki cookies wykorzystujemy wyłącznie do anonimowych statystyk odwiedzin.</li>
          <li>Możesz w każdej chwili poprosić o usunięcie danych kontaktowych, pisząc na wskazany adres e-mail.</li>
          <li>Odnośniki do księgarń otwierają się w nowych kartach; zakupy realizowane są po stronie sprzedawców.</li>
        </ul>
        <p className="fine-print">
          Ostatnia aktualizacja: 13 grudnia 2025. Zaktualizujemy dokument, gdy pojawią się nowe funkcje lub integracje.
        </p>
      </Container>
    </SectionShell>
  );
}
