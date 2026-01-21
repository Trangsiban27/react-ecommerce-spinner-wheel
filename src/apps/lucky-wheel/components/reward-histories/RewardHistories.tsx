import { Paper, Typography } from '@mui/material'
import { formatDateTime } from '../../../../utils/formatDateTime';
import { useGlobalState } from '../../../../store/useGlobalState';

const RewardHistories = () => {
    const { histories } = useGlobalState()

    return (
        <Paper
            elevation={0}
            className='w-full max-h-[80%] flex flex-col overflow-hidden border border-gray-200 shadow'
        >
            <Typography
                variant='subtitle1'
                className='border-b border-gray-300 p-2'
                fontWeight={600}
            >
                Reward Histories
            </Typography>

            <ul className='flex-1 overflow-y-auto overflow-x-auto'>
                {histories?.length > 0 ? (
                    histories?.slice(0, 9)?.map((history: any, index: number) => (
                        <li
                            key={index}
                            className='border-b last:border-b-0 border-gray-200 p-2 hover:bg-gray-50'
                        >
                            <Typography variant='body2' fontWeight={500} className='text-gray-700'>
                                {history?.label}
                            </Typography>
                            <Typography variant='caption' className='text-gray-400'>
                                {formatDateTime(history?.wonAt)}
                            </Typography>
                        </li>
                    ))
                ) : (
                    <div className='p-4 text-center'>
                        <Typography variant="body2" color="textSecondary italic">
                            No history found
                        </Typography>
                    </div>
                )}
            </ul>
        </Paper>
    )
}

export default RewardHistories