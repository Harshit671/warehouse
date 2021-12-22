export const fetchSearchData = (data) => ({
    type: 'FETCH_SEARCH_DATA',
    payload: { data }
});

export const fetchFilterData = (data) => ({
    type: 'FETCH_FILTER_DATA',
    payload: { data }
});

export const fetchInitialData = (data) => ({
    type: 'FETCH_INITIAL_DATA',
    payload: { data }
});


// export const addTrip = (trip) => ({
//     type: Constant.ADD_TRIP,
//     payload: { trip }
// });

// export const fetchUsersFailure = error => ({
//     type: Constant.FETCH_TRIPS_FAILURE,
//     payload: { error }
// })