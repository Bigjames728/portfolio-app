import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

class Header extends React.Component {
    
    state = {
        links: [
            { 
                id: 1, name: 'Projects', url: '/projects'
            },
            { 
                id: 2, name: 'About', url: '/about'   
            },
            { 
                id: 3, name: 'Resume', url: '/resume'
            }
        ]
    };

    render() {
        const { links } = this.state;

        return (
            <div className="header--flex">
                <header>
                    <img src='images/logo.PNG' className="header--logo" alt="Logo" />
                </header>

                {/* I was able to add active tab button by importing NavLink and setting the activeClassName attribute then styling that class in index.css.*/}
                {links.map(link => {
                    return (
                        <div className="nav" key={link.id}>  
                            <NavLink
                                to={link.url}
                                className="menu--item"
                                activeClassName="active"
                                exact={true}
                            >{link.name}</NavLink>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Header;

// Old code for original <a> tags used for buttons

// export default function Header() {
//     return (
//         <header>
//             <div className="header--flex">
//                 <img src='images/logo.PNG' className="header--logo" alt="Logo" />
            
//                 <div className="nav">
//                     <a href="/" className="item">Projects</a>
//                     <a href="/articles" className="item">Articles</a>
//                     <a href="/about" className="item">About</a>
//                 </div>
//             </div>
//         </header>
//     );
// }
