import uniqid from 'uniqid';

const cartman = require('./images/cartman.png');
const kenny = require('./images/kenny.png');
const kyle = require('./images/kyle.png');
const stan = require('./images/stan.png');
// const  = require('./images/');

const cardsContent = [
  {
    _id: uniqid(),
    name: 'Cartman',
    src: cartman
  },
  {
    _id: uniqid(),
    name: 'Kenny',
    src: kenny
  },
  {
    _id: uniqid(),
    name: 'Kyle',
    src: kyle
  },
  {
    _id: uniqid(),
    name: 'Stan',
    src: stan
  }
  // : {
  //   _id: uniqid(),
  //   name: ,
  //   src: 
  // },
];

export default cardsContent;
