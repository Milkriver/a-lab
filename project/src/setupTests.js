// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mocking methods which are not implemented in JSDOM
// Jest returns TypeError: window.matchMedia is not a function and doesn't properly execute the test.
// https://jestjs.io/docs/27.x/manual-mocks#using-with-es-module-imports
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    })
});
