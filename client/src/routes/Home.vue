<template>
  <div>
    <HeadLine />
    <Search />
    <GrewList />
  </div>
</template>

<script>
import HeadLine from '~/components/HeadLine';
import Search from '~/components/Search';
import GrewList from '~/components/GrewList';
export default {
  components: {
    HeadLine,
    Search,
    GrewList,
  },
  created() {
    this.$store.commit('grew/resetGrews');
  },
};
</script>
