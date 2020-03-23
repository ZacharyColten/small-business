

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const deleteListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

// export const fetchMakes = () => {
//     return (dispatch) => {
//         fetch(url)
//             .then(res => res.json())
//             .then(response => {
//                 const action = {
//                     type: 'FETCH_MAKES',
//                     value: response.Results
//                 }
//                 dispatch(action)
//             })
//     }
// }

export const deleteMake = (index) => {
    return {
        type: 'DELETE_LISTING',
        value: index
    }
}