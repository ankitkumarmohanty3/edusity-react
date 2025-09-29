import { UNSAFE_decodeViaTurboStream } from 'react-router-dom'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Achievers from './Components/Achievers/Achievers'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='OUR ACHIEVERS' title='What Student Says' />
        <Achievers />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>

      </div>
    </div>
  )
}

export default App
