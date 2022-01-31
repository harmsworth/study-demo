// 扩展功能
Function.prototype.method = function (name, func) {
  this.prototype[name] = func
  return this
}

// 柯里化：将函数与传递给它的参数结合起来，产生一个新函数
Function.method('curry', function () {
  let slice = Array.prototype.slice,
      args = slice.apply(arguments), 
      that = this
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)))
  }
})


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, count = 0, mid
  while (left <= right) {
    count++
    mid = (left + right) >> 1
    let num = nums[mid]
    if (num === target) { 
      console.warn('中间返回循环次数：', {count, left, right, mid});
      return mid
    } else if (num < target) {
      left = mid + 1
    } else if (num > target) {
      right = mid - 1
    }
  }
  console.warn('底部返回循环次数：', {count, left, right, mid});
  return left
};

// (0 + 3) % 7
// (1 + 3) % 7
// (2 + 3) % 7
// (3 + 3) % 7
// (4 + 3) % 7
// (5 + 3) % 7

var nums = [1,2,3,4,5,6,7], k = 3

var rotate = function(nums, k) {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
      newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
      nums[i] = newArr[i];
  }
};
