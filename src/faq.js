import './App.css';
import img8 from './assets/image8.png';
import img9 from './assets/image9.png';

function Faq(){
    return(
        <div className='faq'>
            <h1>Frequently asked questions</h1>
            <div className='lis'>
                <p>Can I had a lost item delivered to me?</p>
                <p>Can I rent a car using uber? </p>
                <p>Can I request a ride that pickup friends in different location?</p>
                <p>Can I request a taxi on uber?</p>
                <p>Is there an Uber ride option for 5 people?</p>
            </div>
            <h1>Do more in the app </h1>
            <img className='img8' src={img8}/>
            <img className='img9' src={img9}/>
            <p className='ub'>certain requirements and feature very by country, region, and city.</p>
        </div>
    )
}
export default Faq;