import "@testing-library/jest-dom";

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
};
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "innerWidth", {
  writable: true,
  value: 1024,
});
