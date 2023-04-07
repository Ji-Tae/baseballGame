// 터미널에 노드를 실행 할 때 입력창을 만드는 코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//렌덤 숫자를 만드는 구문
const randomNum = [];
for (let i = 0; i < Infinity; i++) {
  const random_Num = Math.floor(Math.random() * 10);
  if (!randomNum.includes(random_Num)) {
    if (randomNum.length === 3) break;
    randomNum.push(random_Num);
  }
}
// 콘솔창에 임의의 숫자를 띄우기위한 콘솔로그
console.log(randomNum);

// 인덱스와 값이 같으면 올라가는 카운트
let s = 0;

//인덱스는 같지 않지만 입력한 값이 존재하면 올라가는 카운트
let b = 0;

//시도 횟수
let treidCnt = 1;

//정답까지 시도된 최종 횟수
let finalCnt = 0;

// 임의의 숫자와 입력창에 입력한 숫자를 비교하는 구문
function baseballGame(num) {
  let inputNum = num.split('').map(Number);

  treidCnt++;
  finalCnt++;

  if (inputNum.length === 3 && inputNum.every((n) => Number.isInteger(n))) {
    //map 을이용한 중첩
    randomNum.map((n, idx) => {
      inputNum.map((n2, idx2) => {
        if (n === n2) {
          if (idx === idx2) {
            s++;
          } else {
            b++;
          }
        }
      });
    });

    // for를 이용한 중첩
    // for(let i = 0; i < randomNum.length ; i++){
    //   for(let j = 0; j < inputNum.length ; j++){
    //     if (i === j){
    //       if(randomNum[i]===inputNum[j]){
    //         s++
    //       }else{
    //         b++
    //       }
    //     }
    //     }
    //   }
    // }

    // forEach를 이용한 중첩
    // randomNum.forEach((n, idx) => {
    //   inputNum.forEach((n2, idx2) => {
    //     if (n === n2) {
    //       if (idx === idx2) {
    //         s++;
    //       } else {
    //         b++;
    //       }
    //     }
    //   });
    // });

    // 숫자와 인덱스 모두 맞추었을 때
    if (s === 3) {
      console.log(`${finalCnt}번만에 맞히셨습니다!
    게임을 종료합니다!
    `);
      rl.close();
    } else {
      //숫자만 맞췄을 때
      console.log(`${s}s${b}b`);
      s = 0;
      b = 0;
      rl.question(treidCnt + '번 째 시도', function (num) {
        baseballGame(num);
      });
    }
  } else {
    //숫자를 잘 못 입력 했을 때
    console.log(`세자리 수를 입력해주세요`);
    rl.question(treidCnt + '번 째 시도', function (num) {
      baseballGame(num);
    });
  }
}

//콘솔창에 숫자를 입력하기 위해 실행되는 함수
rl.question(treidCnt + '번 째 시도', function (num) {
  baseballGame(num);
});
