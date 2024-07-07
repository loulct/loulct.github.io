import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";


export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
    }

    resize(){
    }
    
    update(){
    }
}