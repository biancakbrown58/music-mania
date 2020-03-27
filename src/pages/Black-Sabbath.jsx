import React from 'react'
import Band from '../components/Band'

import Black from '../images/BlackSabbath.jpg'

const BlackSabbath = () => {
  return (
    <>
      <ul>
        <li>
          <Band
            name="Black Sabbath"
            image={Black}
            info="Black Sabbath is the debut studio album by the English rock band Black Sabbath. Released on 13 February 1970 in the United Kingdom and on 1 June 1970 in the United States, the album reached number eight on the UK Albums Charts and number 23 on the Billboard charts. Black Sabbath is widely considered the first heavy metal album. Additionally, the opening track of the album, Black Sabbath, is widely considered to be the first doom metal song"
          />
        </li>
      </ul>
    </>
  )
}

export default BlackSabbath
