import { IconButton, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
    return (
        <header className='w-full flex items-center justify-between py-4 px-12 border-b border-gray-300'>
            <div>
                <Typography variant='h6' fontWeight={600}>Trang Si Ban</Typography>
            </div>

            <nav className='flex items-center gap-6'>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
            </nav>

            <div className='flex items-center gap-x-2'>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>

                <IconButton>
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </div>
        </header>
    )
}

export default Header