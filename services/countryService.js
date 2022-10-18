import { urlGetCountriesByRegion, urlGetCountryDetail, urlGetAll } from '../utils/urlData'


export const getAllCountries = async () => {
    const url = `${urlGetAll}/all`;
    const response = await fetch(url)
    return await response.json()
}


export const getCountriesByRegion = async (region) => {
    const url = `${urlGetCountriesByRegion}/${region}`;
    const response = await fetch(url)
    return await response.json()
}


export const getDetailCountryByCode = async (code) => {
    const url = `${urlGetCountryDetail}/${code}`;
    const response = await fetch(url)
    return await response.json()
}