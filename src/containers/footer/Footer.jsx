import React from 'react';
import './footer.scss';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className='gpt3__footer section__padding'>

            <div className='gpt3__footer-heading'>
                <h2 className='heading heading__secondary heading__footer'>
                    Do you want to step in to the future before others
                </h2>
            </div>

            <div className='gpt3__footer-btn'>
                <button type="submit" className='btn__container'>
                    <a href="#">Request Early Access</a>
                </button>
            </div>

            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img
                        src={gpt3Logo}
                        alt="brand logo" />

                    <p> &#169; All Rights Reserved</p>
                </div>

                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <a href="#">Overons </a>
                        </li>
                        <li>
                            <a href="#">Social Media</a>
                        </li>
                        <li>
                            <a href="#">Counters </a>
                        </li>
                        <li>
                            <a href="#">Contact </a>
                        </li>
                    </ul>
                </div>

                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href="#">Terms & Conditions </a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact </a>
                        </li>
                    </ul>
                </div>

                <div className='gpt3__footer-links_div'>
                    <h4>Get in Touch</h4>
                    <ul>
                        <li>
                            <a href="#" >Pune, Maharashtra </a>
                        </li>
                        <li>
                            <a href="#">work.prayagt@gmail.com</a>
                        </li>
                        <li>
                            <a href="#" target='_blank'>LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer