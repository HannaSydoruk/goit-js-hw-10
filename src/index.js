import axios from "axios";
import { TheCatAPI } from "@thatapicompany/thecatapi";

axios.defaults.headers.common["x-api-key"] = 'live_6r1jrhIZ1MzqpeOYkBKuheEViytbJ0MrfFtwgWFL3PVZg3ZBqJ9MSvYaccPL5tMh';

const theCatAPI = new TheCatAPI("live_6r1jrhIZ1MzqpeOYkBKuheEViytbJ0MrfFtwgWFL3PVZg3ZBqJ9MSvYaccPL5tMh");

const selectEl = document.querySelector('select.breed-select');

function getBreeds() {
    const BASE_URL = 'https://api.thecatapi.com';
    const END_POINT = '/v1/breeds';
    const PARAMS = '?';

    const url = `${BASE_URL}${END_POINT}${PARAMS}`;

    axios.get(url)
        .then((response) => {
            const result = response.data.map(({ id, name }) => {
                return `<option value="${id}">${name}</option>`;
            })
            selectEl.innerHTML = result.join();
        });
}

getBreeds();
