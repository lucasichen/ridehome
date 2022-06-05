import './Home.scss'

import { React, useState } from 'react'
import MySlider from '../MySlider/MySlider'

import { images, sounds } from '../../constants'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'

const Home = () => {

    const getInitialState = () => {
        const value = 'sounds.talking';
        return value;
    }

    const options = [
        {sound: "TTC Line 1", value: sounds.talking},
        {sound: "TTC Line 2", value: sounds.music}
    ]

    const [value, setValue] = useState(getInitialState)
    const handleChange = (event) => {
        setValue(event.target.value);
    }

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
                    title=""
                    sound={value}
                    id="subwaySound"
                />
                    <div>
                        <select value = {value} onChange={handleChange}>
                           {options.map((option) => (
                               <option value = {option.value}>{option.sound}</option>
                           ))}
                        </select>
                    </div>

                </div>
                <div>
                    <MySlider 
                        title="Talking"
                        sound={sounds.talking}
                        id="talkingSound"
                    />
                </div>
                {/* <div>
                    <MySlider 
                        title="Announcer"
                        sound={sounds.announcer}
                        id="annoucerSound"
                    />
                </div> */}
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