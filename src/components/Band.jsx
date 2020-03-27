import React from 'react'
// import OrvillePeck from '../images/OrvillePeck.jpg'

const Band = (props) => {
  return (
    <li className="container">
      {/* <hi>hi</hi> */}
      <h2>{props.name}</h2>
      <img className="image" src={props.image} alt="" />

      <p className="info">{props.info}</p>
    </li>
  )
}

export default Band
