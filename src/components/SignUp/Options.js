import { Link } from "react-router-dom"

export const Options = () => {
    return (
        <div className="flex justify-center">
            <div>
                <h2 className="capitalize mt-10 text-2xl">You want to sign up as a...</h2>
                <div className="options flex space-x-10 mt-20">
                    <div>
                        <Link to={`/signup/userSignup`} className="bg-green-500 hover:bg-green-400 text-white p-4 focus:ring focus:ring-green-200">A User</Link>
                    </div>
                    <p>OR</p>
                    <div>
                        <Link to={`/signup/uploader`} className="bg-green-500 hover:bg-green-400 text-white p-4 focus:ring focus:ring-green-200">An Uploader</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}