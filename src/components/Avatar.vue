<template>
  <img :src="avatar" class="img-fluid" :alt="title" />
</template>

<script>
export default {
  name: 'Avatar',
  data() {
    return {
      avatar: '',
      title: ''
    }
  },
  created() {
    this.avatar = localStorage.getItem('user_image');
    this.title = localStorage.getItem('user_name');
  }
}
</script>

<style scoped>
img {
  width: 35px;
  border-radius: 50%;
}
</style>
