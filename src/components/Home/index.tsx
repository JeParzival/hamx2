import type { FC } from "react"
import { FoodCard } from "@components/Cards/foodCard"
export const Home: FC = () => {
    return (
        <div className="">
            <div className="">
            <p className="text-white">Yemekler</p>
            <div className="grid grid-cols-6 ml-32 gap-x-1 gap-y-2">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard /> 
                <FoodCard />
            </div>
        </div>
        </div>
    )
}

