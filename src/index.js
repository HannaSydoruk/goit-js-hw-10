import { fetchBreeds } from "./cat-api";

const selectEl = document.querySelector('select.breed-select');

fetchBreeds()
    .then((breeds) => {
        const result = breeds.map(({ id, name }) => {
            return `<option value="${id}">${name}</option>`;
        })
        selectEl.innerHTML = result.join();
    });
