import welcomeImg from "../../assets/images/welcome.png"

export const QuickUserInfo = () => {
    return (
        <div className="bg-green-500 h-full pt-10 pb-28 text-white">
            <img src={welcomeImg} alt="" />
            <div>
                <p className="text-[3rem] text-center">Join to watch your 👋<br />exciting favorite</p>
            </div>
        </div>
    )
}