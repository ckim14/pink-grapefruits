import { Navbar } from "flowbite-react";

function HeaderNav() {
  return (
    <div>
      <Navbar stylee="background-color: bde0fe" fluid={true} rounded={true}>
        <Navbar.Brand href="https://ckim14.github.io/pink-grapefruits/">
          <img
            class="w-10 h-10 rounded-full"
            src="assets/images/bitmoji.png"
            alt="Rounded avatar"
          />

          <span className="px-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Chika Kim Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="https://ckim14.github.io/pink-grapefruits/"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#aboutme">About Me</Navbar.Link>
          <Navbar.Link href="#portfolio">Portfolio</Navbar.Link>
          <Navbar.Link href="#resume">Resume</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
