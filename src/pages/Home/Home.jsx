import React from 'react';
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
   return (
      <div className="Home">
         <Header />

         <section className="hero section">
            <div className="content">
               <h1>
                  Empower Your
                  <br />
                  Business
               </h1>
               <p>
                  Streamline your operations, boost productivity, and unlock
                  your full potential. For you, the administrator, who seeks
                  efficiency and growth.
               </p>
               <Link to={'/Login'}>
                  <button className="b-try-it">Try It</button>
               </Link>
            </div>
            <div className="image">
               <img src={Illustration} alt="illustration user" />
            </div>
         </section>

         <section className="resources section">
            <h2>Recources and Services</h2>
            <div className="card-conteiner">
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
            <p className="presentation-section">Testymononial</p>
            <h2>What our users say</h2>
            <Carousel slides={testimonialClients} />
         </section>

         <section className="cta section">
            <div className="cta-content">
               <h2>Ready to take your business to the next level?</h2>
               <p>Sign up now and unlock a world of possibilities!</p>
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
                  autoComplete='off'
                  onSubmit={(e) => e.preventDefault()}
               >
                  <input placeholder="Your Email" type="email" name="email-input" className="email-input" />
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
