import { Skeleton } from "@mui/material"
import SaleToday from "./components/sale-today/SaleToday"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const handleLuckyWheelClick = () => {
        navigate("/lucky-wheel")
    }

    return (
        <div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={320} />
            </div>

            <div className="w-full flex flex-wrap items-center md:justify-center justify-start gap-6 p-6">
                {Array.from(Array(8)).map((_, index) => (
                    <Skeleton key={index} variant="circular" width={40} height={40} />
                ))}
            </div>

            <div className="w-full flex items-center justify-center">
                <SaleToday />
            </div>

            <div onClick={handleLuckyWheelClick} className="fixed bottom-5 right-5 cursor-pointer">
                <img src="lucky-wheel-icon.png" alt="Lucky Wheel" className="w-24 object-cover" />
            </div>
        </div>
    )
}

export default Home