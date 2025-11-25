import React from "react";
import banner from "../assets/images/banner-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Herobanner() {
  const banners = [
    { id: 1, img: banner, title: "Fresh Vegetables", desc: "Big Discount" },
    { id: 2, img: banner, title: "Organic Fruits", desc: "Upto 50% Off" },
    { id: 3, img: banner, title: "Healthy Snacks", desc: "Grab it Fast" },
  ];


  
  return (
    <>
      <section className="banner">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {banners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="banner-1">
                <img width="100%" src={item.img} alt={item.title} />

                <div className="banner-content">
                  <h3>
                    {item.title} <br /> {item.desc}
                  </h3>
                  <p>Sign up for the daily newsletter</p>

                  <div className="banner-btn">
                    <input placeholder="Your email address" type="text" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

     
    </>
  );
}
