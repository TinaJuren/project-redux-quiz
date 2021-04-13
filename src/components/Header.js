import React from 'react'

import headerImage from 'assets/foxesheader.jpg'

export const Header = () => {
  return (
    <header>
      <img className="header-image" src={ headerImage } alt="foxes quiz header" />
    </header>
  )
}