import React from "react";

const ProgressBar = ({ progress, max }) => {
    return (
        <progress value={progress} max={max}></progress>
    );
};

export default ProgressBar;
