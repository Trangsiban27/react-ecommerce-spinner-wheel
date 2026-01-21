import RewardHistories from "./components/reward-histories/RewardHistories"
import Wheel from "./components/Wheel"

const LuckyWheel = () => {

    return (
        <div className="grid grid-cols-12 md:p-12 py-4">
            <div className="md:col-span-9 col-span-12">
                <Wheel />
            </div>

            <div className="md:col-span-3 col-span-12">
                <RewardHistories />
            </div>
        </div>
    )
}

export default LuckyWheel