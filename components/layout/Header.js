/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className='container'>
          <div className='main-header'>
            <div className='header-left'>
              <div className='header-logo'>
                <Link href='/' legacyBehavior>
                  <a className='d-flex'>
                    {headerStyle ? (
                      <img alt='Logo' src='/assets/imgs/template/logo.png' />
                    ) : (
                      <img
                        alt='Logo'
                        src='/assets/imgs/template/logo.png'
                        style={{ width: '200px' }}
                      />
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
