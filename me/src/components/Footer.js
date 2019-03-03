import React from 'react';
import initials from '../assets/images/website-icon.png';


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/sarah_morash" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/sarah_morash/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/sarahmorash/" target="_blank" className="icon alt fa-linkedin"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/sarah-morash" target="_blank" className="icon alt fa-github"><span className="label">Instagram</span></a></li>
            </ul>
            <ul className="copyright">
            <img src={initials} className="image icon" alt="SM" />
                {/* <li>Sarah Morash</li> */}
            </ul>
        </div>
    </footer>
)

export default Footer
