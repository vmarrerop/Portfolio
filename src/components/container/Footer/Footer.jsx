import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2022 | created by <span>José Vicente Marrero Poveda</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                <a href='https://www.linkedin.com/in/jos%C3%A9-vicente-marrero-poveda-2a46b0210/'>{socialIcon}</a>
              </div>
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default Footer