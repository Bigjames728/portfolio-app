import React from 'react';
import '../index.css'

export default function Header() {
    return (
        <header>
            <div className="header--flex">
                <img src='images/logo.PNG' className="header--logo" alt="Logo" />
            
                <div className="nav">
                    <a href="/" className="item">Projects</a>
                    <a href="/articles" className="item">Articles</a>
                    <a href="/about" className="item">About</a>
                </div>
            </div>
        </header>
    );
}
