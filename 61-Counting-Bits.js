/** Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language. */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
// *********** O(n*sizeof(integer))************
//     let ans=[]
//     for(let i=0; i<=num; i++){
//        let count=0, n=i
        
//       while(n!=0){
//       n = n&(n-1);
//       count++;
//         }
//         ans.push(count)
//     }
//     return ans
    
//************ O(n) solution ***********
    
    var a = [ 0 ]
    
    for ( let i = 1; i <= num; i++ )
        a.push( i % 2 ? a[ Math.floor( i / 2 ) ] + 1 : a[ i / 2 ] )
    
    return a
};
