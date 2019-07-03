export function initSort(arr, fieldName) {
    arr.order = fieldName
    // doSort(arr, fieldName, {})
}
export function doSort(arr, fieldName, event) {
    if (arr.fieldName === fieldName) {
        console.log('reverse')
        arr.reverse()
    }
    else {
        console.log(fieldName)
        arr.fieldName = fieldName
        arr.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
    }
}

export function sorted(arr, sortOrder) {
    console.log('sortOrder', sortOrder)
    doSort(arr, sortOrder)
    return [arr, sortOrder]
}

export function sortOn(currOrder, newOrder, event) {
    console.log('sortOn', newOrder)
    if(event.shiftKey) {
        console.log('should push')
    }
    if(currOrder === newOrder) {
        return '-' + currOrder
    }
    else {
        return newOrder
    }
}