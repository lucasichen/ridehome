import React, {useState} from 'react'
import './Home.scss'

import AudioSlider from '../AudioSlider/AudioSlider'

import { sounds } from '../../constants'

const Home = () => {

    const getInitialSoundState = () => {
        const value = sounds.endless;
        return value;
    }

    const options = [
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
                    <div id="dropdown-div">
                        <select value = {value} onChange={handleChange} id='dropdown'>
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