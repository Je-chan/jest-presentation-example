export default {
  // store 의 모듈이 될 수 있도록 namespaced 를 true 값으로 바꾸어 준다.
  namespaced: true,
  // 참조형 데이터는 데이터의 불변성을 유지하기 위해 함수로 만들어서 반환을 해줘야 한다.
  state: () => ({
    name: 'Je',
    email: 'jkyyc3@gmail.com',
    blog: 'https://je-developing.tistory.com/',
    phone: 'Please contact me with email',
    image: 'https://avatars.githubusercontent.com/u/81739782?v=4',
  }),
};
