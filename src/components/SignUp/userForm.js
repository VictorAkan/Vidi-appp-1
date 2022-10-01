import { Link } from "react-router-dom"

export const UserForm = ({ handleChange,handleFormSubmit,error,data,formState }) => {
    return (
        <div className="px-32">
            <div className="flex justify-center px-20">
                <p className="text-center mt-10 text-[2rem] font-bold text-green-500">Sign Up now!</p>
            </div>
            <div>
                {data ? (
                    <p>
                        Success! You may now proceed{" "}
                        <Link to="/">Back to home page.</Link>
                    </p>
                ) : (<form onSubmit={handleFormSubmit} className="mt-10" action="">
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" 
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="name"
                            className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-green-400"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" 
                            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="email"
                            className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-green-400"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="password">Create a password</label>
                        <input type="password" 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            value={formState.password}
                            onChange={handleChange}
                            placeholder="password"
                            className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-green-400"
                        />
                    </div>
                    <div className="mt-9 flex justify-center">
                        <button type="submit"
                            className="text-white bg-green-500 hover:bg-green-400 px-10 p-3 rounded-md"
                        >
                            Create
                        </button>
                    </div>
                </form>)}
                {/* {error && (
                    <div className="text-center text-2xl">
                        {error.message}
                    </div>
                )} */}
                <div className="mt-6 flex items-center justify-center">
                    <p>Already have an account? </p>
                    <Link className="text-green-500 ml-2"> Sign in</Link>
                </div>
            </div>
        </div>
    )
}