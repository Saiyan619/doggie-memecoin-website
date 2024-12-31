import React from 'react'
import './header.css'

const Header = () => {
  return (
      <div className='header'>
          
          <div className='hero_container'>
              <div className='hero_left_container'>
                  <h1>$Doogie</h1>
                  <p>Doogie are 8,888 FREE* Memecoin that are a part of The Lucky Club
                      collection with a ERC721 Token Standard on the Ethereum Blockchain.</p>
                  <div>
                      <button>Buy</button>
                      <button>OPENSEA</button>
                  </div>
              </div>

              <div className='hero_right_container'>
                  <img src="./header-img1.png" alt="lion_img" />
              </div>
          </div>
      </div>
  )
}

export default Header
