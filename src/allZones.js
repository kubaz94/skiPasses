export const allZones = data => {
    const uniqueZones = data.reduce((acc, {zones}) => 
        acc.includes(...zones) ? acc : [...acc, ...zones], []
    )
    
    return uniqueZones.map(zone => <p>{zone}</p>)
}