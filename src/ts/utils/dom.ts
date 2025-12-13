export class DomQuery {
  query<T extends Element>(selector: string, root: ParentNode = document): T | null {
    return root.querySelector<T>(selector);
  }

  queryAll<T extends Element>(selector: string, root: ParentNode = document): T[] {
    return Array.from(root.querySelectorAll<T>(selector));
  }

  toggleHidden(element: HTMLElement, hidden: boolean) {
    element.hidden = hidden;
  }
}
