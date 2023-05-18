const url = "http://localhost:3001/";

export default async function request({ method, endpoint, body }) {
    const response = await fetch(url + endpoint, {
        method: method.toUpperCase(),
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const result = await response.json();

    return result;
}