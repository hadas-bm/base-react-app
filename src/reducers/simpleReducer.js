import {
    SIMPLE_ACTION,
    ON_CHANGE_NAME
} from '../constans';

const defaultState = {
    name: 'world'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SIMPLE_ACTION:
            return {
                result: action.payload
            }
        case ON_CHANGE_NAME:
            return {
                name: action.payload
            }
        default:
            return state
    }
}