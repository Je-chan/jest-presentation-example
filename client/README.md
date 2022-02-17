# 1. 플러그인

- $translate 를 이용해 등록해서 플러그인으로 사용할 수 있다.
- $store, $route, $router 도 일종의 플러그인
- main.js 에서 use 를 통해 플러그인을 사용할 수 있도록 지원한다.
- 플러그인을 사용하는 경우는 보통 자주 사용하는 기능(함수) 등을 저장하기 위한 것

# 2. sass-loader github

- options 에서 additionalData 를 이용해 매번 @import 로 scss 를 불러오지 않아도 필요한 데이터를 받아올 수 있다

# 3. Vuex

- store 를 만들어서 모듈들을 관리하는 용도로 사용한다
- state 는 data 처럼 사용하는 사용
- getters 는 computed 처럼 사용되어 state 를 계산된 형태로 사용
  - state 에서 데이터를 가지고 와서 활용만 하는 역할
- mutations 는 methods 에서 state 를 변경하는 로직으로 사용
  - state 에서 데이터를 가지고 와서 직접적인 수정가지도 가능
- actions 는 methods 에서 state 를 변경하지 않는 로직들을 사용
  - state, getters, mutations 들을 가져와서 사용할 수 있음
  - 첫 번째 인자로 받는 context 객체 내부에는 state, getters, commits (mutations), dispatch (actions) 가 존재한다
- Vue 컴포넌트에서 사용할 때는
  - $store.state.모듈명.state명
  - $store.getters['모듈몀/getters명']
  - $store.commit('모둘명/mutatios명')
  - $store.dispatch('모둘명/actions명')
- Vuex helpers

  - mapState, mapGetters 는 computed 에서 사용
  - mapMutations, mapActions 는 method 에서 사용

# 4. Vue Router

- scrollBehavior 를 이용하면 라우팅 했을 때, 스크롤의 위치를 지정할 수 있다.
- RouterView : 변경하는 페이지가 출력될 영역을 의미.
- RouterLink : 페이지 이동을 위한 링크 컴포넌트.

- this.$route : Route(페이지) 정보를 가지는 객체.
  - 속성을 갖고 있어 데이터를 조회
  - fullPath 는 접근된 페이지에 대한 전체 경로
  - params 는 접근된 페이지의 params 에 대한 정보를 지님
- this.$router : Route 를 조작하기 위한 객체
  - 메소드를 갖고 있어서 동작을 일으키는 용도
  - push 를 이용해서 페이지를 이동하는 동작을 만듦
- 더 자세한 내용은 공식문서
  - https://next.router.vuejs.org/api/

# 5. SPA 의 개념

- 전통적인 웹 애플리케이션은 데이터를 요청할 때마다 새롭게 페이지를 로드했다.
- SPA 는 별도의 페이지 로드 없이 데이터를 요청한다.

  - 기존에 존재하던 것과 다른 부분만을 서버에 요청한다 (AJAX 요청)
  - 새롭게 바뀐 데이터만 렌더링하는 방식

- 장점

  1. 빠르고 자연스러운 전환으로 사용자에게 더 나은 경험을 제공한다
  2. 더 적게 요청해서 빠른 렌더링이 가능하다
  3. 컴포넌트 단위로 개발해서 생산성을 향상시킬 수 있다
  4. 분업화가 쉬워진다. 프론트엔드는 프론트엔드로, 백엔드는 백엔드로

- 단점
  1. 최초 로딩이 느리다.
  - 하나의 페이지, index.html 로 동작을 하므로 초반에 가져와야할 데이터가 비교적 많아진다
  - 밑의 두 가지로 개선할 수 있음
    - Lazy Loading(지금 당장 화면에 보이지 않는 컨텐츠는 최대한 늦게 가져와서 보여주고, 당장 보여야할 컨텐츠는 빠르게 보일 수 있도록 하는 것)
    - 브라우저 캐싱
  2. 검색 엔진을 최적화하기가 어렵다.
  - 여러 사이트들의 목록에 들어가려면 SEO 작업이 필요한다
  - 하나의 index.html 밖에 없으므로 세부적으로 분리된 페이지에 대한 상세 정보를 가지고 가기 어려워진다.
  - 개선할 수 있는 방법
    - SSR, Severless Functions
  - 모든 파일이 사용자에게 넘어가서 사용자 브라우저에서 동작하는 것이므로 보안상 취약할 수 있다
    - 중요한 정보들이 사이트에 포함된다면 데이터 노출이 될 수 있기 떄문
    - 비즈니스 로직을 최대한 작성하지 않는 것이 좋다

# 6. Jest

1. 전역 함수 (Globals)

- beforeAll : 모든 테스트가 시작하기 전에 한 번만 작동
- beforeEach : 각각의 테스트가 시작하기 전에 작동하는 함수
- afterEach: 각각의 테스타가 동작한 이후에 작동하는 함수
- afterAll : 모든 테스트 다음에 한 번만 작동하는 함수

2. Matchers (일치 도구)

