/**
 * 클로저: 함수와 함수가 선언된 어휘적 환경의 조합
 * 선언된 어휘적 환경: 변수가 코드 내부에서 어디서 선언되었는지
 */

// setState와 동일한 원리
function Counter() {
  let counter = 0;

  return {
    increase: function () {
      return ++counter;
    },
    decrease: function () {
      return --counter;
    },
    counter: function () {
      return counter;
    },
  };
}

const c = Counter();

c.increase();
c.increase();

// 클로저를 사용하는 데는 비용이 듦 => 선언적 환경을 기억해야 하므로
const aBtn = document.getElementById('a')!;

function heavyJob() {
  const longArr = Array.from({ length: 1000000 }, (_, i) => i + 1);
  console.log(longArr.length);
}
aBtn.addEventListener('click', heavyJob);

const bBtn = document.getElementById('b')!;

function heavyJobWithClosure() {
  const longArr = Array.from({ length: 1000000 }, (_, i) => i + 1);
  return () => {
    console.log(longArr.length);
  };
}
const innerFn = heavyJobWithClosure();
bBtn.addEventListener('click', () => innerFn());
