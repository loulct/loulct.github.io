import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";


export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.lerp = {
            current:0,
            target:0,
            ease:0.1,
        };

        this.setModel();
        this.onMouseMove();
    }

    setModel(){
        this.geometry = new THREE.TorusGeometry(10, 3, 16, 100)
        this.material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true});
        this.torus = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.torus)
        this.torus.scale.set(0.2, 0.2, 0.2);
    }
      
    onMouseMove(){
        window.addEventListener("mousemove", (e)=>{
            this.rotation = 
                ((e.clientX - window.innerWidth/2)*2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.3;
        });
    }

    resize(){
    }
    
    update(){
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.torus.rotation.y = this.lerp.current;
    }
}