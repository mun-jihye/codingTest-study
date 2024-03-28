/**
 * 11723 [집합]
 *
 * 입력 : 수행해야 하는 연산의 수 M / M개의 줄에 수행해야 하는 연산이 한 줄에 하나씩
 * 출력 : check 연산이 주어질때마다, 결과를 출력한다.
 * point : 못품 ...
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "9. 구현/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [m, ...arr] = input;
operation = arr.map((item) => item.split(" "));

function solution(m, operation) {
  let list = new Set();
  for (let i = 0; i < m; i++) {
    const [order, number] = operation[i];
    console.log(order, number);
    if (order === "add") {
      list.add(number);
    } else if (order === "remove" && list.includes(number)) {
      list.delete(number);
    } else if (order === "all") {
    }
  }
}
solution(m, operation);
