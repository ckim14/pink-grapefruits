import { Carousel } from "flowbite-react";

function Banner() {
  return (
    <div className="h-200 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/assets/images/banner.JPG" alt="chika banner image" />
      </Carousel>
    </div>
  );
}

export default Banner;
