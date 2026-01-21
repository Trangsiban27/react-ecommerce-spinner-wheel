import { Alert, Slide, Snackbar, type SlideProps } from '@mui/material'
import { useGlobalState } from '../../store/useGlobalState'

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

const SnackbarMessage = () => {
    const { snackbar, closeSnackbar } = useGlobalState()

    const handleClose = () => {
        closeSnackbar()
    }

    return (
        <Snackbar
            open={snackbar.open}
            onClose={handleClose}
            slots={{ transition: SlideTransition }}
            message={snackbar.message}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                onClose={handleClose}
                severity={snackbar.variant}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarMessage