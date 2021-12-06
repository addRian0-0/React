import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { user, setuser } = useContext(UserContext);
    console.log(user)

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                onClick={() => setuser({
                    id: 123456,
                    name: 'addRian0_0',
                    email: 'addRian@gmail.com'
                })}
                className="btn btn-primary"
            >
                Login
            </button>
        </div>
    )

}
