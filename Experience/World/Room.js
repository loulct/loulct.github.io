import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { EventEmitter } from "events";

export default class Room extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.time.on("ready", () => {
      this.setRotationConst();
      this.setModel();
      this.onMouseMove();
    });
  }

  setModel() {
    this.D = {
      n_rings: 64,
      n_segms: 5,
      tw_fact: 7,
      tw_size: 0.61,
      rg_ring: 0.25,
      ar_segm: 4,
      ba_segm: 0,
      r_ring: 0,
    };

    (this.twist = new THREE.Group()), this.D;

    this.fillData();
    this.buildTwist();
    this.twist.rotation.x = -0.5 * Math.PI;

    this.torus = this.twist;

    this.scene.add(this.torus);
    this.torus.scale.set(0, 0, 0);
    this.emit("worldready");
  }

  setRotationConst() {
    this.childerAxis = new THREE.Vector3(0, 1, 0);
    this.torusAxis = new THREE.Vector3(0.2, 0, 1);
  }

  buildTwist() {
    for (let i = 0; i < this.D.n_rings; i++) {
      (this.cyl = new THREE.Mesh(
        ...[
          new THREE.CylinderGeometry(
            ...[
              this.D.rc_cyl,
              this.D.rc_cyl,
              this.D.h_cyl,
              this.D.n_segms,
              1,
              true,
            ]
          ),
          new THREE.MeshPhongMaterial({
            color: 0x333333,
            emissive: 0x333333,
            specular: 0xf17ba4,
            shininess: 30,
            side: THREE.DoubleSide,
          }),
        ]
      )),
        (this.m4 = new THREE.Matrix4());

      this.cyl.add(
        new THREE.LineSegments(
          ...[
            new THREE.EdgesGeometry(this.cyl.geometry),
            new THREE.LineBasicMaterial({
              color: 0xe5185f,
            }),
          ]
        )
      );

      this.cyl.applyMatrix4(
        this.m4.makeRotationY(this.D.tw_fact * i * this.D.ba_segrot)
      );
      this.cyl.applyMatrix4(this.m4.makeTranslation(this.D.r_ring, 0, 0));
      this.cyl.applyMatrix4(this.m4.makeRotationZ(i * this.D.ba_ring));

      this.twist.add(this.cyl);
    }
  }

  fillDataStatic() {
    this.D.ba_ring = (2 * Math.PI) / this.D.n_rings;
    this.D.ba_segm = (2 * Math.PI) / this.D.n_segms;
    this.D.ba_segrot = this.D.ba_segm / this.D.n_rings;
  }

  fillDataSizeRel() {
    this.D.m = Math.min(window.innerWidth, window.innerHeight);
    this.D.l_cyl =
      (this.D.tw_size * this.D.m) /
      ((1 + this.D.rg_ring) / this.D.ar_segm / Math.tan(0.5 * this.D.ba_ring) +
        (1 + Math.cos(0.5 * this.D.ba_segm)) / Math.sin(0.5 * this.D.ba_segm));
    this.D.h_cyl = this.D.l_cyl / this.D.ar_segm;
    this.D.rc_cyl = (0.5 * this.D.l_cyl) / Math.sin(0.5 * this.D.ba_segm);
    this.D.ri_cyl = (0.5 * this.D.l_cyl) / Math.tan(0.5 * this.D.ba_segm);
    this.D.r_ring =
      (0.5 * (1 + this.D.rg_ring) * this.D.h_cyl) /
        Math.tan(0.5 * this.D.ba_ring) +
      this.D.ri_cyl;
  }

  fillData() {
    this.fillDataStatic();
    this.fillDataSizeRel();
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.3;
    });
  }

  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.torus.rotation.y = this.lerp.current;
    this.animation();
  }

  animation() {
    for (let i = 0; i < this.D.n_rings; i++) {
      this.torus.children[i].rotateOnAxis(this.childerAxis, Math.PI / 1080);
    }
    this.torus.rotateOnAxis(this.torusAxis, Math.PI / 1080);
  }
}
