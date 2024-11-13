import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import a from "../img/a.jpg";
import b from "../img/b.jpg";
import d from "../img/d.jpg";
import e from "../img/e.jpg";
import f from "../img/f.jpg";
import g from "../img/g.jpg";
import h from "../img/h.jpg";
import i from "../img/i.jpg";
import k from "../img/k.jpg";
import l from "../img/l.jpg";
import m from "../img/m.jpg";
import n from "../img/n.jpg";
import o from "../img/o.jpg";
import p from "../img/p.jpg";
import q from "../img/q.jpg";
import r from "../img/r.jpg";
import s from "../img/s.jpg";
import t from "../img/t.jpg";
import u from "../img/u.jpg";
import v from "../img/v.jpg";
import w from "../img/w.jpg";
import "./imgswiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Imgswiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
      breakpoints={{
        700: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide style={{ backgroundImage: `url(${a})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${b})`, backgroundSize: "cover", backgroundPosition: "center" }}>
       
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${g})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      
      <SwiperSlide style={{ backgroundImage: `url(${d})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${e})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${f})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      
      
      <SwiperSlide style={{ backgroundImage: `url(${h})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${i})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      
      <SwiperSlide style={{ backgroundImage: `url(${k})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${l})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${m})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${n})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${o})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${p})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${q})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${r})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${s})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${t})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${u})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${v})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${w})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
      </SwiperSlide>


    </Swiper>
  );
};

export default Imgswiper;
