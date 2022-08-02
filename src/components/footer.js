import { Footer } from "flowbite-react";

function FooterBar() {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright href="" by="" year={2022} />
        <h3>Made with ❤️ by Chika Kim.</h3>
      </Footer>
    </div>
  );
}

export default FooterBar;
