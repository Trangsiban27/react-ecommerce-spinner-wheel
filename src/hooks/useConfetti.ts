import confetti from "canvas-confetti";
import { useCallback, useRef } from "react"

export const useConfetti = () => {
    const animationRef = useRef<number | null>(null)

    const stopConfetti = useCallback(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        confetti.reset();
    }, []);

    const fireCelebration = useCallback((seconds: number = 5) => {
        const duration = seconds * 1000;
        const end = Date.now() + duration;
        const colors = ['#bb0000', '#ffffff'];

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                zIndex: 9999,
                colors,
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                zIndex: 9999,
                colors,
            });

            if (Date.now() < end) {
                animationRef.current = requestAnimationFrame(frame);
            } else {
                animationRef.current = null;
            }
        };

        stopConfetti();

        frame();
    }, [stopConfetti]);

    return {
        fireCelebration,
        stopConfetti
    };
}