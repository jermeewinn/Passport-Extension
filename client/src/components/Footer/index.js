import React from 'react';

const Footer = () => {
    return(
        <footer className='w-100 mt-auto bg-secondary p-4'>
            <div className='footer-container'>
                &copy;{new Date().getFullYear()} by Kaylin Boyle, Jeremy Huynh, & Andrew Yun
            </div>
            <div id="target-bottom">
                <a href="https://linktr.ee/emailslist">
                    <img src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/new-email-icon.png" alt="linked in"/>
                </a>
                <a href="https://linktr.ee/usergithubs">
                <img id="github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" title="github link" alt="github" />
                </a>
                <a href="https://linktr.ee/linkedins">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linked in"/>
                </a>
            </div>
            
        </footer>
    );
};

export default Footer;