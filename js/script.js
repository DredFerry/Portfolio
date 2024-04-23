import * as  THREE from 'three';
import  { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import  road1 from '../img/road1.jpg';
import lamp1 from '../img/lamp1.jpg';
import lamp2 from '../img/lamp.jpg';


import java from '../img/java.webp';
import angular from '../img/angular.webp';
import css from '../img/css.png';
import html from '../img/html.png';
import js from '../img/js.webp';
import mongo from '../img/mongo.webp';
import python from '../img/python.webp';
import threejs from '../img/threeJs.png';
import ts from '../img/TS.webp';

// import {floorbg} from 

const canvas1=document.getElementById("canvas1");



const renderer= new THREE.WebGLRenderer({canvas:canvas1,alpha:true});

var texture=new THREE.TextureLoader();

renderer.setSize(canvas1.clientWidth, canvas1.clientHeight);
document.body.appendChild(renderer.domElement);

const scene=new THREE.Scene();

 


const camera=new  THREE.PerspectiveCamera(
    75,
    canvas1.clientWidth / canvas1.clientHeight,
    0.1,
    1000);


const axesHelper=new THREE.AxesHelper(5);
// scene.add(axesHelper);


const orbit = new OrbitControls(camera,renderer.domElement);
orbit.enableZoom=false;
orbit.enablePan=false;
orbit.enableRotate=false;
orbit.enableDamping=true;
// orbit.enableRotatx=true;

orbit.update();



// LIGHTSS
const amboentLight=new THREE.AmbientLight("white",0.09);
scene.add(amboentLight);
const Plight1=new THREE.PointLight("#FFF3A0",25,20,12);
Plight1.position.set(1.8,2.8,0);
// scene.add(new THREE.PointLightHelper(Plight1))
const Plight2=Plight1.clone();
Plight2.position.set(-1.6,2.8,0.1);
// scene.add(new THREE.PointLightHelper(Plight2))



const moonlight=new THREE.DirectionalLight('#F5F1D3',0.4);
moonlight.position.set(-1,6,3);
moonlight.target.position.set(-2,1,-1)
moonlight.castShadow=true;
helper=new THREE.DirectionalLightHelper(moonlight)
// scene.add(helper);

moonlight2=moonlight.clone()
moonlight2.position.set(4,-4,3);
moonlight2.target.position.set(-1.5,1,-1)
helper2=new THREE.DirectionalLightHelper(moonlight2)
// scene.add(helper2);

const moonlight3=new THREE.DirectionalLight('#F5F1D3',2);
moonlight3.position.set(6,0,1);
moonlight3.target.position.set(2,1.4,0.5)
helper3=new THREE.DirectionalLightHelper(moonlight3)
// scene.add(helper3);




//TEXTURES EXPORTED
export const textureJava=texture.load(java);
export const textureAngular = texture.load(angular) ;
export const textureCss = texture.load(css) ;
export const textureHtml = texture.load(html) ;
export const textureJavascript = texture.load(js) ;
export const textureMongoDB = texture.load(mongo) ;
export const texturePython = texture.load(python);
export const textureThreeJS = texture.load(threejs) ;
export const textureTs = texture.load(ts) ;




//Textures
const textureRoad=texture.load(road1);
const textureLamp=texture.load(lamp1);
const textureLamp2=texture.load(lamp2);



const planeGeometry=new THREE.BoxGeometry(3.5,1,0.3);
const planeMaterial=new THREE.MeshPhysicalMaterial({map:textureRoad});
const roadPlane=new  THREE.Mesh(planeGeometry,planeMaterial);
// scene.add(plane)
roadPlane.position.set(0.4,1.4,0.5)
roadPlane.rotation.x=Math.PI/2;





const cylG=new THREE.CylinderGeometry(0.1,0.1,3,32,7);
const cylM=new THREE.MeshStandardMaterial({map:textureLamp,wireframe:false});
const cyl=new THREE.Mesh(cylG,cylM);
cyl.castShadow=true;
cyl.position.set(-0.2,2.9,0);



const cyl2G=new THREE.CapsuleGeometry(0.1,4,);
const cyl2M=new THREE.MeshPhysicalMaterial({map:textureLamp2,wireframe:false});
const cyl2=new THREE.Mesh(cyl2G,cyl2M);
cyl2.rotation.z=Math.PI/2;
cyl2.castShadow=true;
cyl2.position.set(-0.2,4.5,0);



const lampG=new THREE.OctahedronGeometry(0.5,0);
const lampM=new THREE.MeshPhongMaterial({color:0xFFFFFF,wireframe:true,emissive:'#FFF3A0'});
const lampBody=new THREE.Mesh(lampG,lampM);
lampBody.position.y=3.8;
lampBody.position.x=1.8;
// scene.add(lampBody);

const lampBody2=new THREE.Mesh(lampG.clone(),lampM.clone());
lampBody2.position.y=3.8;
lampBody2.position.x=-2.1;
// scene.add(lampBody2);

const bulbG=new THREE.SphereGeometry(0.1);
const bulbM=new THREE.MeshPhongMaterial({color:0xFFFFFF,wireframe:true,emissive:'#FFF3A0'});
const bulb=new THREE.Mesh(bulbG,bulbM);
const bulb2=bulb.clone();
bulb.position.set(1.8,3.9,0)
bulb2.position.set(-2.1,3.9,0)

//Group creation
const group=new THREE.Group();
group.add(cyl);
group.add(cyl2);
group.add(lampBody);
group.add(lampBody2);
group.add(bulb);
group.add(bulb2);
group.add(Plight1);
group.add(Plight2);
group.add(roadPlane);
// group.add(moonlight);
group.add(moonlight2);
group.add(moonlight3);

// group.position.set(-2.4,-1.1,0);
scene.add(group);



console.log(window.screen.width)
console.log(window.screen.height)


function onWindowResize(){

width=canvas1.clientWidth;
height=canvas1.clientHeight;

screenWidth=window.screen.width;
screenHeight=window.screen.height;

renderer.setSize(width,height);
camera.aspect=width/height;


camera.updateProjectionMatrix();  

if(screenWidth<389){
    roadPlane.position.x=-0.1;
    group.position.set(-4.5,2,0);
    camera.position.set(0,0,20);
    console.log(screenWidth,"<<<400");
}
else if(screenWidth>389 && screenWidth<500){
    roadPlane.position.x=-0.1;
    group.position.set(-3.8,2.5,0);
    camera.position.set(0,0,20);
    console.log(screenWidth,"<<<500");

}
 else if(screenWidth>499 && screenWidth<768){
    roadPlane.position.x=-0.1;
    group.position.set(-3.7,-1,0);
    camera.position.set(0,0,12);
    console.log(screenWidth,"<<<768");

}
else if(screenWidth>=768 && screenWidth<800 ) 
{
    roadPlane.position.x=0;
    // console.log(width);
    group.position.set(-3.1,-0.9,0);
    camera.position.set(0,0,10);
    console.log(screenWidth,"<<<768");
}
else if(screenWidth>=800 &&  screenWidth<1024) {
    roadPlane.position.x=-0.1;
    group.position.set(-4.8,-0.1,0);
    camera.position.set(0,0,16);
    console.log(screenWidth,"<<1024");
}
else if(screenWidth>=1024 && screenWidth<1100) {
    group.position.set(-7.5,-1.5,0);
    camera.position.set(0,0,10);
    if(screenHeight>screenWidth){
        group.position.set(-5,-0.2,0);
        camera.position.set(0,0,15);
        
    }
    console.log(screenWidth,">>1024");
}
else if(screenWidth>=1100 && screenWidth<1300) {
    group.position.set(-7.5,-1,0);
    camera.position.set(0,0,10);
    console.log(screenWidth,">>1024");
}
else{
    group.position.set(-10,-1.5,0);
    camera.position.set(0,0,10);
    console.log(screenWidth,"max");
}

}
window.addEventListener('resize',onWindowResize);

window.onload=onWindowResize();

//Rotation with Mouse
var mouseDown = false, mouseX = 0, mouseY = 0;
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('mouseup', onMouseUp, false);

function onMouseDown(event) {
    event.preventDefault();
    mouseDown = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function onMouseMove(event) {
    if (mouseDown) {
        var deltaX = event.clientX - mouseX;
        var deltaY = event.clientY - mouseY;

        group.rotation.y += deltaX * 0.01; // Adjust rotation speed as needed
        group.rotation.x += deltaY * 0.01; // Adjust rotation speed as needed

        mouseX = event.clientX;
        mouseY = event.clientY;

       
    }
}

function onMouseUp(event) {
    mouseDown = false;
}


//GYROSCOPE for Mobile
window.addEventListener('deviceorientation', handleOrientation, false);
function handleOrientation(event) {
    // Extract rotation data from the device orientation event
    var alpha = event.alpha; // Rotation around z-axis (in degrees)
    var beta = event.beta;   // Rotation around x-axis (in degrees)
    var gamma = event.gamma; // Rotation around y-axis (in degrees)

    // Convert degrees to radians
    var alphaRad = alpha * Math.PI / 180;
    var betaRad = beta * Math.PI / 180;
    var gammaRad = gamma * Math.PI / 180;

    //damping
    group.rotation.x += (betaRad - group.rotation.x) * 1.5;
    group.rotation.y += (gammaRad - group.rotation.y) * 1.5;
    // group.rotation.z += (alphaRad - group.rotation.y) * 0.5;

    // Set object rotation based on device orientation
    // group.rotation.x = betaRad;
    // group.rotation.y = gammaRad;
    // Restrict rotation within limits
    group.rotation.x = THREE.MathUtils.clamp(group.rotation.x, -Math.PI/4, Math.PI/4);
    group.rotation.y = THREE.MathUtils.clamp(group.rotation.y, -Math.PI/4, Math.PI/4);
    // group.rotation.z = THREE.MathUtils.clamp(group.rotation.z, -Math.PI/6, Math.PI/6);


    // Render the scene
    renderer.render(scene, camera);
}




function animate(time){

lampBody.rotation.y+=0.01;
lampBody2.rotation.y-=0.01;

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);