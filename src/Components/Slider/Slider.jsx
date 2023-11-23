import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';


function Slider(){

  const data = [
    {id: '1', image: '../../images/psn.PNG'},
    {id: '1', image: '../../images/blog-white.PNG'},
    {id: '1', image: '../../images/one-piece.PNG'},
    {id: '1', image: '../../images/pokedex.PNG'},
    {id: '1', image: '../../images/projeto-rocketseat.PNG'},
    {id: '1', image: '../../images/cronometro.PNG'},
    {id: '1', image: '../../images/calculadora.PNG'}
  ];

  return(
    <div className="container">
      <h2>Meus <span>Projetos</span></h2>

      <Swiper
        sliderPreview={1}
        pagination={{clickable: true}}
        navigation
      >
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide key={item.id}>
            <img 
              src={item.image} 
              alt="image"
              className="slider-item"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
