async function requester(method, url, data) {
    const options = {}

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = response.json();

    return result;
}

// export const get = requester.bind(null, 'GET')
// export const post = requester.bind(null, 'POST')
// export const put = requester.bind(null, 'PUT')
// export const del = requester.bind(null, 'DELETE')
// this function is called partial application
// partially implement requester function
//Allows us to create a new function which has a 
// bind argument already

export const get = (url, data) => requester('Get', url, data)
export const post = (url, data) => requester('POST', url, data)
export const put = (url, data) => requester('PUT', url, data)
export const del = (url, data) => requester('DELETE', url, data)

// STUDY BIND -> Take a closer look -> Read the document
// and more about the bind