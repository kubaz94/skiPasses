export const filterSpecificProduct = (data, duration, zone, priceClass) => {
    const filteredOption = data.filter(
        item => item.priceClass === priceClass && item.duration === duration && item.zones.includes(zone)
    )

    return filteredOption.map(option => option.productName)
}