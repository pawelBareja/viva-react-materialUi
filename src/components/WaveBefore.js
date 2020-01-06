import React from 'react';

const WaveBefore = (props) => {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={props.color} fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fcb042" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg> */}
        </div>
    );
};

export default WaveBefore;