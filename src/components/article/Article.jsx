import React from 'react';
import './article.scss';

const Article = ({ imgURL }) => {
    return (
        <section className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img
                    src={imgURL}
                    alt="blog image" />
            </div>
        </section>
    )
}

export default Article