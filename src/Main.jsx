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
  return (
    <Card>
      <img
        src="https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.message}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Card>
  );
}
