export const specificIdsAddonType = (data, optionId) => {
    const filteredOption = data.filter(
        singleData => singleData.id === optionId
    )

    return filteredOption.map(option => option.productName)
}