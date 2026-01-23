import "./Testimonials.css";

import laylaImg from "../assets/layla.jpg";  // example image
import dippyImg from "../assets/dippy.jpg";
//import lunaImg from "../assets/luna.jpg";

import haydenImg from "../assets/hayden.png";


const testimonials = [
  {
    name: 'Marise M.',
    program: '1 week basic obediance',
    feedback:
      "I rescued a 4 year old, 70 pound Dalmatian in April. Shortly after, I found out that he had never been on a leash before. I engaged Samantha and kept my fingers crossed. I was thrilled with her work. I can now take Dippy on walks and not worry about him dragging me down the street. It was a great learning experience for us both. I recommend Sam wholeheartedly and would rate her service, caring and expertise at least a 10! Thanks so much for letting me walk my dog!",
    img: dippyImg
  },
  {
    name: 'Mia T.',
    program: '1 week basic obediance',
    feedback:
      "When we first got Layla, our toy poodle, we had no idea where to start. She was using puppy pads inside, had separation anxiety, couldn’t stay in her crate, and was reactive toward everyone and everything. We worried that she was stressing out our older dog in the home and would only become more reactive with age. If you’ve ever owned a poodle you know they are little balls of sass and intelligence. That’s why it was so important for us to find someone we could trust with experience and proven success. And let me tell you- she did not disappoint. We were completely overwhelmed until we started working with Sam. She changed everything. Sam taught us what to do and helped Layla build confidence, structure, and calm. Now Layla is fully potty trained, comfortable in her crate, and can be around people and other dogs without any issues. Sam did such an amazing job I was able to fly with her on a 5 hour flight without a single issue. She slept the whole time and was so silent no one knew she was even on the plane. She also responds to corrections and actually understands the word “no,” which has made it so much easier to stop negative behaviors before they start. She’s like a whole new dog. We never could have done it without Sam and we’re so grateful for her.",
    img: laylaImg
  },
  {
    name: 'Dave W.',
    program: 'Pet Sitting',
    feedback:
      "When my wife and I leave town we feel very fortunate to have found Sam who will come to our home and care for our dog Hayden and two cats......Boots and Tiger.  We can go away without any anxiety as we know Sam is dependable and will treat our pets like her own.   She always provides a nice touch by sending pics of our pets while we are away.  I would highly recommend her service for anyone looking for pet care when they can't be home.",
    img: haydenImg
  },
  {
    name: 'Tanya S.',
    program: 'Pet Sitting',
    feedback:
      "My rescue dog had anxiety and reacted to other dogs on walks. Samantha was so patient and knowledgeable. Her time with him gave us tools and confidence."
  },
  {
    name: 'Brian K.',
    program: '2 week advanced obediance',
    feedback:
      "We wanted to take our dog's skills to the next level, and Samantha delivered. Her extended and advanced training was fun, effective, and super rewarding!"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>

      <div className="testimonials-grid">
  {testimonials.map((t, index) => (
    <div className="testimonial-bubble" key={index}>
      <div className="testimonial-content">
        <div className="testimonial-text-wrapper">
          <p className="program-label">{t.program}</p>
          <p className="testimonial-text">"{t.feedback}"</p>
          <p className="testimonial-name">— {t.name}</p>
        </div>
        {t.img && <img src={t.img} alt={`${t.name}'s dog`} className="testimonial-img" />}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Testimonials;
