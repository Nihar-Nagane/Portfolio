import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {PHONE_NUMBER,EMAIL, LOCATION} from '../components/constants';
import {EMAIL_JS_SERVICE_ID,EMAIL_JS_TEMPLATE_ID,EMAIL_JS_PUBLIC_KEY} from '../EMAIL_JS';


function Contact(props){
    const form = useRef();
    const sendMail = (e)=>{
        e.preventDefault();
        emailjs.sendForm( props.EMAIL_JS_SERVICE_ID,  props.EMAIL_JS_TEMPLATE_ID, form.current,  props.EMAIL_JS_PUBLIC_KEY)
        .then((result)=>{
             console.log("Result: "+result.text);
             alert("Email send...");
        },(error)=>{
            console.log("Error: "+error.text);
        });
    }
    
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">{PHONE_NUMBER}</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">{EMAIL}</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">{LOCATION}</span>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendMail} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" name='name' className="contact__input" required/>
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" name='email' className="contact__input" required/>
                        </div>
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Subject</label>
                            <input type="text" name='subject' className="contact__input" required/>
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea name='message' id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        {/* <a href="" onClick={sendMail} className="button button__flex"> */}
                            <button className="button button__flex">
                                Send Me <i className="uil uil-message button__icon"></i>

                            </button>
                        {/* </a> */}
                    </div>
                </form>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    return {
      props: {
        EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
        EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,

      }, // will be passed to the page component as props
    }
  }


export default Contact;