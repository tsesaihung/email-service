// import { render, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with proper texts", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toContain("Welcome to my optizmo coding test");

  expect(container.textContent).toContain("Please enter in seconds how often you would like to receive output alerts:");

  expect(container.textContent).toContain("Please enter an email address to search:");
  
});

it("renders with proper input field", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector("[name='processButton']").textContent).toEqual("Start");

  expect(container.querySelector("[name='searchEmailButton']").textContent).toEqual("Search");

});

it("changes value when clicked", () => {
  act(() => {
    render(<App />, container);
  });

  const button = container.querySelector("[name='processButton']");
  expect(button.innerHTML).toBe("Start");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button.innerHTML).toBe("Stop");

});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
