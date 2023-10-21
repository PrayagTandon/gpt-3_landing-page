import React from 'react';
import { Article } from '../../components';
import './blog.scss';

const Blog = () => {
    return (
        <section className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h2 className='heading heading__secondary'>
                    A lot is happening,
                    We are blogging about it.
                </h2>

                <div className='gpt3__blog-container'>
                    <div className='gpt3__blog-container_groupA'>
                        <Article />
                    </div>
                    <div className='gpt3__blog-container_groupB'>
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog