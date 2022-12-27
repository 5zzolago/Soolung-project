import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import soolungBnr1 from "../../assets/soolung-bnr-1.jpg";
import soolungBnr2 from "../../assets/soolung-bnr-2.jpg";
import soolungBnr3 from "../../assets/soolung-bnr-3.jpg";

export default function Banner() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: 1000,
  };
  return (
    <StyledSlider {...settings}>
      <Link>
        <img src={soolungBnr1} alt="배너1" srcSet="" />
      </Link>
      <Link to={"/editor"}>
        <img src={soolungBnr2} alt="배너2" srcSet="" />
      </Link>
      <Link>
        <img src={soolungBnr3} alt="배너3" srcSet="" />
      </Link>
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  height: 440px;

  img {
    cursor: pointer;
  }

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
