import axios from "axios";

axios.defaults.headers.common["x-api-key"] = 'live_6r1jrhIZ1MzqpeOYkBKuheEViytbJ0MrfFtwgWFL3PVZg3ZBqJ9MSvYaccPL5tMh';

const BASE_URL = 'https://api.thecatapi.com';

function fetchBreeds() {
    const END_POINT = '/v1/breeds';

    const url = `${BASE_URL}${END_POINT}`;

    return axios.get(url)
        .then(response => response.data);

}

function fetchCatByBreed(breedId) {
    const END_POINT = '/v1/images/search';
    const PARAMS = `?breed_ids=${breedId}`;

    const url = `${BASE_URL}${END_POINT}${PARAMS}`;

    return axios.get(url)
        .then(response => response.data[0]);

}


export { fetchBreeds, fetchCatByBreed };
