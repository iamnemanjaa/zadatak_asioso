import React from 'react';
import CardItem from './Carditem';
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1>Our focus</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-11.jpg'
              text='React.js - what makes this framework different?'
              label='asioso'
              path='/services'
            />
            <CardItem
              src='../images/img-13.jpg'
              text='Important facts about Microsoft Azure'
              label='asioso'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-16.jpg'
              text='Why WordPress is not suitable for large corporate websites'
              label='asioso'
              path='/services'
            />
            <CardItem
              src='../images/img-15.jpg'
              text='The open source javascript framework Vue.js'
              label='asioso'
              path='/services'
            />
            <CardItem
              src='../images/img-17.jpg'
              text='Home office productivity'
              label='asioso'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
