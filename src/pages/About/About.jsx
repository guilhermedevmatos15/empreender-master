import React from 'react';
import PropTypes from 'prop-types';

// * components
import Header from '../../components/layout/Header/Header';
import Presentation from '../../components/layout/Presentation/Presentation';

// * CSS
import './About.css';

// * scripts

// * img

// * icons

const About = ({ children }) => {
   return (
      <div className="About">
         <Header />
         <Presentation page="About" />

         <div className='about-wrapper'>
            <div className="about-informations">
               <h1>After all, what is it?</h1>
               <p className="text-indent">
                  It's a project that I wanted to do and that I certainly gained
                  a lot of knowledge, I stayed a week and a few days to finish
                  the project, no, I don't know English, I write because I think
                  it's more elegant and I'm getting used to it when I learn
                  English in the future (I'm 15 years).
               </p>
               <p className="text-indent">
                  If you look at the files, this was all done in react! And I
                  admit that no, the files are not well organized, when I
                  started the project the idea of ​​separating elements into
                  components was not very well consolidated, each part of the
                  code doing something, yeah, when I realized that it was too
                  late, so, what What I can promise is that better projects will
                  come! If you want to see the code and my profile, <a className='about-link' href="https://github.com/guilhermedevmatos15/empreender-master" target='_blank' rel="noreferrer">click here!</a>
               </p>
            </div>
         </div>
      </div>
   );
};

About.propTypes = {
   prop: PropTypes,
};

export default About;
