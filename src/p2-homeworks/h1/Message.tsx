/*import React from 'react'

function Message() {
    return (
        <div>

        </div>
    )
}

export default Message*/

import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={style.frame}>
            <img src={props.avatar} alt={'avatar'} className={style.avatar}/>
            <div className={style.big2In1}>
                <div className={style.smal2In1}></div>
            </div>
            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
