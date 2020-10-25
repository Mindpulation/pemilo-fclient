import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageBlur = ({ scrollPosition, src }) => {
  return(
    <LazyLoadImage
      alt = {src}
      scrollPosition = {scrollPosition}      
      src = {src}
      effect = "blur"
      threshold = {100}
      placeholderSrc = {"/pemilo.svg"}
    />    
  );
}

export default trackWindowScroll(ImageBlur);