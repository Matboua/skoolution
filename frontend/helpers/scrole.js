export const scrollRight = (ref, index) => {
    console.log(ref);
    
    const scrollWidth = ref.current.clientWidth;
    containerRef.current.scrollTo({
        right: scrollWidth * index,
        behavior: "smooth",
    });
};
export const scrollLeft = (ref, index) => {
    const scrollWidth = ref.current.clientWidth;
    containerRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
    });
};