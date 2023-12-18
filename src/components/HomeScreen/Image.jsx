import React from 'react'
import wot from './../../../public/images/wot.jpg'

export default function Image() {
  return (
      <div>
        <img src={wot} alt="" style={{ width: "1250px", height: "auto", marginTop: "-55px" }} />
        <div className="text" style={{marginTop:"-200px", color:"#fff", fontSize:"30px"}}><h1>DOWNLOAD <i>WOTKNOT & FRIENDS VOL.1,</i> THE WOTKNOT'S 44-SONG CHARITY COMPILATION</h1></div>
     </div>
  )
}
