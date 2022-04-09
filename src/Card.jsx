import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Img(props) {
  return <img src={props.src} className="card-img-top" alt="" />;
}

function CardBody(props) {
  const title = props.title;
  return (
    <>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </>
  );
}
export default function Card() {
  return (
    <div class="card">
      <Img src="https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg" />
      <CardBody />
    </div>
  );
}
