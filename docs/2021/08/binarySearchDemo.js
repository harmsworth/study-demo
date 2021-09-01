/*
 * 二分查找demo
 * @Author: wujiang
 * @Date: 2021-08-16 18:37:22
 * @Last Modified by:   wujiang
 */
/**
 * 二分查找框架
 * @param {Array} nums
 * @param {Number} target
 */
/*
function binarySearch (nums, target) {
  let left = 0, right = ...
  while (...) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) {
      ...
    } else if (nums[mid] < target) {
      left =
    } else if (nums[mid] > target) {
      right =
    }
  }
  return ...
}
*/
function binarySearch (nums, target) {
  let left = 0, right = nums.length - 1, count = 0
  while (left <= right) {
    count++
    let mid = (left + right) >> 1
    if (nums[mid] === target) {
      console.warn('循环次数首部：', count);
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  console.warn('循环次数底部：', count);
  return -1
}

const nums = [2, 3, 5, 8]
const target = 100
console.log(binarySearch(nums, target))
