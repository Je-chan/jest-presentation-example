import axios from 'axios';
import _upperFirst from 'lodash/upperFirst';
import _toLower from 'lodash/toLower';

export function mockFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('6 second!');
    }, 6000);
  });
}

export async function fetchMovieTitle() {
  const res = await axios.get(
    'https://omdbapi.com?apikey=7035c60c&i=tt4520988'
  );
  return _upperFirst(_toLower(res.data.Title)); // Frozen II 가 전달받은 데이터고 함수 로직에 의해 Frozen ii 로 응답받을 것.
}
