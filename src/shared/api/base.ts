const BASE_URL = 'http://localhost:3005/';

export const api = {
    get: async (url: string) => {
        const response = await fetch(`${BASE_URL}${url}`);
        return response.json();
    },
    post: async (url: string, data: any) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    delete: async (url: string) => {
        await fetch(`${BASE_URL}${url}`, { method: 'DELETE' });
    },
    put: async (url: string, data: any) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },
};