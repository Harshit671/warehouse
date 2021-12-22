import warehouse from './warehouse.json';

export const cityFilter = () => {
    const cities = [...new Set(warehouse.map(item => {
        return item.city;
    }))]
    return cities;
}

export const clusterFilter = () => {
    const cluster = [...new Set(warehouse.map(item => {
        return item.cluster;
    }))]
    return cluster;
}

export const spaceFilter = () => {
    const space = [...new Set(warehouse.map(item => {
        return item.space_available;
    }))]
    return space;
}
