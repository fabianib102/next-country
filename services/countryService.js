import { urlGetCountriesByRegion } from '../utils/urlData'

export const getCountriesByRegion = async (region) => {
    const url = `${urlGetCountriesByRegion}/${region}`;
    const response = await fetch(url)
    return await response.json()
}