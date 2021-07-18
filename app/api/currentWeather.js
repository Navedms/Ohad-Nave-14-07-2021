import client from './client';
import api from './configAPI';

const endpoint = '/currentconditions/v1/';

const get = (key, details) => client.get(`${endpoint}/${key}?apikey=${api.key}&language=${api.lang}&details=${details}`);

export default {
    get,
};