import React from 'react'
import "./slider.css";
import { Parallax } from "react-parallax"
import woman from "../assets/woman.jpg"
import fly from "../assets/fly.jpg"
import city from "../assets/city.jpg"


const parallex = () => {
  return (
    <div>
      <Parallax strength={300} bgImage={woman}>
        <div className="content"></div>
      </Parallax>
      <Parallax strength={300}  blur={{ min: -5, max: 15 }} bgImage={fly}>
        <div className="content"></div>
      </Parallax>
      <Parallax strength={-600} bgImage={city}>
        <div className="content"></div>
      </Parallax>
      <div className="content"></div>
    </div>
  )
}

export default parallex
