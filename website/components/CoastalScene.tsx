"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { VRButton } from "three/addons/webxr/VRButton.js";

type NodeDef = { id: string; name: string; x: number; color: number };
const NODE_DEFS: NodeDef[] = [
  { id: "A", name: "Suryalanka Gateway", x: -33, color: 0x0a9396 },
  { id: "B", name: "Eco-Adventure & Wellness", x: -11, color: 0x2a9d52 },
  { id: "C", name: "Vodarevu Marine", x: 11, color: 0xee6c4d },
  { id: "D", name: "Ramapuram Quiet Coast", x: 33, color: 0x5b8a72 },
];

function makeLabel(text: string, sub: string): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 160;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "rgba(7,59,76,0.92)";
  roundRect(ctx, 6, 6, 500, 148, 24);
  ctx.fill();
  ctx.fillStyle = "#d4f1ef";
  ctx.font = "bold 30px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(sub, 256, 56);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 40px system-ui, sans-serif";
  ctx.fillText(text, 256, 108);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(11, 3.4, 1);
  return sprite;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export default function CoastalScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const builtRef = useRef<THREE.Group | null>(null);
  const [future, setFuture] = useState(true);
  const [ready, setReady] = useState(false);

  // toggle built-future structures
  useEffect(() => {
    if (builtRef.current) builtRef.current.visible = future;
  }, [future]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe9ec);
    scene.fog = new THREE.Fog(0xbfe9ec, 80, 200);

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 34, 64);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.xr.enabled = true;
    mount.appendChild(renderer.domElement);

    // VR button (WebXR device connector)
    const vrBtn = VRButton.createButton(renderer);
    vrBtn.style.position = "absolute";
    vrBtn.style.bottom = "16px";
    vrBtn.style.left = "50%";
    vrBtn.style.transform = "translateX(-50%)";
    mount.appendChild(vrBtn);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2.15;
    controls.minDistance = 20;
    controls.maxDistance = 140;
    controls.target.set(0, 0, 0);

    // Lighting
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6b8f71, 0.95));
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.1);
    sun.position.set(40, 60, 30);
    scene.add(sun);

    // Sun disc
    const sunDisc = new THREE.Mesh(
      new THREE.SphereGeometry(5, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xffd27f })
    );
    sunDisc.position.set(-60, 40, -90);
    scene.add(sunDisc);

    // SEA (animated)
    const seaGeo = new THREE.PlaneGeometry(220, 120, 80, 40);
    seaGeo.rotateX(-Math.PI / 2);
    const seaMat = new THREE.MeshStandardMaterial({
      color: 0x0a9396,
      transparent: true,
      opacity: 0.92,
      roughness: 0.3,
      metalness: 0.15,
    });
    const sea = new THREE.Mesh(seaGeo, seaMat);
    sea.position.set(0, -0.2, -38);
    scene.add(sea);
    const basePos = (seaGeo.attributes.position.array as Float32Array).slice();

    // BEACH (sand)
    const beach = new THREE.Mesh(
      new THREE.PlaneGeometry(220, 26),
      new THREE.MeshStandardMaterial({ color: 0xf2e2c2, roughness: 1 })
    );
    beach.rotation.x = -Math.PI / 2;
    beach.position.set(0, 0, 5);
    scene.add(beach);

    // HINTERLAND (green)
    const land = new THREE.Mesh(
      new THREE.PlaneGeometry(220, 70),
      new THREE.MeshStandardMaterial({ color: 0x7fae6b, roughness: 1 })
    );
    land.rotation.x = -Math.PI / 2;
    land.position.set(0, -0.01, 53);
    scene.add(land);

    // Dune belt + casuarina/mangrove greenery (instanced cones)
    const treeGeo = new THREE.ConeGeometry(0.7, 3.2, 6);
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x2f7d4f, roughness: 1 });
    const trees = new THREE.InstancedMesh(treeGeo, treeMat, 260);
    const dummy = new THREE.Object3D();
    let ti = 0;
    for (let row = 0; row < 4; row++) {
      for (let i = 0; i < 65 && ti < 260; i++) {
        const x = -105 + Math.random() * 210;
        const z = 20 + row * 8 + Math.random() * 5;
        dummy.position.set(x, 1.6, z);
        dummy.scale.setScalar(0.7 + Math.random() * 0.8);
        dummy.updateMatrix();
        trees.setMatrixAt(ti++, dummy.matrix);
      }
    }
    trees.instanceMatrix.needsUpdate = true;
    scene.add(trees);

    // Dune mounds along the back of the beach
    for (let i = 0; i < 24; i++) {
      const d = new THREE.Mesh(
        new THREE.SphereGeometry(2.2 + Math.random() * 1.2, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: 0xe8d39c, roughness: 1 })
      );
      d.position.set(-105 + i * 9, 0, 15 + Math.random() * 3);
      d.scale.y = 0.5;
      scene.add(d);
    }

    // The green-blue promenade spine
    const spine = new THREE.Mesh(
      new THREE.PlaneGeometry(210, 2.2),
      new THREE.MeshStandardMaterial({ color: 0xdfe9e8, roughness: 0.8 })
    );
    spine.rotation.x = -Math.PI / 2;
    spine.position.set(0, 0.05, 11);
    scene.add(spine);

    // BUILT FUTURE — node structures (toggleable)
    const built = new THREE.Group();
    builtRef.current = built;
    scene.add(built);

    NODE_DEFS.forEach((n) => {
      const group = new THREE.Group();
      group.position.set(n.x, 0, 14);

      // marker pylon
      const pylon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.8, 8, 12),
        new THREE.MeshStandardMaterial({ color: n.color, roughness: 0.4, metalness: 0.2 })
      );
      pylon.position.y = 4;
      group.add(pylon);

      // a cluster of low-rise eco pavilions
      for (let k = 0; k < 5; k++) {
        const h = 1.6 + Math.random() * 2.4;
        const b = new THREE.Mesh(
          new THREE.BoxGeometry(2.2, h, 2.2),
          new THREE.MeshStandardMaterial({ color: k % 2 ? 0xffffff : 0xf3ead4, roughness: 0.7 })
        );
        b.position.set(-6 + k * 3, h / 2, 6 + (k % 2) * 4);
        group.add(b);
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(1.9, 1.3, 4),
          new THREE.MeshStandardMaterial({ color: 0xc77f56, roughness: 0.8 })
        );
        roof.position.set(b.position.x, h + 0.6, b.position.z);
        roof.rotation.y = Math.PI / 4;
        group.add(roof);
      }

      // solar canopy (energy-positive)
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(7, 0.2, 4),
        new THREE.MeshStandardMaterial({ color: 0x14323a, metalness: 0.6, roughness: 0.3 })
      );
      panel.position.set(8, 3.2, 7);
      panel.rotation.z = 0.18;
      group.add(panel);

      // floating label
      const label = makeLabel(n.name, `Node ${n.id}`);
      label.position.set(0, 11, 0);
      group.add(label);

      built.add(group);
    });

    // A few wind turbines offshore (energy-positive coast)
    for (let i = 0; i < 4; i++) {
      const t = new THREE.Group();
      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.5, 14, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
      );
      mast.position.y = 7;
      t.add(mast);
      const hub = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 8), new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
      hub.position.y = 14;
      t.add(hub);
      for (let b = 0; b < 3; b++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.3, 6, 0.15),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        blade.position.set(0, 14 + 3, 0);
        blade.geometry.translate(0, 3, 0);
        blade.position.y = 14;
        blade.rotation.z = (b * Math.PI * 2) / 3;
        t.add(blade);
      }
      t.position.set(-50 + i * 33, 0, -55);
      built.add(t);
    }

    built.visible = future;

    // resize
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    setReady(true);
    const clock = new THREE.Clock();
    renderer.setAnimationLoop(() => {
      const t = clock.getElapsedTime();
      const pos = seaGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pos.length; i += 3) {
        const x = basePos[i];
        const z = basePos[i + 2];
        pos[i + 1] = Math.sin(x * 0.15 + t * 1.2) * 0.5 + Math.cos(z * 0.2 + t) * 0.4;
      }
      seaGeo.attributes.position.needsUpdate = true;
      controls.update();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      renderer.dispose();
      if (vrBtn.parentNode) vrBtn.parentNode.removeChild(vrBtn);
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "min(72vh, 640px)", borderRadius: 16, overflow: "hidden", background: "#bfe9ec" }}>
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 8, zIndex: 5 }}>
        <button
          onClick={() => setFuture((f) => !f)}
          style={{
            border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14,
            padding: "10px 16px", borderRadius: 999,
            background: future ? "#0a9396" : "#073b4c", color: "#fff",
            boxShadow: "0 4px 14px rgba(7,59,76,0.25)",
          }}
        >
          {future ? "Viewing: 2047 vision ✦" : "Viewing: today ○"}
        </button>
      </div>
      {ready && (
        <div style={{ position: "absolute", top: 14, right: 14, zIndex: 5, background: "rgba(255,255,255,0.85)", borderRadius: 10, padding: "8px 12px", fontSize: 12.5, color: "#3e555d", maxWidth: 220 }}>
          Drag to orbit · scroll to zoom · use the <b>Enter VR</b> button for a headset.
        </div>
      )}
    </div>
  );
}
