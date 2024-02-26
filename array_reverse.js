const isPalindrome=(word)=>
{
    let wordArr=[];
    let revWord=[];
    for(const w of word)
    {
        wordArr.push(w);
        revWord.push(w);
    }
    return wordArr.toString()===revWord.reverse().toString();
};
console.log(isPalindrome('122')?'Palindrome...' :'Not Palindrome...');