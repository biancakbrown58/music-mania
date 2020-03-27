import React from 'react'
import Band from '../components/Band'

import Orville from '../images/OrvillePeck.jpg'

const OrvillePeck = () => {
  return (
    <>
      <ul>
        <li className="Orville">
          {/* <h1>ok</h1> */}
          <Band
            name="Orville Peck"
            image={Orville}
            info="Orville's debut album, Pony, delivers a diverse collection of stories that sing of heartbreak, revenge and the unrelenting tug of the cowboy ethos."
          />
        </li>
      </ul>
    </>
  )
}

export default OrvillePeck
