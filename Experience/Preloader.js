import {EventEmitter} from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";

export default class Preloader extends EventEmitter{
    constructor(){
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.room;
        this.room.on("worldready", () => {
            this.playIntro();
            this.emit("enablecontrols");
        });
    }

    playIntro(){
        this.timeline = new GSAP.timeline();
        this.timeline
        .to(".preloader", {
            delay: 1,
            opacity: 0,
            onComplete: ()=>{
                document.querySelector(".preloader").classList.add("hidden");
            }
        })
        .to(this.room.torus.scale, {
            x:0.02,
            y:0.02,
            z:0.02,
            ease: "back.out(2.5)",
            duration:1.5,
        });
    }

}