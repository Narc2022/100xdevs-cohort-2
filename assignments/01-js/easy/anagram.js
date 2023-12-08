/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count1 = str1.length;
  let count2 = str2.lenght;
  if (count1 != count2) {
    return false;
  }
  str1.sort();
  str2.sort();

  // Compare sorted strings
  for (let i = 0; i < count1; i++) {
    if (str1[i] != str2[i]) return false;

    return true;
  }
}

module.exports = isAnagram;
