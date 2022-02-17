<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'good',
    };
  },

  mounted() {
    console.log(this.msg);
  },
};
</script>
