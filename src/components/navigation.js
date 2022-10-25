import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Avatar} from 'antd'


// To display nav links on page
const navLinks = [
	{
		title: 'Home',
		path: '/home'
	},
	{
		title: 'Blog',
		path: '/blog'
	},
	{
		title: 'Contact Us',
		path: '/contact-us'
	},
	{
		title: 'Login',
		path: '/login'
	}

]

export default function Navigation ({user}) {
	const [menuActive, setMenuActive] = useState(false)

	return (
	 <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
        <span className="menu-title">Pillow Talk</span>
        <div
            className="menu-content-container"
        >
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
            <div className="menu-avatar-container">
                <Avatar size={35} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span className="menu-avatar-name">John Doe</span>
            </div>
        </div>
		<i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
	</nav>)
	
}

