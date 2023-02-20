// function findRotatedIndex(arr, num) {
//     let pivot = findPivot(arr)
//     if (pivot > 0 && num >= arr[0] && num < arr[pivot - 1]){ 
//         return binarySearch(arr, num, 0, pivot - 1)
//     } else {
//         return binarySearch(arr, num, pivot, arr.length - 1)
//     }
// }

// function binarySearch(arr, num, start, end) {
//     if (arr.length === 0) return -1
//     if (num < arr[start] || num > arr[end]) return -1

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if(arr[mid] === num){
//             return mid
//         } else if (num < arr[mid]) {
//             end = mid + 1
//         } else {
//             start = mid + 1
//         }
//     }
//     return -1
// }

// function findPivot(arr) {
//     if(arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if(arr[mid] > arr[mid + 1]) return mid + 1
//         else if (arr[start] <= arr[mid]) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }
// }

function findRotatedIndex(array, num) {
    var pivot = findPivot(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  
  function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0
    var end = arr.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[mid + 1]) return mid + 1
      else if (arr[start] <= arr[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }

module.exports = findRotatedIndex