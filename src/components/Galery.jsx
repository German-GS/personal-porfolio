import React from 'react'
import '../style/galery.css'
import galeryPhoto from '../images/Viejo violinista-2.jpg'

function Galery() {
    return (
        <div classNmae="galery">
           <div className="card">
               <div className="card__title">
                   <h2>Title Card</h2>
               </div>
               <div className="card__img">
                    <img src={galeryPhoto} alt="" srcset="" />
               </div>
                <div className="card__footer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam ab laboriosam, ipsum, a cumque </p>

                    <button clas>VieW</button>
                </div>

           </div>
            
        </div>
    )
}

export default Galery
