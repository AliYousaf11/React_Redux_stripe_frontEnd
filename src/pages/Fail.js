import React from 'react';

const FailPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0', background: '#EBF0F5' }}>
      <div className="card" style={{ background: 'white', padding: '60px', borderRadius: '4px', boxShadow: '0 2px 3px #C8D0D8', display: 'inline-block', margin: '0 auto' }}>
        <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#FDF3F4', margin: '0 auto' }}>
          <i className="fail-icon" style={{ color: '#FF6B6B', fontSize: '100px', lineHeight: '200px', marginLeft: '-15px' }}>✗</i>
        </div>
        <h1 style={{ color: '#FF6B6B', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontWeight: '900', fontSize: '40px', marginBottom: '10px' }}>Failed</h1>
        <p style={{ color: '#404F5E', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontSize: '20px', margin: '0' }}>
          Oops! Something went wrong with your purchase.<br /> Please try again later.
        </p>
      </div>
    </div>
  );
};

export default FailPage;
