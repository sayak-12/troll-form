import { useState, useEffect } from "react";

const MobileComponent = () => {
  const [mob, setMob]=useState(null);
  const updatemob =(e)=>{
    var value = e.target.value;
    setMob(value);
  }
  const keydownhandler =(e)=>{
    var slider = e.target;
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown','a','s','d','w'].includes(e.key)) {
        e.preventDefault();
        if (e.key === 'ArrowLeft') {
        slider.value = parseInt(slider.value, 10) - 1;
        setMob(slider.value)
      } else if (e.key === 'ArrowRight') {
        slider.value = parseInt(slider.value, 10) + 1;
        setMob(slider.value)
      }
      else if (e.key === 'ArrowUp') {
        slider.value = parseInt(slider.value, 10) + 10000;
        setMob(slider.value)
    }
      else if (e.key === 'ArrowDown') {
        slider.value = parseInt(slider.value, 10) - 10000;
        setMob(slider.value)
    }
      else if (e.key == 'a') {
        slider.value = parseInt(slider.value, 10) - 100;
        setMob(slider.value)
    }
      else if (e.key === 'd') {
        slider.value = parseInt(slider.value, 10) + 100;
        setMob(slider.value)
    }
      else if (e.key === 'w') {
        slider.value = parseInt(slider.value, 10) + 1000;
        setMob(slider.value)
    }
      else if (e.key === 's') {
        slider.value = parseInt(slider.value, 10) - 1000;
        setMob(slider.value)
    }
    }
  }
  return (
    <div className="mobilediv">
        <input type="range" id="slider" min="0" max="9999999999" onChange={updatemob} onKeyDown={keydownhandler}></input>
        <ul>
            <li>up & down arrows = +-10000</li>
            <li>left & right arrows = +-1</li>
            <li>a & d keys = +-100</li>
            <li>w & s keys = +-1000</li>
        </ul>
        {mob && <div className="success">{mob}</div>}
    </div>
  );
};

export default MobileComponent;
