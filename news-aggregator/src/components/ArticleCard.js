import React from 'react';

const ArticleList = () => {
    return (
        <div className="article-card">
            <img src="article-image.jpg" alt="Article Image" className="article-image" />
            <div className="article-content">
                <h2 className="article-title">Article Title</h2>
                <p className="article-description">This is a brief description of the article...</p>
                <a href="#" className="article-link">Read More</a>
            </div>
        </div>
    );
};

export default ArticleList;