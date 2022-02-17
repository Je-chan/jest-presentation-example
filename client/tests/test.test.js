import { mount } from '@vue/test-utils';
import Test from './Test.vue';

test('메시지 변경', async () => {
  const wrapper = mount(Test);
  expect(wrapper.vm.msg).toBe('good');
  // 아래와 같이 바로 값을 넣어주게 되면 반응성이 없음.
  // wrapper.vm.msg = 'Hello?';
  await wrapper.setData({
    msg: 'Hello?',
  });
  expect(wrapper.vm.msg).toBe('Hello?');
  // 컴포넌트 내부의 div 태그가 잘 나오는지 확인할 수 있음
  expect(wrapper.find('div').text()).toBe('Hello?');
});
