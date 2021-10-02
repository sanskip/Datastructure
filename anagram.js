// Solution 1 - Create a character map of both strings and compare maps
function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    //Get the character map of both strings
    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)

    /* Next, we loop through each character in the charMapA, 
    and check if it exists in charMapB and has the same value as
    in charMapA. If it does not, return false */
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true
}

function getCharMap(string) {
    // We define an empty object that will hold the key - value pairs.
    let charMap = {}

    /*We loop through each character in the string. if the character 
    already exists in the map, increase the value, otherwise add it 
    to the map with a value of 1 */
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

// 2. Sort Strings and check if they are the same
function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
    return string.split('').sort().join('');
}

// 3. Using Array.splice()
function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    /*Next, we check if the lengths of the strings are equal. 
    If they are anagrams, they will have the same length. */
    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")

    for (let char of stringA ){ 
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true

}


// Here are some examples of words that are anagrams.

// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”






