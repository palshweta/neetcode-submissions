class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = {}

    for(let i=0;i<nums.length;i++){
        let result = target - nums[i]
        if(map[result] !== undefined){
return [map[result],i]
        }
       map[nums[i]]=i
    }
    return []
    }
}

