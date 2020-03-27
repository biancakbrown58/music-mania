import React from 'react'
import Band from '../components/Band'

import OrvillePeck from '../images/OrvillePeck.jpg'

const MainPage = () => {
  return (
    <>
      <ul>
        <li>
          <h1>ok</h1>
          <Band image={OrvillePeck} />
        </li>
      </ul>
    </>
  )
}

export default MainPage
