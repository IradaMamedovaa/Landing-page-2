import React from 'react';
import './style.scss';
import Picture from '../../assets/images/aboveTheSea.jpg'

const AboveTheSea = () => {
  return (
    <div className='aboveTheSea'>
      <div><img src={Picture} alt="" /></div>
      <article className="content">
        <h2>Above <br />The Sea</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos optio incidunt voluptatibus est magnam, quae possimus voluptatem quisquam temporibus mollitia recusandae officia facilis vitae eligendi, cum laudantium atque repellat cupiditate. Voluptatem, alias eius, iste, architecto quo unde quod molestias vero dolorum perferendis recusandae a sequi eum. Amet reiciendis eveniet magnam veritatis! Vero saepe error perspiciatis eligendi odit porro, excepturi, accusamus rerum, reiciendis asperiores fugit earum expedita iste fuga quas voluptate? Quod inventore cum reiciendis nemo voluptatem, beatae maiores eaque!</p>
        <button>Read more</button>
      </article>
    </div>
  )
}

export default AboveTheSea