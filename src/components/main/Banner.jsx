import Slider from "react-slick";
import styled from "styled-components";
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
    autoplay: 1000,
  };
  return (
    <StyledSlider {...settings}>
      <img
        src="https://mshanken.imgix.net/wso/Articles/2018/NS_health112817_1600.jpg"
        alt=""
        srcset=""
      />
      <img
        src="https://img.freepik.com/free-vector/vector-set-bottles-with-alcohol-stemware_1441-42.jpg?w=2000"
        alt=""
        srcset=""
      />
      <img
        src="https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/11/1280/720/GettyImages-1238844614.jpg?ve=1&tl=1"
        alt=""
        srcset=""
      />
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 3.5px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white !important;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;
