
const initialState = {
    warehouse: []
};

export default function tripReducer(state = initialState, action) {
    switch (action.type) {

        case 'FETCH_INITIAL_DATA':
            return {
                ...state,
                warehouse: [action.payload.data]
            };

        case 'FETCH_SEARCH_DATA':
            return {
                ...state,
                warehouse: [action.payload.data]
            };

        case 'FETCH_FILTER_DATA':
            return {
                ...state,
                warehouse: [action.payload.data]
            };

        // case FETCH_TRIPS_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.payload.error,
        //         trips: []
        //     };

        // case ADD_TRIP:
        //     console.log("reduce: ", {
        //         ...state,
        //         trips: [...state.trips, action.payload.trip]
        //     })
        //     return {
        //         ...state,
        //         trips: [...state.trips, action.payload.trip]
        //     }


        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}