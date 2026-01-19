
export async function fetchCityData(cityName) {
    const url = `http://localhost:3000/api/home/${cityName.toLowerCase()}`

    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch data!')
    else {
        const cityData = await response.json()
        return cityData
    }
}
