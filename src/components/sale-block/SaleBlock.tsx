import { Link, Typography } from '@mui/material'

const SaleBlock = () => {
    return (
        <div className='w-full flex md:flex-row flex-col md:items-center items-start justify-center bg-black py-3 md:px-0 px-2 gap-x-2'>
            <Typography variant='caption' color='white'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </Typography>

            <Typography component={Link} href="#" variant='caption' fontWeight={600} color='white'>
                Shop now
            </Typography>
        </div>
    )
}

export default SaleBlock