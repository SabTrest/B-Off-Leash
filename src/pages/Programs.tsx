import boy from "../assets/boy.jpg";
import buff_baby from "../assets/buff_baby.jpg";
import cutie from "../assets/cutie.jpg";

/*change first picture to b*/

import "./Programs.css";

const Home = () => {
  return (
    <div className="page-container">
      <h1>Here's What I Offer:</h1>
      <br></br>
       <img src={boy} alt="cute dog 1" /> 
      <h2>Board and Trains:</h2>
      <p>1 week basic obediance</p>
      <p>2 week advanced obediance</p>
<div className="squiggle"></div>
      <img src={buff_baby} alt="cute dog 2" />
      <h2>Lesson Packages:</h2>
      <p>5 lessons basic obediance</p>
      <p>10 lessons advanced obediance</p>
      <div className="squiggle"></div>

      <img src={cutie}  alt="cute dog 3" />
      <h2>Pet Sitting Services:</h2>
      <p>In-home overnights</p>
      <p>Drop-in visits</p>
      <p>Adventure Walks</p>

    </div>
  );
};

export default Home;



