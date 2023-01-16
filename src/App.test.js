import { render } from "@testing-library/react";
import About from "./about/About";
import Tarjeta from "./about/tarjeta/Tarjeta";
import Contact from "./contact/Contact";
import Songs from "./home/songs/Songs";

describe("Test Suit Music", () => {
  it("render a title", () => {
    const component = render(<About />);

    component.getByText("Jose Andres Gavilanes");
  });

  it("render a title in contact", () => {
    const component = render(<Contact />);

    component.getByText("Contacto");
  });

  it("render a text in contact", () => {
    const component = render(<Contact />);

    component.getByText("Mensaje");
  });

  it("render a name field in contact", () => {
    const component = render(<Contact />);

    component.getByText("Nombre");
  });

  it("render an alt text in authors card", () => {
    const component = render(<Tarjeta />);

    component.getByAltText("Foto de los autores");
  });

  it("render an email field in contact", () => {
    const component = render(<Contact />);

    component.getByText("Correo");
  });
  it("render an surname field in contact", () => {
    const component = render(<Contact />);

    component.getByText("Apellido");
  });
});
