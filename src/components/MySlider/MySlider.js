import React from 'react'
import './MySlider.scss'
import Slider from '@mui/material/Slider';

// props: id, sound, title, volume
function MySlider(props) {
  const [slideValue, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    var audio = document.getElementById(props.id);
    audio.play();
    audio.volume = parseFloat(newValue);
  };

  return (
    <div className="Slider">
      <Slider className="slider"
        value={slideValue} 
        step={0.1}
        min={0.0}
        max={1.0}
        onChange={handleChange} 
      />
      <h2 className="sliderTitle">{props.title}</h2>
      <audio loop id={props.id} src={props.sound}></audio>
    </div>
  );
}

export default MySlider;