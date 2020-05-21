/** Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15. */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let total=0
    
    for(let i=0; i< matrix.length; i++){
        for(let j=0; j<matrix[0].length ; j++){
            if(matrix[i][j] >0 && i>0 && j>0){
            matrix[i][j]= Math.min(matrix[i-1][j-1], matrix[i][j-1], matrix[i-1][j]) +1
            }
            total+= matrix[i][j]
        }
    }
    
    return total
};
