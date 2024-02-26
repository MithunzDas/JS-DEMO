// const isPalindrome=(word)=>
// {
//     let wordArr=[];
//     let revWord=[];
//     for(const w of word)
//     {
//         wordArr.push(w);
//         revWord.push(w);
//     }
//     return wordArr.toString()===revWord.reverse().toString();
// };
// console.log(isPalindrome('122')?'Palindrome...' :'Not Palindrome...');

// const isPalindrome=(word)=>word.split('').reverse().join('')===word;
// console.log(isPalindrome('121') ? 'It is a Palindrome...' : 'Not Palindrome...');

function isPalindrome(word)
{
    return word.split('').reverse().join('')===word;
};
console.log(isPalindrome('123')?'Palindrome' : 'Not Palindrome');