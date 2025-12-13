import { DomQuery } from '../utils/dom.js';

export class AccordionController {
  private dom: DomQuery;

  constructor(dom = new DomQuery()) {
    this.dom = dom;
  }

  init(containerSelector = '[data-accordion]') {
    const container = this.dom.query<HTMLElement>(containerSelector);
    if (!container) return;
    const triggers = this.dom.queryAll<HTMLButtonElement>('.accordion__trigger', container);

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.toggle(trigger));
      trigger.addEventListener('keydown', (event) => this.handleKey(event, trigger));
    });
  }

  private toggle(trigger: HTMLButtonElement) {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId = trigger.getAttribute('aria-controls');
    if (!panelId) return;
    const panel = document.getElementById(panelId);
    if (!panel) return;

    trigger.setAttribute('aria-expanded', String(!expanded));
    this.dom.toggleHidden(panel, expanded);
  }

  private handleKey(event: KeyboardEvent, trigger: HTMLButtonElement) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle(trigger);
    }
  }
}
