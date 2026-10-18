import adviceimg from '../src/assets/adviceimg.svg';
import fbicon from '../src/assets/fbicon.svg';
import xicon from '../src/assets/x-tw-icon.svg';
import instaicon from '../src/assets/instaicon.svg';


import './App.css'
import Advice from './components/Advice';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <header>
        <Nav name='BrandName' links={[
        { label: "Home", href: "#home" },
        { label: "Advice", href: "#advice" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Subscribe", href: "#subscribe" },
      ]} loginLink='Login' signupLink='Become a member' />
      <Hero heading='Business Advisory 
Services.' info='Disaster recovery planning, business continuity 
management, and disaster recovery.'/>
      </header>
      <main>
        <Advice heading='Business Advice' info='Disaster recovery planning, business continuity 
management, and disaster recovery.' Advices={[
            { img: adviceimg, advice: 'Put The Clients First' },
            { img: adviceimg, advice: 'Put The Clients First' },
            { img: adviceimg, advice: 'Put The Clients First' },
            { img: adviceimg, advice: 'Put The Clients First' },
            { img: adviceimg, advice: 'Put The Clients First' },
            { img: adviceimg, advice: 'Put The Clients First' }
          ]} />
          <Testimonials heading='What Clients Say' info='Problems trying to resolve the conflict between the two major 
realms of Classical physics: Newtonian mechanics.'/>
<Subscribe heading='Subscribe Now' info='The gradual accumulation of information about atomic 
and  small-scale behavior during the first quarter of the 20th'/>
      </main>
      <Footer copyrightMsg='Made With Love By Figmaland All Right Reserved.' FooterLinks={[
        {
          img:fbicon,
          href: '#'
        },{
          img:xicon,
          href: '#'
        },{
          img: instaicon,
          href: '#'
        },

      ]}/>
    </>
  )
}

export default App;
