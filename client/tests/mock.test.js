import axios from 'axios';
import * as mockTest from './mock';

describe('mock 테스트', () => {
  test('spyOn', async () => {
    jest.spyOn(mockTest, 'mockFn').mockResolvedValue('6 second!');

    const res = await mockTest.mockFn();
    expect(res).toBe('6 second!');
    expect(mockTest.mockFn).toHaveBeenCalled();
    expect(mockTest.mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('axios 테스트', () => {
  test('영화 제목 변환', async () => {
    axios.get = jest.fn(() => {
      return new Promise((resolve) => {
        resolve({
          data: {
            Title: 'Frozen II',
          },
        });
      });
    });

    const title = await mockTest.fetchMovieTitle();
    expect(title).toBe('Frozen ii');
  });
});
