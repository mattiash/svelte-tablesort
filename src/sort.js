export function compareStrings(sA, sB) {
    return sA > sB ? 1 : sA < sB ? -1 : 0
}

export function compareNumbers(sA, sB) {
    return sA - sB
}

export function sortGenerator(gen) {
    return (a, b) => {
        for (let comp of gen(a, b)) {
            if (comp) {
                return comp
            }
        }

        return 0
    }
}
