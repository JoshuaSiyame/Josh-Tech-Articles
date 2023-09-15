// import modules/packages
import React from 'react'
import "./Article.css";

import ArticleLeftNav from './ArticleLeftNav/ArticleLeftNav';
import ArticleRightNav from './ArticleRightNav/ArticleRightNav';

// Article display component
const Article = () => {
    
    return (
        <>
            <ArticleLeftNav />
            <div id='article-content' className=''>
                <h4 className="main-container-section-header">Article content</h4>
            </div>
            <ArticleRightNav />
        </>
    );
};

export default Article;