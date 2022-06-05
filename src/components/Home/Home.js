import React from 'react'
import './Home.scss'

import { useState } from 'react'
import AudioSlider from '../AudioSlider/AudioSlider'

import { sounds } from '../../constants'

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
        <div className='Home'>
            <div className='volume-controllers'>
                <div id = "dropdown-slider-div">
                    <AudioSlider
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
                    <AudioSlider 
                        title="talking"
                        sound={sounds.talking}
                        id="talkingSound"
                    />
                </div>
                <div>
                    <AudioSlider 
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