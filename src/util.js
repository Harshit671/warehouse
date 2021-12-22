
export const cityFilter = (data) => {
    const cities = [...new Set(data.map(item => {
        return item.city;
    }))]
    return cities;
}

export const clusterFilter = (data) => {
    const cluster = [...new Set(data.map(item => {
        return item.cluster;
    }))]
    return cluster;
}

export const spaceFilter = (data) => {
    const space = [...new Set(data.map(item => {
        return item.space_available;
    }))]
    return space;
}
