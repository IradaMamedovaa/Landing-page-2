import React from 'react'

const Card = ({img, title, country}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <article>
            <h3>{title}</h3>
            <p className='country'>{country}</p>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere expedita vitae delectus dignissimos enim exercitationem quaerat cumque?</p>
            <a href="#">read more</a>
        </article>
    </div>
  )
}

export default Card