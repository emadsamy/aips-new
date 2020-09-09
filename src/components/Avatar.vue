<template>
  <img :src="src ? src : avatar" class="img-fluid" :alt="title ? title : first_name" />
</template>

<script>
import axios from 'axios';
export default {
  name: 'Avatar',
  props: ['src', 'userName'],
  data() {
    return {
      accessToken: '',
      avatar: '',
      first_name: '',
      data: []
    }
  },
  methods: {
    fetchUserData() {
      const options = {
          url: window.baseURL + "/myProfile",
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
      };

      axios(options)
        .then((res) => {
          const data = res.data.row;
          this.first_name = data.first_name;
          // this.last_name = data.last_name;
          // this.mobile = data.mobile;
          // this.company = data.company;
          // this.country = data.country;
          // this.website = data.website;
          this.avatar = data.avatar;
          this.data = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    this.accessToken = localStorage.getItem('access_token');
    this.fetchUserData();
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
