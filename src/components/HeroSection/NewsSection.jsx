import React from 'react'
import './../../css/NewsSection.css'
import SideBar from './SideBar'

export default function NewsSection({news}) {
  return (
    <main className='container'>
<div className='news-container'>
        {news.slice(1, 5).map((article, index) => (
            <div key={index} className='news'>
                <a href={`/news/` + index}>
                    <img src={article.urlToImage} className='images' alt={article.title}/>        
                </a>
                <div className='news text'>
                    <a href={`/news/` + index} className='news' style={{textDecoration:"none", color:"#000"}}>
                        <div className='text'>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        ))}
    </div>
    <SideBar/>
    </main>
  )
}
