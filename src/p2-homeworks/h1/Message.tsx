import React from "react";
import styles from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div className={styles.wrapper}>
            <img src={props.avatar}/>
            <div className={styles.message}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.message_data}>
                    {props.message}
                </div>
                <div className={styles.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
