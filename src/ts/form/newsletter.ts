import { DomQuery } from '../utils/dom.js';
import { InputValidator } from '../utils/validate.js';

export class NewsletterFormCoordinator {
  private dom: DomQuery;
  private validator: InputValidator;

  constructor(dom = new DomQuery(), validator = new InputValidator()) {
    this.dom = dom;
    this.validator = validator;
  }

  init(selector = '[data-newsletter]') {
    const form = this.dom.query<HTMLFormElement>(selector);
    if (!form) return;
    const emailInput = form.querySelector<HTMLInputElement>('#email');
    const consentInput = form.querySelector<HTMLInputElement>('input[name="consent"]');
    const successMessage = form.querySelector<HTMLElement>('.form__success');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput?.value ?? '';
      const consent = consentInput?.checked ?? false;
      const canSubmit = this.validator.isEmail(email) && consent;

      if (!canSubmit) {
        form.reportValidity();
        return;
      }

      if (successMessage) {
        successMessage.hidden = false;
      }
      form.reset();
    });
  }
}
