export const filterSkiPasses = (data, zone, duration) => {
    const skiPasses = data.filter(singleData => singleData.isAddonProduct === false && singleData.zones.includes(zone) && singleData.duration === duration)
    console.log('wymagane skiPassy', skiPasses)
}