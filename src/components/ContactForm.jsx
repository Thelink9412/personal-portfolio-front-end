import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_huy7a4c'
const TEMPLATE_ID = 'template_tjmue9c'
const PUBLIC_KEY = '-8gObznF9OHYPdQQp'
const ContactForm = () => {
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatusMessage("Message sent! I'll get back to you soon.");
                form.current.reset();
            })
            .catch(() => {
                setStatusMessage("Something went wrong. Please try again.");
            })
            .finally(() => {
                alert(statusMessage)
                setIsSending(false)
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit" className='submit-form-btn'>Send</button>
        </form>
    );
};

export default ContactForm