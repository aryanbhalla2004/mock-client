import React from 'react'
import "./App.css";
import logo from "./assets/logo.png";

const App = () => {

  const handleClick = () => {
    window.location.href = 'https://crew.zoobo.ca';
  }

  
  return (
    <div className='main-container-coming-soon'>
      <img src={logo}/>
      <div className=''>
        <h1>Pardon our dust, our website is currently under construction.</h1>
        <p className='mt-2'>Apologies for any inconvenience caused. Our website is currently undergoing enhancements to provide you with an even better browsing experience. We appreciate your patience and invite you to check back soon.</p>
        <p>Exciting news! We're also actively hiring and would love to have you join our team. Visit our crew site now to explore exciting job opportunities and kick-start your journey with us.</p>
        <button onClick={handleClick}>Join Our Team <i className="bi bi-arrow-right"></i></button>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default App;