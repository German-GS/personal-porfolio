import React from 'react'
import '../style/cover.css'
import coverImg from '../images/Lineas Ferreas.jpg'

function Cover() {
    return (
        <div className="coverPage">
            <div className="coverPage__img">
                <img src={coverImg} alt="imagen cover de la pagina" srcset="" />

            </div>
            <div className="coverPage__footer__img">
                <p> <strong>German García S.</strong></p>
            </div>
            
        </div>
    )
}

export default Cover
