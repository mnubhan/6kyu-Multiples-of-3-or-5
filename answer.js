const solution = function(number){
  let sum =0
  for (let i=0;i<number;i++){
    i%3==0 || i%5==0 ? sum+=i : sum
  }
  return sum
}

function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
