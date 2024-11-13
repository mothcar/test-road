import { useState, useRef } from "react";
import "./App.css";
import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
  Loader,
} from "@zappar/zappar-react-three-fiber";
import logo from './assets/007.jpg';

function App() {
  const camera = useRef();
  // Use Webpack to load in target file
  const targetFile =logo;
  return (
    <>
      <div>
        <ZapparCanvas>
          {/* Setup Zappar Camera, setting camera object's ref */}
          <ZapparCamera ref={camera} />
          {/* Setup Image Tracker, passing our target file and camera ref */}
          <ImageTracker targetImage={targetFile} camera={camera}>
            {/* Create a normal pink sphere to be tracked to the target */}
            {/* <mesh>
              <sphereBufferGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh> */}
          </ImageTracker>
          {/* Normal directional light */}
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
          <Loader />
        </ZapparCanvas>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
