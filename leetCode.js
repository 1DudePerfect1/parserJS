/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    for(let i = 0; i < s.length; i++){
        if(s[i] === ',' || s[i] === ' ' || s[i] === ':' || s[i] === '"'){
            s = s.replace(s[i], '')
        } 
    }
    for(let i = 0; i<Math.floor(s.length/2);i++){
        if(s[i] !== s[s.length-i]){
            return false
        }
        return true
    }
};
s = "race a car"
console.log(isPalindrome(s))