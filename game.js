const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let frames = 0;
const DEGREE = Math.PI/180;

const sprite = new Image();
sprite.src = 'images/sprite.png';

const SCORE = new Audio();
const FLAP = new Audio();
const HIT = new Audio();
const SWOOSHING = new Audio();
const DIE = new Audio();

SCORE.src = 'sounds/sfx_point.wav';
FLAP.src = 'sounds/sfx_flap.wav';
HIT.src = 'sounds/sfx_hit.wav';
SWOOSHING.src = 'sounds/sfx_swooshing.wav';
DIE.src = 'sounds/sfx_die.wav';

