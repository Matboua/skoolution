"use client";
import { getCircleStyle, getLineStyle } from "../../../helpers/circleColers";
import { Check } from "lucide-react";
import React, { useState, useEffect } from "react";

const Cercels = () => {
    const [step, setStep] = useState(2);


    return (
        <div className="flex items-center justify-between flex-wrap gap-4">
            {[1, 2, 3].map((s, index) => (
                <React.Fragment key={s}>
                    <div className="flex flex-col items-center">
                        <div
                            className={`rounded-full w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center ${getCircleStyle(
                                step, s
                            )}`}
                        >
                            {step >= s ? (
                                <Check className="text-white" />
                            ) : (
                                <></>
                            )}
                        </div>
                        <p className="text-sm mt-1 text-center">{`étape ${s}`}</p>
                    </div>
                    {index < 2 && (
                        <div
                            className={`h-1 -mt-4 flex-1 max-w-20 rounded-2xl ${getLineStyle(
                                step, s
                            )}`}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Cercels;
