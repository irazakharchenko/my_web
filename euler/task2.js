let last_num = 4000000;

function sumEvenFibonachi(end) {
  let sum = 0;
  let prev = 1;
  let cur = 2;
  let curcopy;
  while (cur < end){
    sum += cur;
    curcopy = cur;
    cur = cur * 3 + prev * 2;
    prev = curcopy *2 + prev;

  }
  return sum;
}

console.log(sumEvenFibonachi(last_num));