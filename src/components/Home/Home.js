import React from 'react'
import './Home.scss'

import { useState } from 'react'
import MySlider from '../MySlider/MySlider'

import { images, sounds } from '../../constants'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'

const Home = () => {
    return (
        <div className='Home'>
            <div className='header'>
                <div className='title'>
                    <h1>Ride Home</h1>
                </div>
                <BsFillVolumeUpFill id='sound-icon'/>
            </div>
            <img id='home-img' src={images.train_night} alt='home-img' />
            <div className='volume-controllers'>
                <div>
                    <MySlider 
                        title="Train" 
                        sound={sounds.subway}
                        id="subwaySound"
                    />
                </div>
                <div>
                    <MySlider 
                        title="Talking"
                        sound={sounds.talking}
                        id="talkingSound"
                    />
                </div>
                <div>
                    <MySlider 
                        title="Announcer"
                        sound={sounds.announcer}
                        id="annoucerSound"
                    />
                </div>
                <div>
                    <MySlider 
                        title="Music"
                        sound={sounds.music}
                        id="musicSound"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home