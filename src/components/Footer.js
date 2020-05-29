import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <footer className="footer bg-dark">
        <div className="container">
          <span className="text-muted">Footer content</span>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
`;
