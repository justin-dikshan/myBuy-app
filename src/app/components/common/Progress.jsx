import React from "react";

const Progress = ({ perentage, color }) => {
    return (
        <div className="w-full flex">
            <div
                className={`h-1 self-center rounded-l`}
                style={{ width: `${perentage}%`, background: color }}
            ></div>
            <div className="h-1 w-full self-center rounded-r bg-[#E4E7E9]"></div>
        </div>
    );
};

export default Progress;
