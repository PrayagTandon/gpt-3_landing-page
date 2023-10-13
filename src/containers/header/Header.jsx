import React from 'react';
import './header.scss';
import '../../styles/_typography.scss';
const Header = () => {
    return (
        <header className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text heading__primary'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className='gpt3__header-content__input'>
                    <input type="email" placeholder='Your Email address' />
                    <button type="button">Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default Header