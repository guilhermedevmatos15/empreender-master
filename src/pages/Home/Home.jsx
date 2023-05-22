import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// * Components
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import SmallCard from '../../components/layout/SmallCard/SmallCard';
import Carousel from '../../components/layout/Carousel/Carousel';

// * CSS
import './Home.css';

// * Data
import testimonialClients from '../../data/testemonialClients';

// * Images
import Illustration from '../../assets/img/Illustrations/undraw_add_user_re_5oib.svg';

// * Icons

const Home = (props) => {
   const username = localStorage.getItem('username');

   return (
      <div className="Home">
         <Header username={username} />

         <section className="hero section">
            <div className="content">
               <h1 data-aos='fade-up' data-aos-duration='1500'>
                  Empower Your
                  <br />
                  Business
               </h1>
               <p data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>
                  Streamline your operations, boost productivity, and unlock
                  your full potential. For you, the administrator, who seeks
                  efficiency and growth.
               </p>
               <Link to={'/Login'}>
                  <button className="b-try-it" data-aos='fade-up' data-aos-duration='2000' data-aos-delay='300'>Try It</button>
               </Link>
            </div>
            <div className="image">
               <img src={Illustration} alt="illustration user" data-aos='fade-up' data-aos-duration='1600' data-aos-delay='200' />
            </div>
         </section>

         <section className="resources section">
            <h2 data-aos='fade-up' data-aos-duration='1600' data-aos-delay='0'>Recources and Services</h2>
            <div className="card-conteiner" data-aos='zoom-in' data-aos-duration='1500' data-aos-delay='200'>
               <SmallCard
                  title="Employee Management"
                  subtitle="Optimize your team management with our intuitive employee management tool, allowing you to assign tasks, monitor performance, and simplify communication."
               />
               <SmallCard
                  title="Mini Blog"
                  subtitle="Enjoy and receive tips and news about administration"
               />
               <SmallCard
                  title="Task List"
                  subtitle="Organize your daily tasks, set deadlines and priorities, and track progress efficiently with our simple yet powerful task list."
               />
            </div>
         </section>

         <section className="testimony-clients section">
            <p className="presentation-section" data-aos='fade-up' data-aos-duration='1600' data-aos-delay='0'>Testymononial</p>
            <h2 data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>What our users say</h2>
            <Carousel slides={testimonialClients} />
         </section>

         <section className="cta section">
            <div className="cta-content">
               <h2>Ready to take your business to the next level?</h2>
               <Link to={'/Login'}>
                  <button className="b-get-started">Get Started</button>
               </Link>
            </div>
         </section>

         <section className="contact section">
            <div className="contact-content">
               <h2>Contact Us</h2>
               <p>
                  Have any questions or inquiries? Leave us a message and we'll
                  get back to you.
               </p>
               <form
                  className="contact-form"
                  onSubmit={(e) => e.preventDefault()}
               >
                  <input placeholder="Your Email" type="email" name="email-input" className="email-input" autoComplete='off' />
                  <textarea placeholder="Your message" className='message-input'></textarea>
                  <button type="button" className="b-send-message">
                     Send Message
                  </button>
               </form>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default Home;
