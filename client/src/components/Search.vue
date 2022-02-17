<template>
  <div class="container">
    <input
      type="text"
      v-model="grewName"
      class="form-control"
      placeholder="Write down a grew name!"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-model="$data[filter.name]"
        class="form-select">
        <option
          value="">
          All Teams
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grewName: '',
      team: '',
      number: 10,
      year: '',
      filter: 
        {
          name: 'team',
          items: ['개발 1팀', '개발 2팀', '개발 3팀', '개발 4팀'],
        },
      
    };
  },

  methods: {
    async apply() {
      
      this.$store.dispatch('grew/searchGrew', {
        grewName: this.grewName || 'all',
        team: this.team || 'all',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
    color: #fff;
  }
  @include media-breakpoint-down(lg) {
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
