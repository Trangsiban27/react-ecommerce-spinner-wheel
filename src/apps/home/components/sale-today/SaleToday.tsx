import { Box, Skeleton, Typography } from '@mui/material'


const SaleToday = () => {
    return (
        <div className='md:w-7xl w-full px-4'>
            <div className='flex items-center gap-x-2'>
                <Typography variant='subtitle1' fontWeight={600}>Sale today</Typography>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
                {Array.from(Array(4)).map((_, index) => (
                    <Box key={index} sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
                        <Skeleton variant="rectangular" width={'100%'} height={118} />

                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default SaleToday