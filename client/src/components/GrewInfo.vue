<template>
  <RouterLink
    :to="`/grew/${grew.id}`"
    class="grew"
    :style="{ backgroundImage: `url(${grew.image})` }">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="nicknameEng">
        {{ grew.nicknameEng }}
      </div>
      <div class="title">
        {{ grew.slogan }}
      </div>
    </div>
  </RouterLink>
</template>
<script>
import Loader from '~/components/Loader';

export default {
  props: {
    grew: {
      type: Object,
      default: () => ({}),
    },
  },

  components: {
    Loader,
  },

  data() {
    return {
      imageLoading: true,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const image = this.grew.image;
      if (!image || image === 'N/A') {
        this.imageLoading = false;
      } else {
        await this.$loadImage(this.grew.image);
        this.imageLoading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.grew {
  $width: 200px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid #b2d57c;
  }
  .info {
    background-color: rgba($black, 0.3);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    .nicknameEng {
      color: #b2d57c;
    }
    .title {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
