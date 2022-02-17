import { shallowMount } from '@vue/test-utils';
import _cloneDeep from 'lodash/cloneDeep';
import cloneStore from '../../store';
import GrewList from '../GrewList.vue';
import grewStore from '../../store/grew';

describe('===== GrewList 컴포넌트 테스트 =====', () => {
  describe('Store 와 연동 테스트', () => {
    let store;
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(GrewList, {
        // 이걸 꼭 해주세요. 안 하면 큰일납니다.
        // plugin 으로 무엇을 사용할지를 명시하지 않으면 작동이 되지 않는다. store 를 부여하지 않기 때문
        global: {
          plugins: [cloneStore],
        },
      });
      store = _cloneDeep(grewStore);
      store.state = store.state();
      store.commit = (name, payload) => {
        store.mutations[name](store.state, payload);
      };
    });

    test('grew store 의 상태 loading 값이 false 이면 Loader 컴포넌트가 보여야 합니다.', () => {
      // Vue 컴포넌트에는 바로 접근할 수 없다. 클래스명을 부여해주도록 하자.
      store.commit('updateState', { loading: true });
      expect(wrapper.find('.loading').exists()).not.toBe(true);
    });
  });
});
