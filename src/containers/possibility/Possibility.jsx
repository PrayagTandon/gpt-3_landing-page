import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.scss';

const Possibility = () => {
    return (
        <section className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img
                    src={possibilityImage}
                    alt="Possibility Image" />
            </div>
        </section>
    )
}

export default Possibility