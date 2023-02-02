import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  // console.log('props=====', props)
  const { photoGallery, height, width } = props;  
  const photos = photoGallery?.map((element:any) => (   

	<SplideSlide>
    <img height={height} width={width} src={element?.url} />
	</SplideSlide>    
  ));
  return (
    <>
     <div className=" w-1/2 h-1/4">
	  <Splide aria-label="Photo Slider">
     
          {photos}
      </Splide></div>
    </>
  );
};

export default PhotoSlider;