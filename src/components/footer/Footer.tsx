import { Box, Typography } from '@mui/material'


const Footer = () => {
    return (
        <Box component="footer" className="w-full bg-black border-t border-gray-200 py-12 px-4 md:px-12 flex items-center justify-center">
            <Typography variant="caption" color="white">
                © 2026 Trang Si Ban
            </Typography>
        </Box>
    )
}

export default Footer