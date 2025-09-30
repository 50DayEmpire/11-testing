import { beforeEach } from "vitest";
import ButtonCounter from "./ButtonCounter";
import { render, screen } from "@testing-library/react";

describe("<ButtonCounter />", () => {
  const action = vi.fn();
  beforeEach(() => {
    render(<ButtonCounter value={1} action={action} />);
  });

  it("Snapshot de todas las pruebas", () => {
    const button = screen.getByRole("button");
    expect(button).toMatchSnapshot();
  });

  it("cree un boton correctamente", () => {
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("+1");
  });
});
