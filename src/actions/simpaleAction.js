import {
    ON_CHANGE_NAME,
    SIMPLE_ACTION
} from '../constans';

export const simpleAction = () => dispatch => {
    dispatch({
        type: SIMPLE_ACTION,
        payload: 'result_of_simple_action'
    })
}

export const onChangeName = (value) => dispatch => {
    console.log('onChangeName value', value)
    dispatch({
        type: ON_CHANGE_NAME,
        payload: value
    })
}