- toBe() : 원시형 데이터들을 다룰 때 사용한다.
- toEqual() : 참조형 데이터들을 다룰 때 사용한다. 재귀를 통해 속성을 돌고, 그 값이 일치한지 확인.
- not : 반대 값을 매칭하는 것
- resolves, rejects : 비동기를 처리할 때 사용하는 것

3. 비동기 테스트

- 만약 비동기 테스트를 진행하는데 로직이 완료될 때까지 기다리는 것이 초점이 아니라, 반환되는 내용이 초점이라면?
- 단위 테스트는 최소한의 단위를 테스트 하는 것이기 때문에 시간이 걸리는 로직을 단순화해야하고, 그것이 모의함수.
  - 모의라는 건 모의고사에서 사용되는 단어
  - mockUp 에서 사용하는 mock.
  - 실제로 실행해야 하는 함수를 가짜로 만들어서 사용한다는 개념이다.
- 중요한 것은 데이터를 가져오는 것이 아니다. 그 로직을 테스트할 필요는 없음
  - 데이터를 받는 것을 가짜로 만들어주고 정상적으로 동작하고 원하는 결과가 나오는지를 확인하는 것
  - 그때도 모의함수, mock 을 만들어 낸다.
  - 만약 서버 요청으로 데이터를 받아 데이터를 수정하는 로직에서 ㄷ 받아오지 못한다면 로직과는 상관 없는 외부 요인에 의해서 테스트가 실패할 수 있다.
  - 테스트의 외부 요인을 완전히 제거하기 위해서 모의 함수를 이용해 axios.get(메소드는 그때마다 다를 것) 네트워크와는 상관 없는 데이터를 가지고 온다.
  - 핵심은 비동기 테스트를 할 때 검증해야 하는 핵심 로직이 아니라 외부 요인에 의해서 테스트가 실패하지 않도록 하기 위해 모의함수를 만든다.
  - 꼭 모의함수를 만들지 않아도 되지만 신뢰도가 높고, 가볍고 빠른 테스트를 만들기 위해서 불필요한 부분을 가짜로

4. Vue Test Utils

- vue 컴포넌트를 테스트 하기 위해서는 컴포넌트와 테스트를 연결이 필요하다 (단순한 자바스크립트 코드가 아니기 때문)
- 이를 위해서 Vue test Utils 가 존재하는 것

```jsx

// 예시 코드
<template>
  <span>Count: {count}</span>
</template>

<scirpt>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    }
  }
}
</script>
```

```jsx
import { mount } from '@vue/test-utils';
import Component from './Component.vue';

test('props', () => {
  const wrapper = mount(Component, {
    props: {
      count: 5,
    },
  });

  expect(wrapper.html()).toContain('Count: 5');
});
```

- https://next.vue-test-utils.vuejs.org/api/

- mount : 마운트가 된 다음에 테스트를 적용. 첫 번째 인자로는 컴포넌트를 담아내고, 두 번째 인자로는 여러 메소드를 사용할 수 있다.

  - attrs : 특정 컴포넌트에 속성을 부여할 수 있다.
  - data : vue 에서 사용하는 data 와 동일하게 사용할 수 있다.
  - props: 마찬가지로 vue 에서 사용하는 방식과 동일하게 사용할 수 있다.

- shallowMount : stub 된 태그를 가져온다. 특정한 컴포넌트에 연결된 다른 컴포넌트들은 stub 로 연결한다.

  - 하나의 컴포넌트만 테스트하기에 유용하다.
  - 자식 컴포넌트들은 stub 로 가짜로 연결된 척만 하는 것. 실질적으로 렌더링하는 건 shallowMount 된 것만.
  - 일반적인 경우 이게 더 유용하고 권장되는 사항이다.

- wrapper 에 mount, shallowMount 된 컴포넌트 객체를 담는다.

  - 밑에는 wrapper 에서 사용할 수 있는 속성(vm)과 메소드들(vm 제외 모두)
  - vm : 컴포넌트 내부에서 사용하는 this 와 동일하다. vue model 의 약자. wrapper 객체에서 컴포넌트 내부에 있는 data 나 메소드를 사용할 때 this 키워드 대신에 사용한다.
  - find : HTML 요소를 찾는데 사용한다. 태그명으로 찾을 수 있고 속성 선택자를 통해서 그 속성을 갖고 있는 요소를 찾아낸다. 만약 값이 존재한다면 DOMWrapper 라는 객체로 반환하고 반환된 내용은 다시 메소드 체이닝을 걸 수 있다.
  - setData : 반응성을 유지한 상태로 데이터를 테스트 파일 내부에서 갱신을 할 수 있다. Promise 로 반환한다. 데이터를 수정하고 반응성을 가질 때까지 기다린다.
  - html : html 코드를 가져온다.
  - attributes : 해당하는 컴포넌트에서 얻고 싶은 attirbutes 의 값을 추출할 수 있다. (id 나 class 값)
  - exists : 그 html 요소가 존재하는지 찾아내는 것
  - unmount : 가끔씩 테스트를 할 때는 Mount 연결을 해제해야 할 때가 있다. 연결된 컴포넌트를 해제할 때 사용한다. 마운트될 때 데이터가 오염되는 경우를 대비하는 것
