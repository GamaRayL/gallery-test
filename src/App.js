import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { RepeatWrapping, SpotLightHelper, TextureLoader } from "three";
import {
  OrbitControls,
  PointerLockControls,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import PlaneF from "./PlaneF";
import Wall from "./Wall";
import Frame from "./Frame";
import "./App.css";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";

const images = [
  {
    size: [3784, 5167],
    position: [0, 12, -49.5],
    rotation: [0, 0, 0],
    url: "1.jpg",
  },
  {
    size: [4048, 3879],
    position: [30, 12, -49.5],
    rotation: [0, 0, 0],
    url: "2.jpg",
  },
  {
    size: [3650, 4556],
    position: [-30, 12, -49.5],
    rotation: [0, 0, 0],
    url: "3.jpg",
  },
  {
    size: [5617, 3357],
    position: [-49.5, 12, 0],
    rotation: [0, Math.PI / 2, 0],
    url: "4.jpg",
  },
  {
    size: [4505, 6000],
    position: [-49.5, 12, 30],
    rotation: [0, Math.PI / 2, 0],
    url: "5.jpg",
  },
  {
    size: [4532, 6000],
    position: [-49.5, 12, -30],
    rotation: [0, Math.PI / 2, 0],
    url: "6.jpg",
  },
  {
    size: [5313, 6000],
    position: [49.5, 12, 0],
    rotation: [0, -Math.PI / 2, 0],
    url: "7.jpg",
  },
  {
    size: [5300, 3650],
    position: [49.5, 12, 30],
    rotation: [0, -Math.PI / 2, 0],
    url: "8.jpg",
  },
  {
    size: [4715, 3300],
    position: [49.5, 12, -30],
    rotation: [0, -Math.PI / 2, 0],
    url: "9.jpg",
  },
];

/* function LightScene() {
  const { distance, intensity, angle, x } = useControls({
    distance: { value: 5, min: 1, max: 350 },
    intensity: { value: 1, min: 0, max: 5 },
    angle: { value: Math.PI / 6, min: 0.1, max: 1 },
    x: { value: 0, min: -200, max: 200 },
  });
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, "red");

  return (
    <spotLight
      castShadow
      ref={spotLightRef}
      position={[x, 40, 0]}
      intensity={intensity}
      distance={distance}
      angle={angle}
    />
  );
} */

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const texture = useLoader(TextureLoader, "textures/plane1_baseColor.jpeg");

  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.anisotropy = 16;
  }

  function pointerlockchange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });

  return (
    <>
      <Canvas shadows camera={{ position: [0, 75, 35], zoom: 1 }}>
        <PointerLockControls selector="#button" />
        <OrbitControls maxPolarAngle={1.45} />
        {/* <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} /> */}
        {/* <color attach="background" args={["#191920"]} /> */}
        {/* <hemisphereLight intensity={0.35} />
        <spotLight
        position={[20, 20, 20]}
        angle={1}
        penumbra={1}
        intensity={2}
        castShadow
      /> */}
        <Suspense fallback={null}>
          {/* <WallClassic /> */}
          {/* <LightScene /> */}

          {images.map((props) => (
            <Frame key={props.url} {...props} />
          ))}
          <group>
            <Wall position={[0, 0, -50]} />
            <Wall position={[0, 0, 50]} rotation={[0, -Math.PI * 1, 0]} />
            <Wall position={[50, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]} />
            <Wall position={[-50, 0, 0]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Wall position={[0, 20, -50]} /> */}
            {/* <WallClassic position={[0, 0, -50]} image="1.jpg" />
            <WallClassic position={[-48, 0, -50]} image="2.jpg" />
            <WallClassic
              position={[50, 0, 0]}
              rotation={[0, Math.PI, 0]}
              image="3.jpg"
            />
            <WallClassic
              position={[50, 0, -48]}
              rotation={[0, Math.PI, 0]}
              image="4.jpg"
            />
            <WallClassic
              position={[-50, 0, 0]}
              rotation={[0, -Math.PI * 2, 0]}
              image="5.jpg"
            />
            <WallClassic
              position={[-50, 0, 48]}
              rotation={[0, -Math.PI * 2, 0]}
              image="6.jpg"
            /> */}
            {/* <mesh position={[0, 20, -50]}>
              <boxGeometry args={[100, 40, 0.5]} />
              <meshStandardMaterial color={"gray"} />
            </mesh> */}
          </group>
          {/* <Plane2 /> */}
          {/* <Environment preset="city" /> */}
          <PlaneF />
        </Suspense>
        {/* <Environment background preset="sunset" blur={0.8} /> */}
      </Canvas>
      <button style={{ position: "absolute", top: 0 }} id="button">
        Click To Enter
      </button>
    </>
  );
};
export default App;
