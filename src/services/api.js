//0111c7327099b755518af8bd919edb2bce7d3935

import axios from 'axios';
export const key = '0111c7327099b755518af8bd919edb2bce7d3935';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        Authorization: `Bearer ${key}`,
    },
});

export default api;
