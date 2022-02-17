<template>
  <div class="container">
    <div
      :class="{ 'no-result': !grews.length }"
      class="inner">
      <Loader
        class="loading"
        v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="grews">
        <GrewInfo
          v-for="grew in grews"
          :key="grew.id"
          :grew="grew" />
      </div>
    </div>
  </div>
</template>
<script>
import GrewInfo from '~/components/GrewInfo';
import Loader from '~/components/Loader';
import { mapState } from 'vuex';
export default {
  components: {
    GrewInfo,
    Loader,
  },

  computed: {
    ...mapState('grew', ['grews', 'message', 'loading']),

  //여기서 알아야할 사실은 처음 마운트 되었을 때 (페이지가 최초 렌더링 되었을 때), state는 undifined라는 것이다.
// state는 비동기로 동작한다. 따라서 다른 작업(예를 들면 페이지를 그리는 작업)이 끝난 후에 동작하며, 처음엔 아무 값도 없다.
// 아직 값이 담기지 않은 state를 사용하기 때문에 당연히 값을 읽을 수 없다는 오류가 출력되는 것이다.
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .grews {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
