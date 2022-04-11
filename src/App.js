import React from 'react';
import './style.css';

import Main from './Main';

export default function App() {
  const cardImage =
    'https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg';
  const titles = ['Card title', 'Special title treatment'];
  const cardContents = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    'With supporting text below as a natural lead-in to additional content.',
  ];
  const cardButton = 'Go somewhere';
  return (
    <div>
      <Main title={titles[0]} />
    </div>
  );
}
