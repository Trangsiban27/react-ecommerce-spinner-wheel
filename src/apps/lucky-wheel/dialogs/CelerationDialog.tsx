import type { Sector } from '@mertercelik/react-prize-wheel'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalState } from '../../../store/useGlobalState';

interface Props {
    open: boolean,
    setOpen: (open: boolean) => void,
    result: Sector | null
}

const CelerationDialog = ({ open, setOpen, result }: Props) => {
    const { openSnackbar } = useGlobalState()

    const handleClickCloseDialog = () => {
        if (result?.probability !== 0) {
            openSnackbar('Voucher saved successfully, you can use it later!', 'success');
        }

        setOpen(false);
    }

    const handleSaveVoucher = () => {
        openSnackbar('Voucher saved successfully, you can use it later!', 'success');
        setOpen(false);
    }

    const handleGetVoucher = () => {
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            onClose={handleClickCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle
                id="winner-dialog-title"
                className='border-b border-gray-300 flex items-center justify-between !py-2'
            >
                <Typography fontWeight={600}>Congratulations!</Typography>

                <IconButton
                    onClick={handleClickCloseDialog}
                >
                    <CloseIcon
                        sx={{
                            fontSize: 18
                        }}
                    />
                </IconButton>
            </DialogTitle>

            <DialogContent
                className='!py-12 flex gap-x-2 items-center justify-center'
            >
                {result?.probability !== 0 && <Typography>
                    You won:
                </Typography>}

                <Typography fontWeight={600}>{result?.label}</Typography>
            </DialogContent>

            <DialogActions
                sx={{ justifyContent: 'end', py: 2 }}
                className='border-t border-gray-300'
            >
                {result?.probability !== 0 && <Button
                    onClick={handleSaveVoucher}
                    variant="outlined"
                    sx={{
                        textTransform: 'none'
                    }}
                >
                    Save voucher
                </Button>}

                {result?.probability !== 0 ?
                    (
                        <Button
                            onClick={handleGetVoucher}
                            variant="contained"
                            color="success"
                            sx={{
                                textTransform: 'none'
                            }}

                        >
                            Great, get it now!
                        </Button>
                    ) : (
                        <Button
                            onClick={handleClickCloseDialog}
                            variant="contained"
                            color="success"
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            Spin again
                        </Button>
                    )}
            </DialogActions>
        </Dialog>
    )
}

export default CelerationDialog