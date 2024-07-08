import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room =  this.experience.room;
        GSAP.registerPlugin(ScrollTrigger);

        this.progress = 0;
        this.dummyCurve = new THREE.Vector3(0, 0, 0);

        this.lerp = {
            current:0,
            target:0,
            ease:0.1,
        };

        this.position = new THREE.Vector3(0, 0, 0);
        this.lookAtPosition = new THREE.Vector3(0, 0, 0);

        this.setPath();
        this.setScrollTrigger();
        //this.showPath();
        this.onWheel();
    }

    setPath(){
        this.curve = new THREE.CatmullRomCurve3( [
            new THREE.Vector3(2, 5, -10),
        ], true);
    }

    setScrollTrigger(){
        ScrollTrigger.matchMedia({
            "(min-width: 969px)": () => {

                this.room.torus.scale.set(0.2, 0.2, 0.2);
                this.room.torus.position.set(0, 0, 0);

                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".hero-second",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.firstMoveTimeline.to(this.room.torus.position, {
                    x: () => {
                        return this.sizes.width * 0.002;
                    },
                });

                
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".section-margin-second",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.secondMoveTimeline.to(this.room.torus.position, {
                    x: () => {
                        return -this.sizes.width * 0.002;
                    },
                });

                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".section-margin-third",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.thirdMoveTimeline.to(this.room.torus.position, {
                    x: () => {
                        return this.sizes.width * 0.002;
                    },
                });
            },

            "(max-width: 968px)": () => {

                this.room.torus.position.set(0, 0, 0);

                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".hero-second",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.firstMoveTimeline.to(this.room.torus.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1,
                });

                
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".section-margin-second",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.secondMoveTimeline.to(this.room.torus.scale, {
                    x: 0.25,
                    y: 0.25,
                    z: 0.25,
                });

                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger:{
                        trigger:".section-margin-third",
                        start:"top top",
                        end:"bottom bottom",
                        scrub: 3,
                        invalidateOnRefresh:true,
                    },
                });
                this.thirdMoveTimeline.to(this.room.torus.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1,
                });
            },
        });
    }

    showPath(){
        const points = this.curve.getPoints( 50 );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
        const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        
        const curveObject = new THREE.Line( geometry, material );
        this.scene.add(curveObject);
    }

    onWheel(){
        window.addEventListener("wheel", (e)=>{
            if(e.deltaY > 0){
                this.lerp.target += 0.01;
            }else{
                this.lerp.target -= 0.01;
            }
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
        this.lerp.target = GSAP.utils.clamp(0, 1, this.lerp.target);
        this.lerp.current = GSAP.utils.clamp(0, 1, this.lerp.current);
        this.curve.getPointAt(this.lerp.current, this.position);

        this.camera.orthographicCamera.position.copy(this.position);
        this.camera.orthographicCamera.lookAt(0, 0, 0);
    }
}