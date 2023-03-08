import React from 'react'

const Sample = ({title, categ, img}) => {
  return (
    <div className='sample'>
        <article className="content">
            <h3 className='title'>{title}</h3>
            <p className='categ'>{categ}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ab. Suscipit dignissimos tempore nisi a animi nam. Iusto quis blanditiis tempore obcaecati suscipit nesciunt exercitationem! Illum error doloremque ex eum? <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta, rerum amet cupiditate assumenda illo mollitia! Necessitatibus voluptatibus eum beatae!</p>
            <button>Read more</button>
        </article>
        <img src={img} alt="" />
    </div>
  )
}

export default Sample