
import { SplideSlide } from "@splidejs/react-splide";
import * as React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../assets/css/banner.css";
const BannerSlide = (props:any) => {

  const { imageForBanner} = props;  
  const photos = imageForBanner?.map((element:any) => (   

	<SplideSlide>
    <img  src={element?.url} />
	</SplideSlide>    
  ));
  return (
    <Slide>
      <div className="each-slide-effect">
        <div>{photos} </div>
      </div>
    
    </Slide>
  );
};

export default BannerSlide;
