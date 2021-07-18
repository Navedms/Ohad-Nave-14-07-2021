import client from './client';
import api from './configAPI';

const endpoint = '/forecasts/v1/daily/5day/';

const get = (key, details) => client.get(`${endpoint}/${key}?apikey=${api.key}&language=${api.lang}&metric=${details}`);

export default {
    get,
};