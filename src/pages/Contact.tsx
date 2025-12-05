import React from 'react';

const linkStyle: React.CSSProperties = {
  color: '#0077cc',
  textDecoration: 'underline',
}

const Home = () => {
  return (
    <div className="page-container">
      <h1>Contact Me!</h1>
      <h3>You and me will be a great support team for the furry part of your family!</h3>
      <br />
      <h2>
        📞 Phone:{" "}
        <a href="tel:+16124131868" style={linkStyle}>
          +1 (612) 413-1868
        </a>
      </h2>
      
      <h2>
        ✉️ Email:{" "}
        <a href="mailto:boffleash@gmail.com" style={linkStyle}>
          boffleash@gmail.com
        </a>
      </h2>
      
      <h2>
        📸 Instagram:{" "}
        <a
          href="https://www.instagram.com/b.off.leash"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          @b.off.leash
        </a>
      </h2>
    </div>
  );
};

export default Home;
