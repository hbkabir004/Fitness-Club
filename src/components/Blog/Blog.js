import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h1 style={{textAlign:'center',
                        marginTop:'100px'}}>BLOGs</h1>
            <div className='blog-container'>
            <div className='blog'>
                <h2>How does react works?</h2>
                <p>React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions. This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
            </div>
            <div className='blog'>
                <h2>Difference between props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='blog'>
                <h2>What are the other uses of usestate in react?</h2>
                <p>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;