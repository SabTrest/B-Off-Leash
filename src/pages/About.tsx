/*import playingImg from '../assets/playing.jpg';
import sittingImg from '../assets/sitting.jpg';
import hikingImg from '../assets/hiking.jpg';

//carousel 
const Home = () => {
  return (
    <div>
      <h1>Who Am I?</h1>
      <h2>Samantha VanFaasen</h2>
      <p>Been in pet care for 7 years</p>
      <p>Student at Rowan University</p>
      <p>Over a year of training experience</p>
      <div className="image-row">
        <img src={sittingImg} alt="Sam and B hanging out" className="rounded-photo" />
        <img src={playingImg} alt="Sam and B playing" className="rounded-photo" />
        <img src={hikingImg} alt="Sam and B hiking" className="rounded-photo" />
      </div>
    </div>
    
  );
};

export default Home;
*/


import Cards from "../components/Card.tsx";

function Home() {
  return (
    <div className="page-container">
      <h1>About Me!</h1>
      <Cards />
    </div>
    
  );
}

export default Home;


