import React, { useRef, useEffect, useState } from 'react';
import cls from './Animated.module.css';
import image3 from '../../assets/png/leaf.png'
import image4 from '../../assets/png/leaf2.png'

const Animated = ({img}) => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1, // 10% элемента должно быть видно
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <>
        {img === 'image3' && <img ref={divRef} className={cls.leaf} src={image3} alt="icons" />}
        {img === 'image4' && <img ref={divRef} className={cls.leaf2} src={image4} alt="icons" />}
        </>
    );
};

export default Animated;
