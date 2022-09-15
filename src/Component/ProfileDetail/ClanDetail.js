import React from 'react'
import { BiShareAlt } from 'react-icons/bi'
import { MdGroups } from 'react-icons/md'

import Style from "./index.module.css"
export default function ClanDetail() {
  return (
    <div className={Style.forClan}>
    <div className={Style.forClanImg}>
    <div className={Style.divforImag}></div>

    </div>
    <div className={Style.clan}>
      <p className={Style.clanTitle}>ATTACK ON TITAN</p>
      <p className={Style.clanSubTitle}>All pubg players one co...</p>
    </div>
    <div className={Style.forImg}>
    <div className={Style.shareIconForClan}>

<BiShareAlt className={Style.shareButton}/>


    </div>
    <div className={Style.group}>
    
    <MdGroups/>
450
    </div>
    </div>


  </div>
  )
}
