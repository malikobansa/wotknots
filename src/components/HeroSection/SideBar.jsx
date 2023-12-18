import React from 'react'
import detail from './../../../public/images/shopDetail.png'

export default function SideBar({news}) {
  return (
    <main style={{marginLeft:'20px'}}>
        <div className="bar-container">
            <img src={detail} alt="WOTKNOT" />
        </div>
        <div className="bar-container"><h1>LATEST</h1></div>
        <div className="bar-container">
            <div className="updates">
          {news.slice(11, 21).map((articles, index) => (
               <a href={'/news/' + index} key={index}  style={{textDecoration:'none', color:"black"}}>
                  <div className='updates'>
                      <img src={articles.urlToImage} className='images' alt={articles.title} />
                      <p className='newss-titles'>{articles.title}</p>
                  </div>
               </a>
               ))}
        </div>
      </div>
    </main>
  )
}
