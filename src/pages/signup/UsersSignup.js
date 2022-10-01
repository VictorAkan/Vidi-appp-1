import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_USER } from "../../utils/mutation"
import Auth from "../../utils/auth"
import { Navbar } from "../../components/Navbar"
import { UserForm } from "../../components/SignUp/userForm"
import { QuickUserInfo } from "../../components/SignUp/QuickUserInfo"

export const UsersSignup = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [addUser, { error, data }] = useMutation(ADD_USER)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            // ...formState,
            [name]: value,
        })
        // console.log(formState);
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex">
                <QuickUserInfo />
                <UserForm 
                    formState={formState}
                    error={error}
                    data={data}
                    handleChange={handleChange} 
                    handleFormSubmit={handleFormSubmit} 
                />
            </div>
        </div>
    )
}