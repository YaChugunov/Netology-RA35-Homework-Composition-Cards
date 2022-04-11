import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  console.dir(props.children);
  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </div>
    </>
  );
}

export default function Main() {
  const cardImage =
    'https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg';
  const cardTitles = ['Card title', 'Special title treatment'];
  const cardContents = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    'With supporting text below as a natural lead-in to additional content.',
  ];
  const cardButton = 'Go somewhere';

  return (
    <>
      <Card
        image={cardImage}
        title={cardTitles[0]}
        content={cardContents[0]}
        button={cardButton}
      />
      <Card
        title={cardTitles[1]}
        content={cardContents[1]}
        button={cardButton}
      />
    </>
  );
}
