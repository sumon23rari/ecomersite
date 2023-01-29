import Link from 'next/link';
import React from 'react';
import contacted from '../../../public/css/Contact.module.css';
import {FaPhoneAlt,FaClock} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
const Contact = () => {
    return (
        <div className='py-120'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-xl-4">
                        <div className={contacted.contactInfo}>
                            <h2 >contact info</h2>
                            <ul>
                                <li>
                                <div className={contacted.partIcon}>
                                    <span><FaPhoneAlt></FaPhoneAlt></span>
                                </div>
                                    <div className={contacted.partText}>
                                        <span>
                                            <Link href={'mailto:support@gmail.com'}>support@gmail.com</Link>
                                            <Link href={'tel:+1 212-683-9756'}>  +1 212-683-9756</Link>
                                        </span>
                                    </div>
                                   
                                    </li>
                                <li>
                                    <div className={contacted.partIcon}>
                                        <span><MdLocationOn></MdLocationOn></span>
                                    </div>
                                    <div className={contacted.partText}>
                                    799 W 6th St Hoisington, Kansas 121 Sparrow Hawk, Alberta
                                    </div>
                                </li>
                                <li>
                                    <div className={contacted.partIcon}>
                                        <span><FaClock></FaClock></span>
                                    </div>
                                    <div className={contacted.partText}>
                                        <span>Mon - Sat : 8:00am - 5:00pm</span>
                                        <span>Sunday: Closed</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-7 col-md-6">
                        <div className={contacted.conactForm}>
                            <h2>leave a message</h2>
                            <form className='row g-lg-4 g-3'>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" placeholder='Name'/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className="col-12">
                                    <textarea placeholder='your message'></textarea>
                                </div>
                                <div className="col-12">
                                    <button className='w-100'>Find an agent</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className={contacted.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14608.036944846413!2d90.36710721941003!3d23.747050044465734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1674899894779!5m2!1sen!2sbd" width="100%" height="450" marginTop="50" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;