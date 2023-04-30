import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            
            <BsTwitter />

        </div>
        <div>
            <a href="https://www.facebook.com/pavel.medek.79" target="_blank">    
                <FaFacebookF />
            </a>
        </div>
        <div>

                <BsInstagram />

        </div>
  </div>
  )
}

export default SocialMedia