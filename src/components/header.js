import { Navbar } from "flowbite-react";

function HeaderNav() {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src=".../assets/images/bitmoji"
            className="mr-3 h-6 sm:h-9"
            alt="Chika Bitmoji"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Chika Kim Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/aboutme">About Me</Navbar.Link>
          <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
          <Navbar.Link href="/resume">Resume</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
