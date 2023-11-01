import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const selectEl = document.querySelector('select.breed-select');
const selectedBreedEl = document.querySelector('div.cat-info');
const loadingEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

hideEl(selectEl);
hideEl(errorEl);

fetchBreeds()
    .then((breeds) => {
        const result = breeds.map(({ id, name }) => {
            return `<option value="${id}">${name}</option>`;
        })
        selectEl.innerHTML = result.join();
        showEl(selectEl);
    })
    .finally(() => { hideEl(loadingEl); });

selectEl.addEventListener('change', (e) => {
    const breedID = selectEl.options[selectEl.selectedIndex].value;
    showEl(loadingEl);
    hideEl(selectedBreedEl);
    fetchCatByBreed(breedID)
        .then((breedDetails) => {
            const breadMarkup = breedMarkupBuilder(breedDetails);
            selectedBreedEl.innerHTML = breadMarkup;
            showEl(selectedBreedEl);
        })
        .finally(() => { hideEl(loadingEl); });
});

function breedMarkupBuilder(breedDetails) {
    return `<img src="${breedDetails.url}" width="300px"/>
                <h2>${breedDetails.breeds[0].name}</h2>
                <p>${breedDetails.breeds[0].description}</p>
                <p>${breedDetails.breeds[0].temperament}</p>
                `;
}

function hideEl(el) {
    el.classList.add('hidden');
}

function showEl(el) {
    el.classList.remove('hidden');
}