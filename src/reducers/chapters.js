

const initialState = {
    loading: false,
    data: null
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOAD_CHAPTERS__INIT':
            return{
                loading: true,
            };
        case 'LOAD_CHAPTERS__SUCCESS':
            return {
                data: action.payload,
                loading: false,
            };
        case 'LOAD_CHAPTERS__ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
