import { create } from 'apisauce';

const apiClient = create({
    baseURL: "http://dataservice.accuweather.com"
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        return response;
    }
}

export default apiClient;