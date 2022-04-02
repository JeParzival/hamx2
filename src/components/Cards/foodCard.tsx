import { AiFillStar } from "react-icons/ai"
import type { FC } from "react"
export const FoodCard:FC = () => {
    return (
    <div className="w-[192px] h-[256px] bg-[#252525] rounded-xl shadow-xl hover:scale-105 transition ease-in-out duration-500">
    <div className="bg-[#FF3F3F] rounded-full w-32 h-32 mt-4 mx-auto">
            <img className="" src="/assets/burger.png" />
        </div>
        <p className="text-center text-white mt-1">King Burger</p>
        <div className="flex flex-row ml-12">
        <p className="text-[#6EFF3C] text-3xl text-center mt-2">139,99</p>
        <p className="text-[#6EFF3C] mt-5 text-base">TL</p>
        </div>
        <div className="flex ml-14">
        <AiFillStar color="#FFD233"/>
        <AiFillStar color="#FFD233"/>
        <AiFillStar color="#FFD233"/>
        <AiFillStar color="#FFD233"/>
        <AiFillStar color="#FFD233"/>
        </div>
    </div>
    )
}