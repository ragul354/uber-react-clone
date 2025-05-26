import './App.css';
import img7 from './assets/image7.png';
function Temp(){
    return(
        <div className='temp2'>
            <img className='img7' src={img7} alt="com" />
            <h1>Looking for business
                <br/>solutions?</h1>
                <p>Get information about how  companies leverage uber for 
                Business:  </p>
                <div className='lis'>
                    <p>Business travel</p>
                    <p>Courtesy rides</p>
                    <p>Meal programs</p>
                    <p>Item delivery</p>
                </div>
                <button className='get'>Get Start</button>
        </div>
    )
}
export default Temp;