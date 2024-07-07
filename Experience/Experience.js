import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import Room from "./World/Room.js";
import Controls from "./World/Controls.js";

export default class Experience{
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.room = new Room();
        this.controls = new Controls();

        this.time.on("update", ()=>{
            this.update();
        });
        this.sizes.on("resize", ()=>{
            this.resize();
        });
    }

    update(){
        this.camera.update();
        this.renderer.update();
        this.room.update();
        this.controls.update();
    }

    resize(){
        this.camera.resize();
        this.renderer.resize();
    }
}