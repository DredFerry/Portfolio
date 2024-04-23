import * as  THREE from 'three';
import  { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import  {textureJava} from './script.js';
import  {textureAngular} from './script.js';
import  {textureCss} from './script.js';
import  {textureHtml} from './script.js';
import  {textureJavascript} from './script.js';
import  {textureMongoDB} from './script.js';
import  {texturePython} from './script.js';
import  {textureThreeJS} from './script.js';
import  {textureTs} from './script.js';

const canvas2=document.getElementById("canvas2");



const renderer= new THREE.WebGLRenderer({canvas:canvas2,alpha:true});


renderer.setSize(canvas2.clientWidth, canvas2.clientHeight);
document.body.appendChild(renderer.domElement);

const scene=new THREE.Scene();

 


const camera=new  THREE.PerspectiveCamera(
    75,
    canvas2.clientWidth / canvas2.clientHeight,
    0.1,
    1000);


const axesHelper=new THREE.AxesHelper(15);
// scene.add(axesHelper);


const orbit = new OrbitControls(camera,renderer.domElement);
orbit.enableZoom=false;
orbit.enablePan=false;
orbit.rotateSpeed=0.5;
orbit.enableRotate=true;
orbit.dampingFactor=0.1;
orbit.enableDamping=true;
// orbit.minDistance = 20;
// orbit.maxDistance = 38;

orbit.update();

camera.position.set(0,5,-22);

renderer.shadowMap.type=THREE.PCFShadowMap;
renderer.shadowMap.enabled=true;

//LIGHT

const amblight=new THREE.AmbientLight(0xffffff,0.2);
scene.add(amblight)

const Dlight=new THREE.SpotLight('#C0B7E6',5000,70);
Dlight.position.set(2,20,-27);
Dlight.castShadow=true;
scene.add(Dlight);

const Dlight2=new THREE.SpotLight('#C0B7E6',6000,50);
Dlight2.position.set(35,20,4);
Dlight2.castShadow=true;
scene.add(Dlight2);

const Dlight3=new THREE.SpotLight('#C0B7E6',4000,50);
Dlight3.position.set(-35,20,4,);
Dlight3.castShadow=true;
scene.add(Dlight3);

helper=new  THREE.SpotLightHelper(Dlight,'white',0.5);
// scene.add(helper);




//Plane
const planeG=new THREE.RingGeometry(7,15)
const planeM=new THREE.MeshPhysicalMaterial({color:'#603A8D',side:THREE.DoubleSide,transparent:true,opacity:0.1});
const plane=new THREE.Mesh(planeG,planeM);
plane.rotation.x=Math.PI/2;
scene.add(plane);
plane.position.set(0,-0.6,0)
plane.receiveShadow=true;












const cubeGeometry=new THREE.BoxGeometry(2,2,2);
const javaMaterial=new THREE.MeshPhysicalMaterial({
        map:textureJava,
        transparent:true,
        opacity:1,
        side:THREE.DoubleSide
});
const javacube=new  THREE.Mesh(cubeGeometry,javaMaterial);
javacube.position.set(0,2,0);
javacube.castShadow=true;

const angularMaterial=new THREE.MeshPhysicalMaterial({
    map:textureAngular,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const angularcube=new  THREE.Mesh(cubeGeometry,angularMaterial);
angularcube.position.set(0,2,0);
angularcube.castShadow=true;

const cssMaterial=new THREE.MeshPhysicalMaterial({
    map:textureCss,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const csscube=new  THREE.Mesh(cubeGeometry,cssMaterial);
csscube.position.set(0,2,0);
csscube.castShadow=true;

const HtmlMaterial=new THREE.MeshPhysicalMaterial({
    map:textureHtml,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const Htmlcube=new  THREE.Mesh(cubeGeometry,HtmlMaterial);
Htmlcube.position.set(0,2,0);
Htmlcube.castShadow=true;


const JsMaterial=new THREE.MeshPhysicalMaterial({
    map:textureJavascript,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const jscube=new  THREE.Mesh(cubeGeometry,JsMaterial);
jscube.position.set(0,2,0);
jscube.castShadow=true;



const mongoMaterial=new THREE.MeshPhysicalMaterial({
    map:textureMongoDB,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const mongocube=new  THREE.Mesh(cubeGeometry,mongoMaterial);
mongocube.position.set(0,2,0);
mongocube.castShadow=true
mongocube.castShadow=true;


const pyMaterial=new THREE.MeshPhysicalMaterial({
    map:texturePython,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const pycube=new  THREE.Mesh(cubeGeometry,pyMaterial);
pycube.position.set(0,2,0);
pycube.castShadow=true;



const js3Material=new THREE.MeshPhysicalMaterial({
    map:textureThreeJS,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide
});
const js3cube=new  THREE.Mesh(cubeGeometry,js3Material);
js3cube.position.set(0,2,0);
js3cube.castShadow=true;




const tsMaterial=new THREE.MeshPhysicalMaterial({
    map:textureTs,
    transparent:true,
    opacity:1,
    side:THREE.DoubleSide,
});
const tscube=new  THREE.Mesh(cubeGeometry,tsMaterial);
tscube.position.set(0,2,0);
tscube.castShadow=true;





const baseG=new THREE.CylinderGeometry(1.7,2.5,1)
const baseM=new THREE.MeshPhysicalMaterial({color:"black",wireframe:true});
const base=new THREE.Mesh(baseG,baseM);
// scene.add(base);




//left

const jg=new THREE.Group();
jg.add(javacube)
// jg.add(base);
scene.add(jg);
jg.position.set(0,0,0)
jg.castShadow=true;

const ag=new THREE.Group();
ag.add(angularcube)
// ag.add(base.clone());
scene.add(ag);
ag.position.set(7.07,0,7.07)
ag.castShadow=true;

const cg=new THREE.Group();
cg.add(csscube)
// cg.add(base.clone());
scene.add(cg);
cg.position.set(0,0,10)
cg.castShadow=true;

//back

const hg=new THREE.Group();
hg.add(Htmlcube)
// hg.add(base.clone());
scene.add(hg);
hg.position.set(-7.07,0,7.07)
hg.castShadow=true;


const jsg=new THREE.Group();
jsg.add(jscube)
// jsg.add(base.clone());
scene.add(jsg);
jsg.position.set(-10,0,0)
jsg.castShadow=true;


const mg=new THREE.Group();
mg.add(mongocube)
// mg.add(base.clone());
scene.add(mg);
mg.position.set(-7.07,0,-7.07)
mg.castShadow=true;

//right

const pg=new THREE.Group();
pg.add(pycube)
// pg.add(base.clone());
scene.add(pg);
pg.position.set(0,0,-10)
pg.castShadow=true;

const j3g=new THREE.Group();
j3g.add(js3cube)
// j3g.add(base.clone());
scene.add(j3g);
j3g.position.set(7.07,0,-7.07)
j3g.castShadow=true;


const tg=new THREE.Group();
tg.add(tscube)
// tg.add(base.clone());
scene.add(tg);
tg.position.set(10,0,0)
tg.castShadow=true;


const parentGroup=new THREE.Group();
parentGroup.add(tg);
parentGroup.add(j3g);
parentGroup.add(pg);
parentGroup.add(mg);
parentGroup.add(jsg);
parentGroup.add(hg);
parentGroup.add(cg);
parentGroup.add(ag);
parentGroup.add(jg);
parentGroup.add(plane);
parentGroup.position.set(0,0,0)
scene.add(parentGroup)




//RESIZE

function onWindowResize(){

    width=canvas2.clientWidth;
    height=canvas2.clientHeight;
    
    screenWidth=window.screen.width;
    screenHeight=window.screen.height;
    
    renderer.setSize(width,height);
    camera.aspect=width/height;
    
    
    camera.updateProjectionMatrix();  
    
    if(screenWidth<1024){
        camera.position.set(-40,5,0);
        
        orbit.minDistance = 10;
orbit.maxDistance = 40;

    }

}

window.addEventListener('resize',onWindowResize);

window.onload=onWindowResize();




function animate(time){

    orbit.update();

        javacube.rotation.y+=0.01
        angularcube.rotation.y-=0.01;
        csscube.rotation.y-=0.01;
        Htmlcube.rotation.y-=0.01;
        jscube.rotation.y=0.01;
        mongocube.rotation.y-=0.01;
        pycube.rotation.y-=0.01;
        js3cube.rotation.y-=0.01;
        tscube.rotation.y-=0.01;
        parentGroup.rotation.y-=0.005;  
        
        renderer.render(scene,camera);

    }

    renderer.setAnimationLoop(animate);



    
    
