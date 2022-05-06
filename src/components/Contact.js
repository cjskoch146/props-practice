import React from "react"
import style from "./Contact.module.css"


export default function Contact(props) {
    return (
        <div className={style.ContactCard}>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className={style.InfoGroup}>
                <img src="../../images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className={style.InfoGroup}>
                <img src="../../images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}