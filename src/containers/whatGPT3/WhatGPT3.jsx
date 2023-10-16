import React from 'react';
import './whatGPT3.scss';
import { Feature } from '../../components';

const WhatGPT3 = () => {
    return (
        <section className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-features'>
                <Feature />
            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h2 className='heading heading__secondary'>
                    The possibilities are beyond your imagination
                </h2>
                <p>Explore The Library</p>
            </div>

            <div className='gpt3__whatgpt3-container'>
                <Feature />
                <Feature />
                <Feature />
            </div>
        </section>
    )
}

export default WhatGPT3