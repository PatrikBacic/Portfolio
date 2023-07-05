import "./index.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_ah8nna6",
                "template_4n53g8k",
                refForm.current,
                "fSkA4XGaXrM1OvNiC"
            )

            .then (
                () => {
                    alert("Message successfully sent")
                    window.location.reload("false")
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )
    }

    return (
        <div className="container-contact-page">
            <div className="text-zone">
                <h1 className="contact">
                    Contact me
                </h1>
                <div className="contact-form">
                    <form ref = {refForm} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type="text" name="from_name" placeholder="Name" required />
                            </li>
                            <li>
                                <input type="email" name="email_id" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required/>
                            </li>
                            <li>
                                <input type="submit" className="submit-btn" value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}