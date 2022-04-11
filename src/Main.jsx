import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return (
    <>
      <div className="card">{props.children}</div>
    </>
  );
}

export default function Main(props) {
  const cardImage =
    'https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg';
  const cardTitles = ['Card title', 'Special title treatment'];
  const cardContents = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    'With supporting text below as a natural lead-in to additional content.',
  ];
  const cardButton = 'Go somewhere';
  return (
    <Card>
      <img
        src="https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Card>
  );
}
