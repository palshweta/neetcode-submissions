class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length){
      return  false
    }
    let result={};

    for(let chr of s){
        result[chr]=(result[chr] || 0)+1
    }

    for(let chr of t){
       if( !result[chr]){
        return false
       }
       result[chr]--;
    }
    return true

}
}
