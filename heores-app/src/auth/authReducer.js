import { types } from "../types/types";

const state = {
    name: 'addRian0-0',
    logged: true
}

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                name: action.payload.name,
                logged: true
            }
            break;

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }

}