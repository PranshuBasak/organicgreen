import React from 'react'
import './Card.css'


const Card = ({
  imgSrc,
  icon,
  title,
  desc,
  desc2,
  btn
}) => {
  return (
    <div className='card-container'>
      {imgSrc && <img src={imgSrc} alt={title} className='card-img'/>}
      {icon && <div className='card-icon'>{icon}</div>}
      {title && <h1 className="card-title">{title}</h1>}
      {desc && <p className="card-des">{desc}</p>}
      {desc2 && <p className="card-des">{desc2}</p>}
      {btn && <a href='https://pranshubasak.co/' target="_blank" className="card-btn">View Details</a>}
    </div>
  )
}



export default Card