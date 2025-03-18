// The task is to write a function called isAnagram that checks if two given strings are anagrams of each other.

// What is an Anagram?
// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. Both must use the exact same characters the same number of times. For example:

// ✅ "listen" and "silent" → Anagram
// ❌ "hello" and "world" → Not an Anagram

// Steps to Solve the Task
// Normalize the Strings:

// Convert both strings to lowercase (to ignore case differences).
// Remove any extra spaces or non-alphabetic characters if needed (based on requirements).
// Sort the Strings:

// Split each string into an array of characters.
// Sort the characters in both strings.
// Join the sorted characters back into a string.
// Compare the Sorted Strings:

// If both sorted strings are identical, they are anagrams.
// Otherwise, they are not.

function isAnagram(str1, str2){
    console.log("str1 and str2",str1,str2);
    const normalize = (str)=> str.toLowerCase().replace(/\s/g, '')

    // sort and compaire
    return normalize(str1).split('').sort().join('')===normalize(str2).split('').sort().join('')

}

console.log(isAnagram("listen", "silent"));