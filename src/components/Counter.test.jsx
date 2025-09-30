import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

describe("Probar el componente <Counter/>", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("Primer Snapshots", () => {
    expect(screen.getByRole("counter")).toMatchSnapshot();
  });

  it("Prueba: el titulo y estado se renderizan correctamente", () => {
    //Actual
    expect(screen.getByText("Counter: 0").tagName).toBe("H2");
  });

  it("Click en +1 aumenta correctamente", () => {
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByRole("counter").textContent).toContain("Counter: 1");
  });
  it("Click en -1 disminuye correctamente", async () => {
    await userEvent.click(screen.getByLabelText("disminuir"));
    expect(screen.getByRole("counter").textContent).toContain("Counter: -1");
  });
  it("Simular comportamiento de usuario", async () => {
    const btnAum = screen.getByText("+1");
    const btnDis = screen.getByLabelText("disminuir");

    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 7");

    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 4");

    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    expect(screen.getByRole("counter").textContent).toContain("Counter: -1");

    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 1");
  });
  it("Click en Reset vuelve a 0", async () => {
    const btnAum = screen.getByText("+1");
    const btnDis = screen.getByLabelText("disminuir");
    const btnReset = screen.getByText("Reset");
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    await userEvent.click(btnAum);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 3");
    await userEvent.click(btnReset);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 0");
    await userEvent.click(btnReset);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 0");
    await userEvent.click(btnDis);
    await userEvent.click(btnDis);
    expect(screen.getByRole("counter").textContent).toContain("Counter: -2");
    await userEvent.click(btnReset);
    expect(screen.getByRole("counter").textContent).toContain("Counter: 0");
  });
});
