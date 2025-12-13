import Link from "next/link";
import { navLinks } from "@/lib/routes";
import Button from "@/components/ui/Button";
import Container from "./Container";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner" size="lg">
        <Link href="/" className="brand">
          O ojcu
        </Link>
        <nav className="primary-nav" aria-label="Główna nawigacja">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__cta">
          <Button as="a" href="/downloads/darmowy-fragment.pdf" size="sm">
            Pobierz fragment
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default SiteHeader;
