import React from 'react';
import './article.scss';

const Article = ({ imgURL, date, title }) => {
    return (
        <section className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img
                    src={imgURL}
                    alt="blog image" />
            </div>

            <div className='gpt3__blog-container_article-content'>
                <p>{date}</p>
                <h3>{title}</h3>

                <div className='gpt3__blog-container_article-content_btn'>
                    <button className='btn__article'>
                        <a href="#cta">Read full article</a>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Article