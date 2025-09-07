import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2022 Corporate. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a href="https://www.facebook.com"><FaFacebookSquare style={{width:"25px",height:"20px"}} /></a></li>
          <li><a href="https://www.twitter.com"><FaSquareTwitter  style={{width:"25px",height:"20px"}}/></a></li>
          <li><a href="https://www.linkedin.com"><FaLinkedin  style={{width:"25px",height:"20px"}}/></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;