import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting Component", () => {
  // AAA Arrange, Act, Assert
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ..nothing

    // Assert
    const greetingElement = screen.getByText("Hello World", { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });

  test("renders 'Tag Yourelves' as a text when button NOT clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ..nothing

    // Assert
    const tagYourselevesElement = screen.getByText("Tag Yourelves", {
      exact: false,
    });
    expect(tagYourselevesElement).toBeInTheDocument();
  });

  test("renders 'Changed!' when the button was clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const greetingElement = screen.getByText("Changed!");
    expect(greetingElement).toBeInTheDocument();
  });

  test("renders 'Tag Yourelves' visible when button was clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const greetingElement = screen.queryByText("Tag Yourelves", {
      exact: false,
    });
    expect(greetingElement).toBeNull();
  });
});
