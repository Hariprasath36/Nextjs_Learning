"use client"
import React from 'react'

const links = ['all','Next 13','frontend','backend','fullstack']
const Filters = () => {
  return (
    <ul>
      {links.map((link) => (
          <button key={link}
          onClick={() =>{}}
          >
            {link}
          </button>
      ))}
    </ul>
  )
}

export default Filters