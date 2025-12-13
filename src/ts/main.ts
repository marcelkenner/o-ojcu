import { AnalyticsTracker } from './analytics.js';
import { NewsletterFormCoordinator } from './form/newsletter.js';
import { AccordionController } from './ui/accordion.js';
import { DomQuery } from './utils/dom.js';

class AppCoordinator {
  private analytics: AnalyticsTracker;
  private newsletter: NewsletterFormCoordinator;
  private accordion: AccordionController;
  private dom: DomQuery;

  constructor() {
    this.dom = new DomQuery();
    this.analytics = new AnalyticsTracker();
    this.newsletter = new NewsletterFormCoordinator(this.dom);
    this.accordion = new AccordionController(this.dom);
  }

  bootstrap() {
    this.setYear();
    this.newsletter.init();
    this.accordion.init();
    this.wireMenuToggle();
    this.analytics.log('app:init');
  }

  private setYear() {
    const yearEl = this.dom.query<HTMLElement>('[data-year]');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  private wireMenuToggle() {
    const toggle = this.dom.query<HTMLButtonElement>('.header__menu-toggle');
    const nav = this.dom.query<HTMLElement>('#primary-nav');
    if (!toggle || !nav) return;

    const update = () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      nav.hidden = false;
      nav.classList.toggle('nav--visible', expanded);
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      update();
    });

    update();
  }
}

new AppCoordinator().bootstrap();
