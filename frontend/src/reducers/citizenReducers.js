
export const citizenListReducers = (state = {citizens:[]}, action) => {
    switch(action.type){
        //when sending a request to get the citizens list
        case 'CITIZEN_LIST_REQUEST':
            return {loading: true, citizens:[]}

        //when the api return data
        case 'CITIZEN_LIST_SUCCESS':
            return {loading: false, citizens: action.payload}

        //when the request fail
        case 'CITIZEN_LIST_FAIL':
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const citizenByCityReducers = (state = { citizensByCity: [] }, action) => {
    switch (action.type) {
        case 'CITIZEN_BY_CITY_REQUEST':
            return { loading: true, citizensByCity: [] }

        case 'CITIZEN_BY_CITY_SUCCESS':
            return { loading: false, citizensByCity: action.payload, }

        case 'CITIZEN_BY_CITY_ERROR':
            return { loading: false, error: action.payload }

        default:
            return state
}
}

export const citizenByDateReducers = (state = { citizensByDate: [] }, action) => {
    switch (action.type) {
        case 'CITIZEN_BY_DATE_REQUEST':
            return { loading: true, citizensByDate: [] }

        case 'CITIZEN_BY_DATE_SUCCESS':
            return { loading: false, citizensByDate: action.payload, }

        case 'CITIZEN_BY_DATE_ERROR':
            return { loading: false, error: action.payload }

        default:
            return state
}
}

export const citizenCreateReducers= (state = {}, action) => {
    switch(action.type){
        //when sending a request to get the citizens list
        case 'CITIZEN_CREATE_REQUEST':
            return {loading: true}

        //when the api return data
        case 'CITIZEN_CREATE_SUCCESS':
            return {loading: false, success: true, citizens: action.payload}

        case 'PRODUCT_CREATE_RESET':
            return { citizens: {} }

        //when the request fail
        case 'CITIZEN_CREATE_FAIL':
            return {loading: false, error: action.payload}

        default:
            return state
    }
}


