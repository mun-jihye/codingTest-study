/**
 * 11725 [트리의 부모 찾기]
 * 2024.02.16
 * https://www.acmicpc.net/problem/11725
 *
 * 입력 : 노드의 개수 N / N-1개의 줄에 트리 상에서 연결된 두 정점
 * 출력 : 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력
 * point :
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "9. 구현/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [n, ...arr] = input;
arr = arr.map((item) => item.split(" ").map(Number));
let answer = "";

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const priorities = arr[i + 1];
  let prior = arr[i][1];
  while (true) {
    const max = Math.max(...priorities);
    const number = priorities.shift();
    if (number === max) {
      count++;
      if (prior === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      priorities.push(number);
    }
    if (prior === 0) {
      prior = priorities.length - 1;
    } else {
      prior--;
    }
  }
}

console.log(answer);
