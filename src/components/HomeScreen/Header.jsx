import React from 'react'
import logo from './../../../public/images/logo.png'
import SearchBar  from './SearchBar'
import Image  from './Image'
import './../../css/style.css'
import AdView from './AdView'
import List from './List'

export default function Header() {
  return (
    <main className='header'>    
        <nav className="nav">
        <div className="image">
            <img src={logo} className='img' alt='WOTKNOT' />
        </div>

        <div className="image">
            <SearchBar/>
        </div>
    </nav>
    <AdView/>
    <List/>
    </main>
  )
}
