import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import React ,{useState,useEffect}from "react";
import Backconnaitre from "../components/Backconnaitre";
import imgconnaitre1 from "../images/connaitre1.svg";
import imgconnaitre2 from "../images/con-back2.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import "./Connaitre.css";
// import maps from '../images/maps.svg'
export default function Connaitre() {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
    
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
      <Nav />
      <Backconnaitre />
      <div className="about-lab">
        <h2 className="about-lab-title">
          {" "}
          LABORATOIRE D’ANALYSES MEDICALES IBEN SINA{" "}
        </h2>
        <div className="about-connaitre">
          <div className="about-con-txt">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.only five
              crem Ipsum has been the industry's standard dummy text ever
              gfbnthn ghhh tgntnhhgnfgnhndgt tgb tg htbrtgdb hgrhhtrhLorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.only five crem Ipsum
              has been the industry's standard dummy text ever gfbnthn ghhh
              tgntnhhgnfgnhndgt tgb tg htbrtgdb hgrhhtrhLorem Ipsum is{" "}
            </p>
          </div>
          <div className="about-con-img">
            <img alt="" src={imgconnaitre1} />
            <img alt="" src={imgconnaitre2}  className="back-con-2"/>
          </div>
        </div>
      </div>
      <div>
        <h2 className="time-work-con-title">
          QUAND VENIR AU LABORATOIRE IBEN SINA ?
        </h2>
        <div className="time-work-container">
          <Swiper
          modules={[Navigation, Scrollbar]}
          navigation
          scrollbar={{draggable:true}}
          slidesPerView={width>1400?6:width>1200?5:width>900?4:width>700?3:width>400?2:1}
          spaceBetween={40}
          
          >
            <SwiperSlide >
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time-work-box">
              <p className="day-work">Demeanche</p>
              <p className="time-txt-top">De 7h30 - 12h30</p>
              <p className="time-txt">De 13h30 - 16h30</p>
              </div>
            </SwiperSlide>
          </Swiper>
          
          
        </div>
        <div className="about-lab">
          <h2 className="about-lab-title">
            {" "}
            LABORATOIRE D’ANALYSES MEDICALES IBEN SINA{" "}
          </h2>
          <div className="about-connaitre">
            <div className="about-con-txt">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.only
                five crem Ipsum has been the industry's standard dummy text ever
                gfbnthn ghhh tgntnhhgnfgnhndgt tgb tg htbrtgdb hgrhhtrhLorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.only
                five crem Ipsum has been the industry's standard dummy text ever
                gfbnthn ghhh tgntnhhgnfgnhndgt tgb tg htbrtgdb hgrhhtrhLorem
                Ipsum is{" "}
              </p>
            </div>
            <div className="about-con-img">
              <img alt="" src={imgconnaitre1} />
              <img alt="" src={imgconnaitre2}  className="back-con-2"/>
            </div>
          </div>
        </div>
        <h2 className="about-lab-title-maps">OU TROUVER LE LABORATOIRE IBEN  SINA ?</h2>
        <div className="con-maps">
            <p> suivez l’itinéraire indiqué sur la carte pour arriver au laboratoires d’analyses médicales iben sina et profiter de nos services </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25855.480828549822!2d5.921296723806055!3d35.635434714962976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4707cb9c209fb%3A0xb010f15a345fbe68!2sDetective%20Ibn%20Sina%20Medical%20Labs!5e0!3m2!1sen!2sdz!4v1682969214980!5m2!1sen!2sdz" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  />
            
        </div>
        <Footer />
      </div>
    </div>
  );
}
