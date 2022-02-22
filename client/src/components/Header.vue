<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          class="nav-link"
          active-class="active"
          :class="{ active: isMatch(nav.path) }">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      @click="toAbout"
      class="user">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>
<script>
import Logo from '~/components/Logo';
import { mapState } from 'vuex';
import axios from 'axios'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Grew Info',
          href: '/Info',
          path: /^\/grew/, //\movie
        },
        {
          name: 'Author',
          href: '/author',
        },
      ],
      test: []
    };
  },
  computed: {
    ...mapState('about', ['image', 'name']),
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      return path.test(this.$route.fullPath);
    },
    toAbout() {
      // router.push 는 어느 페이지로 넘어가라는 얘기
      this.$router.push('/author');
    },
  },

  async beforeMount() {
    const res = await _fetchGrewInfo({grewName: '리베', team: 'all'})
    this.test = [...res.data]
    console.log('after', this.test)
  },

  async mounted () {
      const res = await _fetchGrewInfo({grewName: '리베', team: 'all'})
    this.test = [...res.data]
    console.log('hey', this.test)
  },


};

const _fetchGrewInfo = (payload) => {
  const { grewName, team, id } = payload;
  const name = grewName && grewName.toLowerCase();
  const url = id
    ? `http://localhost:4000/grew-person/?id=${id}`
    : `http://localhost:4000/searching/?name=${name}&team=${team}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

</script>



<style lang="scss" scoped>
/* @import '~/scss/main'; */

header {
  position: relative;
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: 0.4s;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &:hover {
      background-color: darken($gray-200, 10%);
    }
  }
  // bootstrap 문법
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>
