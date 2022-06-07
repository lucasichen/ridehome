import React from 'react'
import { images } from '../../constants'
import './Header.scss'
import DarkMode from '../DarkMode/DarkMode.tsx'
// import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'
const Header = () => {
  return (
    <div className='Home'>
        <div className='header'>
            <div className='title'>
                <h1><a href = "https://github.com/lucasichen/ridehome" target="_blank" rel="noreferrer"> ride home </a></h1>
            </div>
            <DarkMode />
            {/* <BsFillVolumeUpFill id='souwnd-icon'/> */}
        </div>
        <img id='home-img' src={images.train_night} alt='home-img' />
    </div>
  )
}

export default Header