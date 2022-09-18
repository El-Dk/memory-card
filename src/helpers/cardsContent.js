import uniqid from 'uniqid';

const cartman = require('./images/cartman.png');
const kenny = require('./images/kenny.png');
const kyle = require('./images/kyle.png');
const stan = require('./images/stan.png');
const randy = require('./images/randy.png');
const chef = require('./images/chef.png');
const detectiveHarris = require('./images/detective-harris.png');
const garrison = require('./images/garrison.png');
const satan = require('./images/satan.png');
// const  = require('./images/.png');

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
  },
  {
    _id: uniqid(),
    name: 'Randy',
    src: randy
  },
  {
    _id: uniqid(),
    name: 'Chef',
    src: chef
  },
  {
    _id: uniqid(),
    name: 'Detective Harris',
    src: detectiveHarris
  },
  {
    _id: uniqid(),
    name: 'Mr. Garrison',
    src: garrison
  },
  {
    _id: uniqid(),
    name: 'Satan',
    src: satan
  }
  // {
  //   _id: uniqid(),
  //   name: ,
  //   src: 
  // },
];

export default cardsContent;
