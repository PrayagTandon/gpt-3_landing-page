import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.scss';
import '../../styles/_typography.scss';
const Header = () => {
    return (
        <header className='gpt3__header section__padding' id='home'>
            {/* HEADER CONTENT */}

            <div className='gpt3__header-content'>
                <h1 className='gradient__text heading__primary'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className='gpt3__header-content__input'>
                    <input type="email" placeholder='Your Email address' />
                    <button type="button">Get Started</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img
                        src={people}
                        alt="people images" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

                {/* HEADER IMAGE */}
                <div className='gpt3__header-image'>
                    <img
                        src={ai}
                        alt="ai" />
                </div>
            </div>
        </header>
    )
}

export default Header