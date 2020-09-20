const dropdownOptions = () => {
    return [
        { value: 'All Homes', label: 'All Homes', maximum: 1000000},
        { value: 'Condo Co-ops', label: 'Condo Co-ops', maximum: 1000000},
        { value: 'Single Family Homes', label: 'Single Family Homes', maximum: 1000000 },
        { value: '1-Bedroom', label: '1-Bedroom', maximum: 1000000 },
        { value: '2-Bedroom', label: '2-Bedroom', maximum: 1250000 },
        { value: '3-Bedroom', label: '3-Bedroom', maximum: 1500000 },
        { value: '4-Bedroom', label: '4-Bedroom', maximum: 2000000 },
        { value: '5-Bedroom', label: '5-Bedroom', maximum: 2000000 }
    ];
}

module.exports = {
    dropdownOptions
}