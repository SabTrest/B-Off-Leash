import React from "react";
import "./Card.css";
import playingImg from "../assets/playing.jpg";
import sittingImg from "../assets/sitting.jpg";
import hikingImg from "../assets/hiking.jpg";
import closeup from "../assets/closeup.jpg";
import tongue from "../assets/tongue.jpg";
import babes from "../assets/babes.jpg";
import treat from "../assets/treat.jpg";
import trick from "../assets/trick.jpg";
import babyb from "../assets/baby_b.jpg";
import bueller from "../assets/bueller.jpg";

const Cards: React.FC = () => {
  const cards = [
    {
      title: "Who Am I?",
      images: [playingImg, sittingImg, hikingImg],
      text: "My name is Samantha VanFaasen, and I am the owner of B Off Leash. Working with animals has always been a passion of mine. I started dog training and fell in love. My goal is to help open up new possibilities for you and your dog. I want to raise people’s expectations for their dogs, to better you and your dog’s lives!",
    },
    {
      title: "My Beliefs",
      images: [closeup, tongue],
      text: "I believe training should be a fun and tailored experience that gets you the results you are looking for! I believe in positive reinforcement and structured guidance on both ends of the leash! Dog training is about building, communication, freedom, and most importantly trust."    
    },
    {
      title: "Why I Do This",
      images: [babes, treat, babyb],
      text: "Growing up, I had many dogs, all with such different personalities! Getting to work with my dogs led me to becoming my neighborhood dog walker and pet sitter. The more I worked with dogs the more my love grew. Through lots of different jobs and experiences I have gained a deep understanding and love for dog behavior and communication! That passion led me to create B Off Leash.",
    },
    {
      title: "My Mission",
      images: [trick, bueller],
      text: "My mission is to raise people’s expectations for their dogs to foster better bonds between people and their pets. With training you can open up so many new horizons for you and your dog! I want to be the one to help you give your pets the best life they can have!",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <div className="image-gallery">
            {card.images.map((img, i) => (
              <img key={i} src={img} alt={`${card.title} ${i + 1}`} className="card-image" />
            ))}
          </div>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
