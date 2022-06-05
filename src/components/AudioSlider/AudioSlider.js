import React, {useState} from 'react'
import './AudioSlider.scss'

import Slider from '@mui/material/Slider'

// props: id, sound, title, volume
function AudioSlider(soundEffect) {
  const [sliderValue, setValue] = useState(0);

  const handleChange = (e, newVal) => {
    setValue(newVal);
    var audio = document.getElementById(soundEffect.id);
    audio.play();
    audio.volume = parseFloat(newVal);
  };

  return (
    <div>
      <Slider className="slider"
        value = { sliderValue } 
        step = { 0.1 }
        min={ 0.0 }
        max = { 1.0 }
        onChange={handleChange} 
      />
      <h2 className="sliderTitle">{soundEffect.title}</h2>
      <audio loop id={soundEffect.id} src={soundEffect.sound}></audio>
    </div>
  );
}

export default AudioSlider;