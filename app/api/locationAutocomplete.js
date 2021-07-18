import client from './client';
import api from './configAPI';

const endpoint = '/locations/v1/cities/autocomplete';

const get = (text) => client.get(`${endpoint}?apikey=${api.key}&q=${text}&language=${api.lang}`);

export default {
    get,
};