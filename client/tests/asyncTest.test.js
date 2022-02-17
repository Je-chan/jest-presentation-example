import { asyncFunction, sixWaitFn } from './asyncTest';

describe('비동기 테스트', () => {
  // ! 일반적인 방식으로 사용하게 된다면 테스트 입장에서는 언제까지 기다려야 하는지 모르므로 바로 통과를 시켜버린다.
  // test('done', () => {
  //   asyncFunction().then((res) => {
  //     expect(res).toBe('Done?');
  //   });
  // });

  // * 제공되는 done 을 이용하면 테스트가 통과되는 것을 확인할 수 있다.
  test('done', (done) => {
    asyncFunction().then((res) => {
      expect(res).toBe('.5 second!');
      done();
    });
  });

  // 리턴을 이용해서 반환을 시키면 테스트 환경에서는 비동기로 동작한다는 것을 인지한다.
  test('then', () => {
    return asyncFunction().then((res) => {
      // expect(res).toBe('Done?');
      expect(res).toBe('.5 second!');
    });
  });

  test('resolves', () => {
    return expect(asyncFunction()).resolves.toBe('.5 second!');
  });

  test('async/await', async () => {
    const res = await asyncFunction();
    expect(res).toBe('.5 second!');
  });

  // 테스트는 5초 동안만 기다린다
  // 5초가 지나도 비동기가 종료되지 않으면 테스트 코드를 수정하는 게 세 번째 인수로 test 코드가 기다릴 수 있는 시간을 작성할 수 있다.

  test('wait 7 second', async () => {
    const res = await sixWaitFn();
    expect(res).toBe('6 second!');
  }, 7000);
});
