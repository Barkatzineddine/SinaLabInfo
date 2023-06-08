import { Swiper, SwiperSlide } from "swiper/react";

import React ,{useState,useEffect}from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/swiper-bundle.min.css'
import "./Espaceanalyses.css";
import bio from "../images/biochimie.svg";

export default function Espaceanalyses() {
  
  const [width, setWidth]   = useState(window.innerWidth);
const updateDimensions = () => {
    setWidth(window.innerWidth);
  
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

  return (
    <div className="cont-analyse">
      <h1 className="title-analyse">ANALYSES</h1>
      <div className="analyse-cont">
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation
        pagination={{clickable:false}}
        scrollbar={{draggable:true}}
        slidesPerView={width>1100?3:1 }
        
        spaceBetween={70}
    
       
      > 
        <SwiperSlide> 
        <div className="card-analyse">
          <img alt="" src={bio} />
          <h3>Biochimie</h3>
          <p>
            Le laboratoire da vacances men 20 aout 2023 7ta 02 septembre 2023 w
            li hada nous sommes désolé pour tout là
          </p>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="card-analyse">
          <img alt="" src={bio} />
          <h3>Biochimie</h3>
          <p>
            Le laboratoire da vacances men 20 aout 2023 7ta 02 septembre 2023 w
            li hada nous sommes désolé pour tout là
          </p>
        </div>
         </SwiperSlide>
        <SwiperSlide> 
        <div className="card-analyse">
          <img alt="" src={bio} />
          <h3>Biochimie</h3>
          <p>
            Le laboratoire da vacances men 20 aout 2023 7ta 02 septembre 2023 w
            li hada nous sommes désolé pour tout là
          </p>
        </div>
         </SwiperSlide>
        <SwiperSlide> 
        <div className="card-analyse">
          <img alt="" src={bio} />
          <h3>Biochimie</h3>
          <p>
            Le laboratoire da vacances men 20 aout 2023 7ta 02 septembre 2023 w
            li hada nous sommes désolé pour tout là
          </p>
        </div>
         </SwiperSlide>
        <SwiperSlide> 
        <div className="card-analyse">
          <img alt="" src={bio} />
          <h3>Biochimie</h3>
          <p>
            Le laboratoire da vacances men 20 aout 2023 7ta 02 septembre 2023 w
            li hada nous sommes désolé pour tout là
          </p>
        </div>
        </SwiperSlide>
        
      </Swiper> 
      </div>
    </div>
  );
}
