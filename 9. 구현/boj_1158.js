/**
 * 1158 [요세푸스 순열]
 * 2024.03.21.목
 * https://www.acmicpc.net/problem/1158
 *
 * 입력 : 사람 수 n / 제거할 사람 번호 k
 * 출력 : 요세푸스 순열
 * point : 큐를 활용하기
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "9. 구현/Input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ");
const queue = [];
const answer = [];

function solution(n, k) {
  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }
  let count = 1;
  while (queue.length) {
    const item = queue.shift();

    if (count % k === 0) {
      answer.push(item);
    } else {
      queue.push(item);
    }
    count++;
  }
  console.log(`<${answer.join(", ")}>`);
}
solution(n, k);
