import React, { useEffect } from 'react'
import flower1 from "../../assets/flower-1.png"
import flower2 from "../../assets/flower-2.png"
import flower3 from "../../assets/flower-3.png"
import flower4 from "../../assets/flower-4.png"
import "./FillUps.css"
import { Button } from '@mui/material'
const FillUps = () => {
    
    const handleClick = (e) => {
        const canvas = document.getElementById('FillUpsCanvas');
        if (canvas) {
            canvas.style.zIndex = "2";
            const jsConfetti = new JSConfetti({ canvas });
            jsConfetti.addConfetti().then(()=> {
                alert("You did it!!");
                canvas.style.zIndex = "-1";
            })
        } else {
            console.error('Canvas not found!');
        }
    }
    
  return (

    <div className='FillUps relative overflow-hidden '>
       <canvas id='FillUpsCanvas' className=' w-[100vw] h-[100%]  absolute top-0 left-0 -z-10'></canvas>
         <h1 className='title'> POSITIVE AFFIRMATIONS</h1>
    <div className="content container mx-auto">
        <div className="card">
            <img src={flower1} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am happy</p>
                <input className='fillUps-input' type="text"  placeholder="happy"/>
            </div>
        </div>
        <div className="card">
            <img src={flower2} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am confident</p>
                <input className='fillUps-input' type="text" placeholder="confident"/>
            </div>
        </div>
        <div className="card">
            <img src={flower3} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am worthy</p>
                <input className='fillUps-input' type="text" placeholder="worthy"/>
            </div>
        </div>
        <div className="card">
            <img src={flower4} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am at peace</p>
                <input className='fillUps-input' type="text" placeholder="at peace"/>
            </div>
        </div>
        <div className="card">
            <img src={flower1} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am in control.</p>
                <input className='fillUps-input' type="text" placeholder="in control."/>
            </div>
        </div>
        <div className="card">
            <img src={flower2} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am cute</p>
                <input className='fillUps-input' type="text" placeholder="cute"/>
            </div>
        </div>
        <div className="card">
            <img src={flower3} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am deserving</p>
                <input className='fillUps-input' type="text" placeholder="deserving"/>
            </div>
        </div>
        <div className="card">
            <img src={flower4} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am creative</p>
                <input className='fillUps-input' type="text" placeholder="creative"/>
            </div>
        </div>
        <div className="card">
            <img src={flower1} alt="flower" className='h-[250px]'/>
            <div className="cardtext">
                <p>I am successful</p>
                <input className='fillUps-input' type="text" placeholder="successful"/>
            </div>
        </div>
    </div>
    <div className='text-center'>
    <Button className='' onClick={handleClick}>Done</Button>

    </div>
    </div>
  );
}

export default FillUps