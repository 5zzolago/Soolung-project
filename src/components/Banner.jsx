import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>이미지 1</h3>
      </div>
      <div>
        <h3>이미지 2</h3>
      </div>
      <div>
        <h3>이미지 3</h3>
      </div>
      <div>
        <h3>이미지 4</h3>
      </div>
      <div>
        <h3>이미지 5</h3>
      </div>
      <div>
        <h3>이미지 6</h3>
      </div>
    </Slider>
  );
}
