var array = [1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9];
for (item of array) {
  if (item % 2 == 0) {
    item = item + 2;
  } else {
    item = item + 1;
  }
  array = item;
  console.log(array);
}
