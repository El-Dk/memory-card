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
const butters = require('./images/butters.png');
const ike = require('./images/ike.png');
const mrSlave = require('./images/mr-slave.png');
const pCPrincipal = require('./images/pc-principal.png');
const terranceAndPhilip = require('./images/terrance-and-philip.png');
const towelie = require('./images/towelie.png');
const tweekAndCraig = require('./images/tweek-and-craig.png');

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
  },
  {
    _id: uniqid(),
    name: 'Butters',
    src: butters
  },
  {
    _id: uniqid(),
    name: 'Ike',
    src: ike
  },
  {
    _id: uniqid(),
    name: 'Mr. Slave',
    src: mrSlave
  },
  {
    _id: uniqid(),
    name: 'PC Principal',
    src: pCPrincipal
  },
  {
    _id: uniqid(),
    name: 'Terrance & Philip',
    src: terranceAndPhilip
  },
  {
    _id: uniqid(),
    name: 'Towelie',
    src: towelie
  },
  {
    _id: uniqid(),
    name: 'Tweek & Craig',
    src: tweekAndCraig
  }
];

export default cardsContent;
