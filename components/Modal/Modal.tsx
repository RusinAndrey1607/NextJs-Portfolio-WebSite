import React from 'react'
import styles from './Modal.module.css'
type ModalPropsType ={
    setActive: () => void
}
const Modal:React.FC<ModalPropsType> = ({setActive}) => {
    return (
        <div className={styles.modal} onClick={() => setActive()}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <h2>You have successfully sent a message, but if you are serious about cooperation, use Telegram.
                </h2>
            </div>
            
        </div>
    )
}

export default Modal
