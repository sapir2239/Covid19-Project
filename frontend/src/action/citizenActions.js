import axios from 'axios'

export const listCitizens = () => async (dispatch) => {

    try {
        dispatch({type: 'CITIZEN_LIST_REQUEST'})

        const {data} = await axios.get('/api/summary/')

        dispatch({
            type: 'CITIZEN_LIST_SUCCESS',
            payload: data
            })

    } catch (error) {
        dispatch({
            type: 'CITIZEN_LIST_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
    }
}

export const listCitizensByCity = (city) => async (dispatch) => {
    try {
        dispatch({ type: 'CITIZEN_BY_CITY_REQUEST' })

        const { data } = await axios.get(`/api/summary/searchByCity/${city}/`)

        dispatch({
            type: 'CITIZEN_BY_CITY_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'CITIZEN_BY_CITY_ERROR',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listCitizensByDateOfBirth = (startdate, enddate) => async (dispatch) => {
    try {
        dispatch({ type: 'CITIZEN_BY_DATE_REQUEST' })

        const { data } = await axios.get(`/api/summary/searchByDate/${startdate}&${enddate}/`)

        dispatch({
            type: 'CITIZEN_BY_DATE_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'CITIZEN_BY_DATE_ERROR',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createCitizens = (citizens) => async (dispatch) => {

    try {
        dispatch({type: 'CITIZEN_CREATE_REQUEST'})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const {data} = await axios.post('/api/create/', citizens, config)

        dispatch({
            type: 'CITIZEN_CREATE_SUCCESS',
             payload: data
            })

    } catch (error) {
        dispatch({
            type: 'CITIZEN_CREATE_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
    }
}

