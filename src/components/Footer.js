import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FaDiscord,FaTwitter, FaYoutube, FaGithub, FaInstagram} from 'react-icons/fa';
import {changeScroll} from '../components/Reusable-functions/RSF'

const Footer = () => {
  const dark = useSelector((state) => state.dark.dark)
  return <div className='footer'>
            <hr className={`${dark ? 'hr-d': 'hr-l'}`}/>
            <div className='flinks'>
              <Link to='/' className='link f' onClick={()=> changeScroll()}>Home</Link>
              <Link to='/' className='link f' onClick={()=> changeScroll()}>Contact Us</Link>
            </div>
            <div className='fsocial'>
              <FaDiscord className='fsocial-link'/>
              <FaYoutube className='fsocial-link'/>
              <FaTwitter className='fsocial-link'/>
              <FaGithub className='fsocial-link'/>
              <FaInstagram className='fsocial-link'/>
            </div>
            <div className='copyright'>
            Inspired from - <a href='https://docs.streamlit.io/'className='link italic isp' target='_blank' rel="noreferrer">docs.streamlit.io</a>
            </div>
        </div>
      

  
}

export default Footer