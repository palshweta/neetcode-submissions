class Solution {
     
    hasDuplicate(arr) {
         let seen = new Set();

    for(let nums of arr){
        if(seen.has(nums)){
            return true
        }
    seen.add(nums)
    }
    return false
    }
}
