import React from 'react'
import './../../css/MainContent.css'

export default function MainContent({news}) {
  return (
    <div className='fetch-container'>
    {news.length > 0 && (
        <div className='fetch'>
            <a href="/news/0" >
                <img src={news[0].urlToImage} className='imgs' alt={news[0].title}/>
            </a>
        </div>
    )}
    {news.length > 0 && (
        <div className='fetch texts'>
            <a href="/news/0" className='news'>
                <div className='text name' style={{marginTop:"130px"}}>
                    <h1>{news[0]?.source.name}</h1>
                    <h2>{news[0]?.title}</h2>
                    <p>{news[0]?.description}</p>
                </div>
            </a>
        </div>
    )}
</div>
  )
}
