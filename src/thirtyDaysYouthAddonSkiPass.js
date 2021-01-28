export const thirtyDaysYouthAddonSkiPass = (data, shouldFilterAddons, forWho, timeRange) => {
    const thirtyDaysYouthOptions = [] 
    data.map(option => {
        if (option.duration === timeRange && option.priceClass === forWho)
            thirtyDaysYouthOptions.push(option)
    })
    
    const filteredThirtyDaysYouthOptions = thirtyDaysYouthOptions.filter(option => option.isAddonProduct === shouldFilterAddons)
    return filteredThirtyDaysYouthOptions.map(({productName}) => <p>{productName}</p>)
}
