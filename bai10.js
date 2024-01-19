function findMaxSumSubarray(arr) {
    let maxSum = 0;
    let currentSum = 0;
    let startIdx = 0;
    let subarray;
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        subarray = arr.slice(startIdx, i + 1);
      }
      if (currentSum < 0) {
        currentSum = 0;
        startIdx = i + 1;
      }
    }
    return subarray;
  }
  const myArray = [2, -3, 5, -1, 6, -4, 2, 2];
  const resultArray = findMaxSumSubarray(myArray);
  console.log("Mảng con có tổng phần tử lớn nhất:", resultArray);