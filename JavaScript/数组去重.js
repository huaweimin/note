// 1.双重for循环去重
function deduplication(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--
      }
    }
  }
  return arr;
}

// 2.indexOf去重
function deduplication(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
        array.push(arr[i]);
    }
    console.log(array);
  }
  return array;
}

// 3.Array.from与set去重
function deduplication(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  return Array.from(new Set(arr));
}