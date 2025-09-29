import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Probar el componente <Counter/>", () => {
  it("Prueba: el titulo y estado se renderizan correctamente", () => {
    render(<Counter />);

    //Actual
    expect(screen.getByText("Counter: 0").tagName).toBe("H2");
  });

  it("Click en +1 aumenta correctamente", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByRole("counter").textContent).toContain("Counter: 1");
  });
  it("Click en -1 disminuye correctamente", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByLabelText("disminuir"));
    expect(screen.getByRole("counter").textContent).toContain("Counter: -1");
  });
});
