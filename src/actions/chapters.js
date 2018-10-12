import { loadChaptersApi } from "../api/chapters";

export const loadChapters = () => {
    return function(dispatch) {

        dispatch({
            type: "LOAD_CHAPTERS__INIT"
        });
        loadChaptersApi().then(response => {
            dispatch({
                type: "LOAD_CHAPTERS__SUCCESS",
                payload: response
            });
        }).catch(error => {
            dispatch({
               type: "LOAD_CHAPTERS__ERROR",
               payload: error
            });
        });
    }
};
