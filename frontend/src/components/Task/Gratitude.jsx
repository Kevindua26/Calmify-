import React from 'react'
import "./Gratitude.css"
const Gratitude = () => {
  return (
    <div className='Gratitude'>
        <div class="containers">
        <div class="info-containers">
          <h1>GRATITUDE CARD</h1>
          <p>Write something about you enjoy doing in free time?</p>
        </div>
        <div class="input-containers">
          <div class="input-boxe">
            <textarea placeholder="I am gratefull for..."></textarea>
          </div>
          <div class="button-div">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gratitude