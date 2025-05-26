import img4 from './assets/image4.png';
import img5 from './assets/image5.png';
import img6 from './assets/image6.png';
function Img1() {
  return (
    <div className="container">
      <h1>Use the Uber app to help you travel your way</h1>
      <div className="card-wrapper">
        <div className='card'>
          <img className="card-img" src={img4} alt="Ride options" />
          <h3>Ride options</h3>
          <p>There’s more than one way to move with Uber, no<br />
            matter where you are or where you’re<br />
            headed next.</p>
          <button>Search Ride Options</button>
        </div>

        <div className='card'>
          <img className="card-img" src={img5} alt="Airports" />
          <h3>700+ airports</h3>
          <p>You can request a ride to a form most major<br />
            airports. Schedule a ride to the airport for one<br />
            less thing to worry about</p>
          <button>Search Airports</button>
        </div>

        <div className='card'>
          <img className="card-img" src={img6} alt="Cities" />
          <h3>10,000+ cities</h3>
          <p>The app is available in thousands of cities<br />
            worldwide, so you can request a ride even when<br />
            you’re far from home.</p>
          <button>Search Cities</button>
        </div>
      </div>
    </div>
  );
}

export default Img1;