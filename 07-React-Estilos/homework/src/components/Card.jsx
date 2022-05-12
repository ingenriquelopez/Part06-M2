import React from 'react';
import styles from './Card.module.css';

export default function Card({max, min, name, img,onClose}) {
  // acá va tu código
  return (
  		<div className ={styles.card}>
      	<div className = {styles.divBoton}>
       		<button type   = 'button' className = {styles.boton} onClick = {onClose}>X</button>
       	</div>
      	<div>
      		<p className = {styles.ciudad}>{name}</p>
	      </div>
      
      	<div className = {styles.temperaturas}>
        		<table className = {styles.tbltmp}>
          		<tbody>
            		<tr>
              			<td> Min</td>
              			<td> Max</td>
            		</tr>
            		<tr>
              			<td> {min} </td>
              			<td> {max} </td>
            		</tr>
          		</tbody>
        		</table>
      	</div>
			<div className = {styles.timg}>
         	<img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt = ''/>
      	</div>
        
      </div>
  )
};