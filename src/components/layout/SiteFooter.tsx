import Link from "next/link";
import { routes } from "@/lib/routes";
import Container from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner" size="lg">
        <div>
          <p className="eyebrow">O ojcu</p>
          <p className="muted">© {year} Wszystkie prawa zastrzeżone.</p>
        </div>
        <div className="footer-links">
          <Link href={routes.privacy} className="nav-link">
            Polityka prywatności
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default SiteFooter;
