import React, { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

interface CountUpProps {
    start?: number;
    end: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    isActive?: boolean;
    className?: string; // To allow external styling
}

const CountUp: React.FC<CountUpProps> = ({
    start = 0,
    end,
    duration = 2, // default duration in seconds (note: helper calculates damping/stiffness based on this approx)
    delay = 0.5,
    prefix = '',
    suffix = '',
    isActive = true,
    className = '',
}) => {
    const ref = useRef<HTMLSpanElement>(null);

    // Create a motion value starting at 'start'
    const motionValue = useMotionValue(start);

    // Use a spring for smooth animation. 
    // We can adjust stiffness/damping to approximate a duration, 
    // but for precise timing `animate` is often easier. 
    // However, springs feel more natural for "growth".
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000 // spring duration is conceptual in framer-motion typically, but here we tune
    });

    const [displayValue, setDisplayValue] = useState(start);

    useEffect(() => {
        // Reset to start whenever isActive changes to false -> true transition or on mount if logic matches
        if (isActive) {
            // Reset immediately to start value before animating
            motionValue.set(start);

            // Timeout for delay
            const timeoutId = setTimeout(() => {
                motionValue.set(end);
            }, delay * 1000);

            return () => clearTimeout(timeoutId);
        } else {
            // If not active, maybe reset to 0 or keep it? 
            // User said "repeat everytime the section is on focus".
            // So when isActive becomes false (scroll away), we should probably reset or just let it stay until it comes back?
            // To really "grow" again, we need to reset when it becomes active again.
            // We handle that in the `if (isActive)` block by setting it to start.
            motionValue.set(start);
        }
    }, [isActive, end, start, delay, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            // Round the value for integer display
            // If we need decimals, we'd take a prop for decimals
            setDisplayValue(Math.round(latest));
        });

        return () => unsubscribe();
    }, [springValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
};

export default CountUp;
