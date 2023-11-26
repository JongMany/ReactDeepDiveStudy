function is(x: any, y: any) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

// Object.is가 있으면 사용 없으면 is 함수 사용 => Object.is의 폴리필을 만듦
const objectIs: (x: any, y: any) => boolean =
  typeof Object.is === 'function' ? Object.is : is;


export default objectIs;