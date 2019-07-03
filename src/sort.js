export function initSort(arr, fieldName) {
    arr.order = fieldName
    doSort(arr, fieldName, {})
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

