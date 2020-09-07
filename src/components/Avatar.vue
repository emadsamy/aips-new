<template>
  <img :src="src ? src : avatar" class="img-fluid" :alt="title ? title : userName" />
</template>

<script>
export default {
  name: 'Avatar',
  props: ['src', 'userName'],
  data() {
    return {
      avatar: '',
      userName: ''
    }
  },
  created() {
    this.avatar = localStorage.getItem('user_image');
    this.userName = localStorage.getItem('user_name');
  }
}
</script>

<style scoped>
img {
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
