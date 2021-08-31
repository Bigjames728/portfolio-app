import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

class Header extends React.Component {
    
    state = {
        links: [
            { 
                id: 1, name: 'About', url: '/about', value: '1'
            },
            { 
                 id: 2, name: 'Articles', url: '/articles', value: '2'
            },
            { 
                id: 3, name: 'Projects', url: '/projects', value: '3'
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

                {links.map(link => {
                    return (
                        <div className="nav" key={link.id}>  
                            <NavLink
                                to={link.url}
                                className="item"
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
