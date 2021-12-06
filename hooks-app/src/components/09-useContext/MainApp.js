import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setuser] = useState({
        id: 1234,
        name: 'addRian0-0',
        email: 'addrianun@gmail.com'
    });

    return (
        <div>
            <UserContext.Provider value={{ user, setuser }} >
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
