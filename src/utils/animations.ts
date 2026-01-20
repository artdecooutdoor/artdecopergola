/**
 * Animation Utilities
 * Centralized scroll animation functions used across all pages
 * Replaces duplicated IntersectionObserver code
 */

// Universal stagger observer factory
export function createStaggerObserver(
  selector: string,
  onIntersect: (entry: IntersectionObserverEntry, index: number) => void,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        onIntersect(entry, index);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

// Generic animation trigger on intersection
export function observeElements(
  selector: string,
  className: string = 'in-view',
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

// Toggle class on related elements by data attribute
export function toggleElementsById(
  rootElement: HTMLElement,
  id: string | number,
  className: string,
  isActive: boolean
) {
  const elements = rootElement.querySelectorAll(`[data-id="${id}"]`);
  elements.forEach((el) => el.classList.toggle(className, isActive));
}

// Stagger animation with delay
export function addStaggerDelay(
  selector: string,
  baseDelay: number = 0.1,
  increment: number = 0.1
) {
  document.querySelectorAll(selector).forEach((el, index) => {
    const delay = (baseDelay + index * increment).toFixed(2);
    (el as HTMLElement).style.transitionDelay = `${delay}s`;
  });
}
