import grewStore, { _nameLower } from '~/store/grew';
import _cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
describe('store/grew.js', () => {
  let store;
  let mockPayload;
  beforeEach(() => {
    store = _cloneDeep(grewStore);
    store.state = store.state();

    store.commit = (name, payload) => {
      store.mutations[name](store.state, payload);
    };

    store.dispatch = (name, payload) => {
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch,
      };
      return store.actions[name](context, payload);
    };

    mockPayload = [
      {
        id: 1,
        name: '고고',
        nickname: '기기',
        nicknameEng: 'gigi',
        image: 'src',
        belongsTo: '어딘가',
        slogan: '잘 살아보세',
      },
      {
        id: 2,
        name: '가가',
        nickname: '라라',
        nicknameEng: 'lala',
        image: 'src',
        belongsTo: 'ggg',
        slogan: '잘 살아봅세',
      },
    ];
  });

  describe('===== mutations =====', () => {
    describe('updateState', () => {
      test('state 를 갱신할 수 있어야 합니다', () => {
        const msg = '에러 메시지를 출력해보자!';
        store.commit('updateState', {
          grews: [...mockPayload],
          message: msg,
        });
        expect(store.state.grews).toEqual(mockPayload);
        expect(store.state.message).toBe(msg);
      });
    });

    describe('resetGrews', () => {
      test('state 를 초기 상태로 리셋해야 합니다', () => {
        store.commit('updateState', {
          grews: [...mockPayload],
        });
        store.commit('resetGrews');
        expect(store.state.grews).toEqual([]);
        expect(store.state.message).toBe('Search for the grew!');
        expect(store.state.loading).toBe(false);
      });
    });
  });

  describe('===== actions =====', () => {
    describe('_nameLower', () => {
      test('내용을 받았을 때 대문자로 받은 내용들을 모두 변경합니다.', () => {
        const grewName = 'LIEBE';
        expect(_nameLower(grewName)).toBe('liebe');
      });
    });

    describe('searchGrew', () => {
      // ! 비동기 성공 테스트
      test('그루 정보를 잘 가져온 경우 받은 데이터를 grews 상태에 업데이트 해야합니다', async () => {
        const res = {
          data: mockPayload,
        };
        axios.get = jest.fn().mockResolvedValue(res);
        await store.dispatch('searchGrew');
        expect(store.state.grews).toEqual(mockPayload);
      });

      test('그루 정보를 가져오지 못한 경우 서버에서 받은 메시지를 message 상태에 업데이트 해야합니다', async () => {
        const errorMessage = 'Network Error';
        axios.get = jest.fn().mockRejectedValue({
          response: {
            data: errorMessage,
          },
        });
        await store.dispatch('searchGrew');
        expect(store.state.message).toBe(errorMessage);
      });
    });
    describe('searchGrewId', () => {
      test('id 값으로 그루의 정보를 잘 가져온 경우, 받은 데이터를 grews 상태에 업데이트 해야 합니다 ', async () => {
        const res = {
          data: mockPayload,
        };

        axios.get = jest.fn().mockResolvedValue(res);
        await store.dispatch('searchGrewId');
        expect(store.state.searchedGrew).toEqual(res.data);
      });
    });
  });
});
