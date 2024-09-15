'use client'
import React, { useState, useEffect } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'

function Capture() {
    const webcamRef = React.useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    // const takeShot = () => {
    //     const imageSrc = getScreenshot();
    //     console.log(imageSrc);
    // }
    const takeSs = () => {

        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc);
        setImageSrc(imageSrc);
        // return imageSrc;
    };
    const imageGayab = () => {
        const image = document.getElementById('camera_image');
        image.style.display = 'none';
    }
    useEffect(() => {
        if (webcamRef.current) {
            const image = document.getElementById('camera_image');
            image.style.display = 'none';
            // Do something when the element is loaded
            //   console.log('Element loaded:', webcamRef.current);
        }
    }, []);

    return (
        <div className='absolute flex justify-center items-center w-screen h-screen top-0 left-0 bg-[#0002] z-10'>
            <div className='w-1/3 h-2/3 rounded-xl p-4 bg-[#036d6c]'>
                <h1 className='text-2xl font-semibold w-full text-center text-white'>Capture Document/Image</h1>
                <p className='w-full text-center text-base text-white'>Description</p>
                {/* <Webcam/> */}
                <div className="w-fit border h-3/5  m-auto rounded-md border-black mt-4 ">
                    {/* Webcam */}
                    <img id='camera_image' loading='lazy' src="https://i.pinimg.com/originals/61/54/18/61541805b3069740ecd60d483741e5bb.jpg" className=' w-auto m-auto h-full object-contain' alt="" />

                    <Webcam onLoad={imageGayab} className='w-auto h-full m-auto rounded-md drop-shadow-2xl decoration-blue-500'
                        ref={webcamRef}
                        audio={false}

                        screenshotFormat="image/jpeg"

                        videoConstraints={videoConstraints}

                        mirrored={true}
                        playsInline={false}
                        controls={false}
                    >

                    </Webcam>
                </div>
                {/* <img src={imageSrc} /> */}
                <div className='flex justify-center gap-4 mt-4'>
                    <button onClick={takeSs} className=' cursor-pointer p-2 bg-blue-500 text-white rounded-md'>Capture</button>
                    <button className=' cursor-pointer p-2 bg-red-500 text-white rounded-md'>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default Capture
