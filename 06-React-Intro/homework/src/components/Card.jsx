import React from 'react';
import Temp from "./Temp";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div>
        <button onClick = {onClose}>x</button>
        <span>{name}</span>
        
        <div>
            <Temp etiq = "Min" valor = {min} ></Temp>
            <Temp etiq = "Max" valor = {max}></Temp>
            <img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt = "icono"/>
        </div>
    </div>
  )
};