export const filterUniqueProductNames = (data, shouldFilterAddons) => {
    const allProductNames = []
    if (shouldFilterAddons) {
        data.forEach(({isAddonProduct, productName}) => {
            isAddonProduct && allProductNames.push(productName)
        })
    } else {
        data.forEach(({isAddonProduct, productName}) => {
            !isAddonProduct && allProductNames.push(productName)
        })
    }
    const uniqueProductNames = allProductNames.reduce((acc, curr) => 
        acc.includes(curr) ? acc : [...acc, curr], [])
    return uniqueProductNames.map(productName => <p>{productName}</p>)
}