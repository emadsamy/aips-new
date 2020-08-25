<template>
  <div id="searchContainer" class="fluid-search">
      <div class="search-container-content">
        <div class="search-navbar">
            <div class="big-logo-box">
                <a href="#" class="big-logo">
                    <img src="../assets/big-logo.svg" alt="Big Logo" />
                </a>
            </div>
        </div>

        <div class="search-container">
            <div class="container-fluid">
                <div class="search-content">
                    <div class="title">
                        What are you <br /> looking for?
                    </div>
                    <div class="search-input d-flex">
                        <input type="search" name="search" placeholder="Start Searching.. " />
                        <div class="icon-search icon"></div>
                    </div>
                    <div class="search-links">
                        <div class="search-link">
                            <a href="#" class="link active">Popular Searches</a>
                        </div>

                        <div class="search-link" v-for="(search, index) in popularSearch" :key="index">
                            <router-link :to="'/' + search.slug" class="link">
                              {{ search.title }}
                              <small v-if="search.title == 'Membership'">Become a Member </small>
                              <small v-else-if="search.title == 'My Certificate'">Verify your certificate</small>
                              <span class="icon-back"></span>
                            </router-link>
                        </div>

                        <!-- <div class="search-link">
                            <a href="#" class="link">I am Instructor  <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">I am Instructor  <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">Membership <small>Become a Member </small> <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">Training Center <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">Programs  & Certifications <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">My Certificate <small>Verify your certificate </small> <span class="icon-back"></span></a>
                        </div>

                        <div class="search-link">
                            <a href="#" class="link">About AIPS <span class="icon-back"></span></a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="search-footer">
          <div class="container-fluid">
            <footer class="footer">
                <div class="footer-copyright d-flex">
                    <div class="mr-3">American  Institute of Professional Studies </div>
                    <div>2021 All Rights Reserved  © AIPS</div>
                </div>
                <div class="footer-social">
                    <div class="text">Follow Us</div>
                    <a class="facebook-icon social-icon" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="youtube-icon social-icon" href="#"><i class="fab fa-youtube"></i></a>
                    <a class="linkedin-icon social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="facebook-icon social-icon" href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </footer>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.fluid-search {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFF;
  z-index: 29;
  width: 100%;
  height: 100%;
  display: block; }

.fluid-search.active {
  display: block !important; }

.search-navbar {
  padding-left: 50px;
  padding-top: 20px; }

.search-container {
  min-height: calc(100% - 171px); }

.search-content {
  width: 700px;
  margin-left: auto;
  margin-right: auto; }
  .search-content .title {
    position: relative;
    line-height: 1.1;
    font-size: 60px;
    font-weight: bolder;
    color: #1B1464;
    padding-top: 25px; }
    .search-content .title:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      top: 0;
      width: 170px;
      height: 6px;
      background-color: #C9DD5D; }

.search-input {
  width: 100%;
  border: 1px solid #707070;
  border-radius: 50px;
  margin: 45px 0 25px;
  padding: 10px 10px 10px 20px; }
  .search-input input {
    width: calc(100% - 40px); }
  .search-input .icon-search {
    width: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px; }
    .search-input .icon-search:before {
      color: #737077; }

.search-links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; }

.search-link {
  width: 47%; }
  .search-link:first-of-type {
    width: 100%; }
  .search-link .link {
    border-bottom: 1px solid #00000016;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 18px !important;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 17px;
    font-weight: 600;
    color: #6E6D76; }
    .search-link .link:hover {
      color: #1B1464; }
      .search-link .link:hover .icon-back:before {
        color: #1B1464; }
    .search-link .link small {
      font-size: 13px;
      color: #636365;
      margin-right: 10px;
      margin-left: auto; }
  .search-link a.active {
    color: #1B1464; }
  .search-link .icon-back:before {
    position: relative;
    color: #848293;
    font-size: 25px;
    font-weight: 600; }
.search-container-content {
  height: 100%;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  components: {

  },
  data(){
      return {
          searchToggle: false,
          popularSearch: []
      }
  },
  created() {
    // Get Linkss
    axios.get(window.baseURL + '/popularSearch')
      .then(res => {
        var data = res.data.rows;
        console.log(data);
        this.popularSearch = res.data.rows;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
