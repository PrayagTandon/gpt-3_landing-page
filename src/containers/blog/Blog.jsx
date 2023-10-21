import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.scss';

const Blog = () => {
    return (
        <section className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h2 className='heading heading__secondary'>
                    A lot is happening,
                    We are blogging about it.
                </h2>
            </div>

            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imgURL={blog01} date="Sep 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgURL={blog02} date="Sep 22, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={blog03} date="Sep 14, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={blog04} date="Aug 30, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={blog05} date="Aug 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </section>
    )
}

export default Blog