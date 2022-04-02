import type { FC } from "react"
export const Home: FC = () => {
    return (
        <div className="">
            <p>Yemekler</p>
            <div className="grid grid-cols-8">
                <div>
                    <div>
                        <img src="w-96" className="https://www.burgerking.com.tr/cmsfiles/products/big-king-jr-menu.png?v=180" />
                    </div>
                </div>
            </div>
        </div>
    )
}