import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import '../../App.scss';
import './possibility.scss';

const Possibility = () => {
    return (
        <section className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img
                    src={possibilityImage}
                    alt="Possibility Image" />
            </div>

            <div className='gpt3__possibility-content'>
                <h4 className='heading__quatenary'>Request Early Access to Get Started</h4>
                <h2 className='heading heading__secondary'>
                    The possibilities are beyond your imagination
                </h2>

                <p className='paragraph__component--blue'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <p className="paragraph__component--red">
                    Request Early Access to Get Started
                </p>
            </div>
        </section>
    )
}

export default Possibility