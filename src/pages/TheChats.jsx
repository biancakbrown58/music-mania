import React from 'react'
import Band from '../components/Band'

import Chats from '../images/TheChats.png'

const TheChats = () => {
  return (
    <>
      <ul>
        <li>
          <Band
            name="The Chats"
            image={Chats}
            info="High Risk Behavior is the debut studio album by the Australian punk rock band the Chats, released through Bargain Bin Records on 27 March 2020."
          />
        </li>
      </ul>
    </>
  )
}

export default TheChats
