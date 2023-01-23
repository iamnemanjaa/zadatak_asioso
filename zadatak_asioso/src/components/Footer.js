import React from 'react'
import { Button } from '../components/Navbar/button';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Just make it simple
        </p>
        <p className='footer-subscription-text'>
          We look forward to seeing you.
        </p>

        <div className='input-areas'>
          <form>
            <input type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-link'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-item'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-item'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-item'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-item'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              asioso <i className='fab fa-typo3'></i>
            </Link>
          </div>
          <small className='website-rights'>asioso 2023</small>
          <div className='social-icons'>

            <Link className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>

            <Link className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>

            <Link className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube'></i>
            </Link>

            <Link className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>

            <Link className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i className='fab fa-linkedin'></i>
            </Link>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
