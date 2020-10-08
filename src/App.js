import React, {useRef, useState} from 'react';
import './App.css';

//import '@tensorflow/tfjs-node';
//import * as faceapi from 'face-api.js';

//import * as tf from '@tensorflow/tfjs';
//import * as posenet from '@tensorflow-models/posenet';
//import webgazer from 'webgazer';
import Webcam from 'react-webcam';
import logo from './logo.png';


const App = () => {
  const [camOn] = useState(true);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //  Load posenet
  /**const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    //
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
      console.log(pose);

    }
  };

  runPosenet();*/

  //const toggleCam = React.useCallback(() => setCamOn(!camOn));

  return (
    <div className="App">
      <header className="App-header">
        {camOn ? 
        <Webcam ref={webcamRef}
        audio={false}
        mirrored={true}
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480,
        }}
        />
        : <p className="Loading">Camera is not on.</p>}
        <canvas ref={canvasRef}
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480,
        }}
        />
        {/**<button style={{position:"absolute", top:'50px', left:'400px', zIndex:10}}>Toggle Camera</button>*/}
      </header>
      <img src={logo} alt="Logo" style={{position:'absolute', left:'2vw', bottom:'2vw'}} />
    </div>
  );
}

export default App;
