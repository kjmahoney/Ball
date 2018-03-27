const THREE = require('three');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('field')});

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

camera.position.z = 5

let velocity = 0.1;

console.log(cube)

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.1
  cube.rotation.y += 0.1

  let widthHalf = (window.innerWidth / 2)
  let heightHalf = (window.innerHeight / 2)

  let cubeX = cube.position.x
  let cubeY = cube.position.y

  let cubeXscreen = (cubeX * widthHalf) + widthHalf

  if (cubeXscreen > (window.innerWidth * 2)) {
    velocity = -velocity;
  }

  if (cubeXscreen < (-window.innerWidth * 2)) {
    velocity = -velocity;
  }

  cube.position.x += velocity

	renderer.render( scene, camera );
}

animate();



// const ball = document.getElementById('ball')
// console.log('kevin');
// console.log(ball);
// var cord = ball.getBoundingClientRect();
// console.log(cord.top, cord.right, cord.bottom, cord.left);
