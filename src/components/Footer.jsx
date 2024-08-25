import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/soumadeep-ghosh/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon/>
            </a>
          </li>
          <li>
            <a href="https://github.com/SoumadeepGhosh" target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/soumadeep.ghosh.564/" target="_blank" rel="noopener noreferrer">
              <FacebookOutlinedIcon/>
            </a>
          </li>
          <li>
            <a href="https://soumadeepghosh.netlify.app/" target="_blank" rel="noopener noreferrer">
              <OpenInBrowserIcon/>
            </a>
          </li>
        </ul>
        <p className="copyright"> &#9400; 2024 Soumadeep Ghosh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;