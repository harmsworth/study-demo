/*
 * 排序算法
 * @Author: wujiang
 * @Date: 2021-08-19 20:03:59
 * @Last Modified by:   wujiang
 */

/**
 * 冒泡排序
 * @param {Array} arr
 */
 function bubbleSort (arr) {
  let len = arr.length, count = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      count += 1
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  console.log('循环次数：', count)
  return arr
 }
 var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
 console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

