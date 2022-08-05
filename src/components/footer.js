import { Footer } from "flowbite-react";

function FooterBar() {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright href="" by="" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="https://github.com/ckim14">GitHub</Footer.Link>
          <Footer.Link href="https://www.linkedin.com/in/chikakim/">
            LinkedIn
          </Footer.Link>
          <Footer.Link href="https://www.instagram.com/thenotmexicanchika/">
            Instagram
          </Footer.Link>
        </Footer.LinkGroup>
        <h3>Made with ❤️ by Chika Kim.</h3>
      </Footer>
    </div>
  );
}

export default FooterBar;
