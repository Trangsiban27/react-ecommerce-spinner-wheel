import type { PrizeWheelRef, Sector } from '@mertercelik/react-prize-wheel';
import React, { useRef, useState } from 'react'
import { PrizeWheel } from '@mertercelik/react-prize-wheel';
import { Button } from '@mui/material';
import { useConfetti } from '../../../hooks/useConfetti';
import CelerationDialog from '../dialogs/CelerationDialog';
import { useGlobalState } from '../../../store/useGlobalState';

const Wheel = () => {
    //state
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState<Sector | null>(null);

    const wheelRef = useRef<PrizeWheelRef | null>(null);
    const { fireCelebration } = useConfetti();
    const { addHistory } = useGlobalState();

    const sectors: Sector[] = [
        { id: 1, label: 'Better luck next time!', probability: 0 },
        { id: 2, label: 'Discount 15%', probability: 15 },
        { id: 3, label: 'Better luck next time!', probability: 0 },
        { id: 4, label: 'Discount 15%', probability: 15 },
    ];

    const handleSpinClick = () => {
        wheelRef.current?.spin();
    }

    const handleSpinEnd = (sector: Sector) => {
        console.log('Winner:', sector.label);

        handleOpenDialog();
        fireCelebration(1);
        setResult(sector);

        addHistory(sector)
    };

    const handleOpenDialog = () => {
        setOpen(true);
    }

    return (
        <div className='flex flex-col gap-y-6 items-center justify-center py-8'>
            <div className='md:w-100 w-[98%]'>
                <PrizeWheel
                    ref={wheelRef}
                    sectors={sectors}
                    onSpinEnd={handleSpinEnd}
                    duration={6}
                    minSpins={4}
                    maxSpins={4}
                    frameColor="#ffd4ef"
                    middleColor="#fff"
                    middleDotColor="#e2678a"
                    winIndicatorColor="#ffd4ef"
                    winIndicatorDotColor="#e2678a"
                    sticksColor="#ffd4ef"
                    wheelColors={['#fff', '#ffd4ef']}
                    borderColor="#ffd4ef"
                    borderWidth={1}
                    textColor="#e2678a"
                    textFontSize={20}
                    wheelShadowColor="#000"
                    wheelShadowOpacity={0.2}
                    middleShadowColor="#000"
                    middleShadowOpacity={0.25}
                    indicatorShadowColor="#000"
                    indicatorShadowOpacity={0.3}
                />
            </div>

            <Button
                variant='contained'
                onClick={handleSpinClick}
                sx={{
                    textTransform: 'none',
                }}
            >
                Spin now - Get your prize instantly!
            </Button>

            <CelerationDialog
                open={open}
                setOpen={setOpen}
                result={result}
            />
        </div>
    )
}

export default Wheel