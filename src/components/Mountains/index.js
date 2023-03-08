import React from 'react';
import './style.scss'
import Sample from './sample';
import Mountain1 from '../../assets/images/mountain1.jpg'
import Mountain2 from '../../assets/images/mountain2.jpg'
import Mountain3 from '../../assets/images/mountain3.jpg'


const Mountains = () => {
  return (
    <div className='mountains'>
      <div className="title">
        <h2>Mountain Collections</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis magnam animi architecto unde, facere quod expedita quibusdam sapiente minus distinctio?</p>
      </div>
      <div className="samples">
        <Sample title='Southerin Mountain' categ='South country' img={Mountain1}/>
        <Sample title='Northerin Mountain' categ='North country' img={Mountain2}/>
        <Sample title='Eastherin Mountain' categ='East country' img={Mountain3}/>
      </div>
    </div>
  )
}

export default Mountains