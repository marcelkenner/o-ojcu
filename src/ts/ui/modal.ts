import { DomQuery } from '../utils/dom.js';

export class ModalController {
  private dom: DomQuery;
  private activeModal: HTMLElement | null = null;

  constructor(dom = new DomQuery()) {
    this.dom = dom;
  }

  open(selector: string) {
    const modal = this.dom.query<HTMLElement>(selector);
    if (!modal) return;
    this.activeModal = modal;
    modal.dataset.state = 'open';
  }

  close() {
    if (!this.activeModal) return;
    this.activeModal.dataset.state = 'closed';
    this.activeModal = null;
  }
}
