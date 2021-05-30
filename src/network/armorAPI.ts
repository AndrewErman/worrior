import { RawCategories, RawCentury, RawCountries, RawEntity } from "../parsers/parsers";

// const URL = 'http://localhost:5000' // http://localhost:8080 https://buhurtglobal.com
export const loadCategories = (): Promise<RawCategories[]> => {
    return fetch(`/assets/categories.json`).then((data) => data.json());
};

export const loadCenturies = (): Promise<RawCentury[]> => {
    return fetch(`/assets/centuries.json`).then((data) => data.json());
};

export const loadCountries = (): Promise<RawCountries[]> => {
    return fetch(`/assets/countries.json`).then((data) => data.json());
};

export const loadModels = (): Promise<RawEntity[]> => {
    return fetch(`/assets/data.json`)
        .then((data) => data.json());
};
