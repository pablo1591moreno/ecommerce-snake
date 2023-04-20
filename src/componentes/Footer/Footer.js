import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className='footer-container'>
      <h1 className='contactanos' >Contactanos x</h1>
      <div className='redes' >
        <a href="https://wa.me/xxxxxxxxxx" target="_blank">
          <Icon icon="fa-brands:whatsapp-square" width={"30px"} style={{ color: "#2A2A2A" }} />
        </a>
        <a href="https://www.instagram.com/tu_usuario/" target="_blank">
          <Icon icon="teenyicons:instagram-solid" width={"30px"} style={{ color: "#2A2A2A" }} />
        </a>
        <a href="https://www.tiktok.com/@tu_usuario" target="_blank">
          <Icon icon="cib:tiktok" width={"30px"} style={{ color: "#2A2A2A" }} />
        </a>
        <a href="https://twitter.com/tu_usuario" target="_blank">
          <Icon icon="bi:twitter" width={"30px"} style={{ color: "#2A2A2A" }} />
        </a>
        <a href="https://www.facebook.com/tu_usuario" target="_blank">
          <Icon icon="uil:facebook" width={"30px"} style={{ color: "#2A2A2A" }} />
        </a>
      </div>

    </div>
  );
}

export default Footer;
