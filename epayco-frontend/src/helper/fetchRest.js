const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method = 'POST' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    
}

const fetchConToken = ( endpoint, data, method = 'POST' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = data.value;

        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            }
        });
    
}



export {
    fetchSinToken,
    fetchConToken
}