<template>
  <RouterLink
    to="/"
    class="logo">
    <img src="https://www.gridwiz.com/_nuxt/img/a112497.svg" />
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  img {
    width: 10rem;
  }

}
</style>
