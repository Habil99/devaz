import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.devaz.test',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});