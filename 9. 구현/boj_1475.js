/**
 * 1475 [방 번호]
 *
 * 입력 : 방 번호 N
 * 출력 : 필요한 세트의 개수
 * point : 못품 ...
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "9. 구현/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const num = String(input);

function solution(num) {
  let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let count = 0;

  for (i of num) {
    if (i === "9" || i === "6") {
      count += 1;
      if (count % 2 !== 0) {
        numbers[6] += 1;
      }
    } else {
      numbers[i] += 1;
    }
  }
  console.log(Math.max(...numbers));
}
solution(num);
