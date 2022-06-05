import React from 'react'
import './Home.scss'

import MySlider from '../MySlider/MySlider'

import { images, sounds } from '../../constants'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'


const Home = () => {

    const getInitialSoundState = () => {
        const value = sounds.line1;
        return value;
    }

    const getInitialMuteState = () => {
        const value = '1';
        return value;
    }

    const muteStates = [
        {name: 'off', value: '0'},
        {name: 'on', value: '1'},
    ]

    const options = [
        {sound: "TTC line 1", value: sounds.line1},
        {sound: "TTC line 2", value: sounds.line2},
        {sound: "TTC line 3", value: sounds.line3},
        {sound: "TTC line 4", value: sounds.line4},
        {sound: "endless", value: sounds.endless}
    ]

    const [value, setValue] = useState(getInitialSoundState)

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        // Home page
        <div className='Home'>

            {/* Header */}
            <div className='header'>

                <div className='title'>
                    <h1><a href = "https://github.com/lucasichen/ridehome" target="_blank" rel="noreferrer"> ride home </a></h1>
                </div>
                
                {/* <BsFillVolumeUpFill id='souwnd-icon'/> */}


                {/* Title */} 
                <div className='title'> 
                    <h1>Ride Home</h1>
                </div>
                {/* Sound icon */}
                <BsFillVolumeUpFill id='sound-icon'/>

            </div>
            {/* Image of train */}
            <img id='home-img' src={images.train_night} alt='home-img' />

            {/* Sliders */}
            <div className='volume-controllers'>
                <div id = "dropdown-slider-div">
                <MySlider
                    title=""
                    sound={value}
                    id="subwaySound"
                />
                    <div id = "dropdown-div">
                        <select value = {value} onChange={handleChange} id = 'dropdown'>
                           {options.map((option) => (
                               <option value = {option.value}>{option.sound}</option>
                           ))}
                        </select>
                    </div>

                </div>
                <div>
                    <MySlider 
                        title="talking"
                        sound={sounds.talking}
                        id="talkingSound"
                    />
                </div>
                <div>
                    <MySlider 
                        title="music"
                        sound={sounds.music}
                        id="musicSound"
                    />
                </div>
            </div>
        </div>
    )
}


export default Home