import React from "react"
import style from "./Contact.module.css"
import phoneIcon from "../images/phone-icon.png"
import mailIcon from "../images/mail-icon.png"


export default function Contact({image, name, phone, email}) {
    return (
        <div className={style.ContactCard}>
            <img src={image}/>
            <h3>{name}</h3>
            <div className={style.InfoGroup}>
                <img src={mailIcon} />
                <p>{phone}</p>
            </div>
            <div className={style.InfoGroup}>
                <img src={phoneIcon} />
                <p>{email}</p>
            </div>
        </div>
    )
}