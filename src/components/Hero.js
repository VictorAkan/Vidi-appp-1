import { Link } from "react-router-dom"
import hero from "../assets/images/undraw.png"

export const Hero = () => {
    return (
        <div className="p-8 px-10">
            <div className="rounded-2xl pb-2 pt-3 items-center bg-green-500 lg:flex p-12">
                <div className="promo-section">
                    <h2 className="capitalize text-[3.5rem] font-bold text-slate-100">Watch cool videos <br /> here on VIDI</h2>
                    <p className="text-slate-700 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Blanditiis modi illo eos earum, eius ducimus laborum? Ipsa sapiente,<br /> corporis, </p>
                    <div className="mt-10">
                        <Link to="/" className="bg-white focus:ring focus:ring-green-800 hover:bg-slate-100 drop-shadow-md text-slate-700 rounded-2xl p-6">Watch Now</Link>
                    </div>
                </div>
                <div className="home-img ml-auto">
                    <img src={hero} alt="hero-img" />
                </div>
            </div>
        </div>
    )
}