import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardImage = props => {
  <>
  <img src={props.src} className="card-img-top" alt="" />
  </>
}

const CardBody = props => {
  <>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.content}
        </p>
        <a href="#" class="btn btn-primary">
          {props.button}
        </a>
      </div>
  </>
}

function CardB(props) {
  const title = props.title;
  const text = props.text;
  return (
    <>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
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
      <CardImage src="https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg" />
      <CardBody title={} text={}/>
    </div>
  );
}
