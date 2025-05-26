import React from 'react';
import './App.css';
import img1 from './assets/image.png';
import img2 from './assets/image2.png';
import img3 from './assets/image3.png';
import Img1 from './image';
import Temp from './temp2';
import Faq from './faq';
import Foot from './footer';

function Head(){
    return(
        <div className="head">
            <h2 className="line"></h2>
            <h2 className='uber'>UBER</h2>
            <div className='content'>
            <img className='img1' src={img1} alt="Uber" />
            <h1 className="rar">Request a Ride for<br/> Now or Later</h1>
            <p>Add your trip details , hop in, and go .</p>
            <input></input><br/>
            <input></input><br/>
            <button className="btn1">See Price</button>
            <button className="btn2">Schedule For Later </button>
            <img className='img2' src={img2} alt="car"/>
            <h2>Suggestions</h2>
            <p>Go anyware with Uber.Request a <br />
               ride, hop in , and go </p>
               <img className='img3' src={img3} alt='side'/>
               <div className='side'>
                
                <h1>Ride with friends <br/>seamlessly </h1>
                <p>Riding with friends just got easier. set up a group ride in the 
                <br/>Uber app, invite your friends, and arrive at your destination.
                <br/>Friends who ride together save together.</p>
                <p>Learn more</p>
                </div>
                <Img1/>
                <Temp/>
                <Faq/>
                </div>
                <Foot/>
        </div>
    )
}
export default Head;
