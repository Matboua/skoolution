const scrollToStep = (index) => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: scrollWidth * index,
                behavior: "smooth",
            });
        }
    };