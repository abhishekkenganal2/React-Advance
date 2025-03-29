const { render, screen } = require("@testing-library/react");
const { default: Contacts } = require("../components/Contacts");
import "@testing-library/jest-dom";
// const Contacts from "../components/Contacts";


test("Testing the rendering of the contacts page.", () => {
    // This is a test to check if the contacts page renders correctly
    // You can use a testing library like React Testing Library or Enzyme to render the component
    // and check if the expected elements are present in the document.

    // For example, using React Testing Library:
    render(<Contacts/>);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
})

test("Testing the rendering of the buttons in contacts page.", () => {
    // This is a test to check if the contacts page renders correctly
    // You can use a testing library like React Testing Library or Enzyme to render the component
    // and check if the expected elements are present in the document.

    // For example, using React Testing Library:
    render(<Contacts/>);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
})