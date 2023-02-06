import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BannerSlide = (props: any) => {
  // console.log('props=====', props)
  const { imageForBanner, height, width } = props;
  const photos = imageForBanner?.map((element: any) => (
    <SplideSlide>
      <img height={height} width={width} src={element?.url} />
    </SplideSlide>
  ));
  return (
    <>
      <div className="">
        <Splide  aria-label="Photo Slider">{photos}</Splide>
      </div>
    </>
  );
};

export default BannerSlide;
