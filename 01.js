const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNum = [];
for (let i = 0; i < Infinity; i++) {
  const random_Num = Math.floor(Math.random() * 10);
  if (!randomNum.includes(random_Num)) {
    if (randomNum.length === 3) break;
    randomNum.push(random_Num);
  }
}
console.log(randomNum);

let s = 0;
let b = 0;
let treidCnt = 1;
let finalCnt = 0;

function baseballGame(num) {
  console.log(num);
  console.log(typeof num);
  let inputNum = num.split('').map(Number);
  console.log(randomNum);

  treidCnt++;
  finalCnt++;

  if (inputNum.length === 3 && inputNum.every((n) => Number.isInteger(n))) {
    randomNum.forEach((n, idx) => {
      inputNum.forEach((n2, idx2) => {
        if (n === n2) {
          if (idx === idx2) {
            s++;
          } else {
            b++;
          }
        }
      });
    });
    if (s === 3) {
      console.log(`${finalCnt}번만에 맞히셨습니다!
    게임을 종료합니다!
    `);
      rl.close();
    } else {
      console.log(`${s}s${b}b`);
      s = 0;
      b = 0;
      rl.question(treidCnt + '번 째 시도', function (num) {
        baseballGame(num);
      });
    }
  } else {
    console.log(`세자리 수를 입력해주세요`);
    rl.question(treidCnt + '번 째 시도', function (num) {
      baseballGame(num);
    });
  }
}

rl.question(treidCnt + '번 째 시도', function (num) {
  baseballGame(num);
});
