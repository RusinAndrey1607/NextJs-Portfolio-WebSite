import React, {  Dispatch, SetStateAction, useRef, useState } from 'react'
import {  useForm } from 'react-hook-form'
import styled from 'styled-components'
import styles from "./ContactUs.module.scss"
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Modal from '../Modal/Modal';

init("user_Tydhg2CBKV4kRFpIufUgj");

const ContactUs = () => {
    const [isModalActive, setModalActive] = useState(false)
    return (
        <div className={styles.contact} id="contact">
            <div className="container">
                <h3 className={styles.contact__title}> Contacts </h3>
                <div className={styles.contact__inner}>
                    <div className={styles.contact__info}>
                        <p className={styles.contact__paragraph}>
                            Contact me to discuss details of our project
                        </p>
                    </div>
                    { isModalActive && <Modal setActive={() => setModalActive(!isModalActive)} />}
                    <ContactFormWrapper>
                        <FeedBackForm setActive={setModalActive} />
                    </ContactFormWrapper>
                </div>
            </div>
        </div>
    )
}
const FormInputWrapper = styled.div`
    border-bottom: 2px solid ${props => props.theme.header.color};

`
const ContactFormWrapper = styled.div` 
    padding: 30px 0 30px 10px;
    width: 50%;
    color: ${props => props.theme.header.color};
    @media (max-width: 800px) {
        padding: 0 15px;
        width: 100%;
    }
`

type FeedBackPropsType = {
    setActive: Dispatch<SetStateAction<boolean>>
}
const FeedBackForm:React.FC<FeedBackPropsType> = ({setActive}) => {
    const form = useRef()
    const {
        register,
        formState: { errors, isValid },
        reset,
        handleSubmit,

    } = useForm({
        mode: "all",
    })
    const onClick = (e: HTMLFormElement) => {
        e.preventDefault()
        console.log(e)

        // @ts-ignore
        emailjs.sendForm('service_bf5qh8e', 'template_i0hiqex', form.current, 'user_Tydhg2CBKV4kRFpIufUgj').then((result) => {
            console.log(result.text)
            setActive(true)
            reset()
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        // @ts-ignore
        <form ref={form} className={styles.form} onSubmit={onClick}>
            <div className={styles.form__title}>Send Message</div>
            <div className={styles.form__inputs}>
                <label className={styles.form__label}>
                    Name
                    <FormInputWrapper>
                        <input
                            {...register("name", { required: "Thist Field is required", minLength: { value: 3, message: "Min length is 3 symbols" } })}
                            className={styles.form__input}
                            placeholder="Enter your name"
                        />

                    </FormInputWrapper>
                    <div className={styles.error}>{errors.name && errors.name.message}</div>

                </label>

                <label className={styles.form__label}>
                    Email
                    <FormInputWrapper>
                        <input
                            {...register("email", { required: "Thist Field is required", minLength: { value: 8, message: "Min length is 8 symbols" } })}
                            className={styles.form__input}
                            placeholder="Enter your email"
                        />

                    </FormInputWrapper>
                    <div className={styles.error}>{errors.email && errors.email.message}</div>

                </label>

                <label className={styles.form__label}>
                    Message
                    <FormInputWrapper>

                        <textarea
                            className={styles.form__message}
                            {...register("message", { required: "Thist Field is required", minLength: { value: 10, message: "Min length is 10 symbols" } })}
                            placeholder="Enter your message"
                        ></textarea>
                    </FormInputWrapper>
                    <div className={styles.error}>{errors.message && errors.message.message}</div>

                </label>
            </div>
            <button className={styles.form__button} disabled={!isValid} type='submit'>SUBMIT</button>
        </form>
    )
}
export default ContactUs
