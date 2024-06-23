import * as THREE from 'three';

// Creates the scene and camera, ensuring that the camera has a good field of view and aspect ratio
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Creates the WebGL renderer and appends it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creates the geometry repr of the cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Creates the material we'll apply to the cube
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// Applies the material to the geometry, and provides us with an object we can insert into our scene
const cube = new THREE.Mesh( geometry, material );

// Add the cube to the scene
scene.add( cube );

// Default insert position is (0, 0, 0) so we have to move the camera?
camera.position.z = 5;

// Animation loop
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

// Tells the Renderer to draw the scene every time the screen is refreshed (typically 60 times per second)
renderer.setAnimationLoop( animate );
