import is from './objectIs';

// 주어진 객체의 키를 순회하면서 두 값이 엄격한 동등성을 가지는지 확인
type Mixed = {
  [key: string]: any;
};

// 객체 간의 비교도 추가
function shallowEqual(objA: Mixed, objB: Mixed): boolean {
  if (is(objA, objB)) return true;

  // null 또는 원시값
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 키 개수가 다르면 false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // A 키 B에 같은 키가 있는지, 그 값이 같은지 확인
  for (const key of keysA) {
    if (!objB.hasOwnProperty(key) || !is(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}

export default shallowEqual;

// 리액트의 비교는 얕은 비교! => 성능 평가, 렌더링 최적화를 위해서 이를 고려해야 함