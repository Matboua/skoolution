export const getCircleStyle = (step, currentStep) => {
    return step > currentStep
        ? "bg-blue-900"
        : step === currentStep
            ? "bg-blue-900"
            : "bg-blue-300";
};

export const getLineStyle = (step, currentStep) => {
    return step > currentStep ? "bg-blue-500" : "bg-blue-300";
};