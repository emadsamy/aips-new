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

      <div class="search-navbar-sm">
        <Navbar />
      </div>

      <div class="search-container">
        <div class="container-fluid">
          <div class="search-content">
            <div class="title">
              What are you
              <br />looking for?
            </div>
            <div class="search-input d-flex">
              <input
                @keyup="searchChange()"
                v-model="search"
                type="search"
                placeholder="Start Searching.. "
              />
              <div class="icon-search icon"></div>
              <div v-if="searchOutput" class="search-output">
                <div class="search-output-content">
                  <div v-for="(item, index) in filteredItems" :key="index">
                    <a :href="$router.resolve({name: 'Program', params: {slug: item.slug } }).href" class="search-link-dropdown">{{item.title}}</a>
                  </div>

                  <div v-for="(page, index) in pages" :key="index + 2">
                    <a :href="$router.resolve({name: 'popular-search-show', params: {slug: page.pageSlug }}).href" class="search-link-dropdown">
                      {{page.title}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="search-links">
              <div class="search-link">
                <a href="#" class="link active">Popular Searches</a>
              </div>

              <div class="search-link" v-for="(search, index) in links" :key="index">
                <router-link :to="{name: 'popular-search-show', params:{slug: search.slug}}" class="link">
                  {{ search.title }}
                  <small v-if="search.title == 'Membership'">Become a Member</small>
                  <small v-else-if="search.title == 'My Certificate'">Verify your certificate</small>
                  <span class="icon-back"></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="search-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fluid-search {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 29;
  width: 100%;
  height: 100%;
  display: block;
}
.search-navbar-sm {
  display: none;
}
.fluid-search.active {
  display: block !important;
}

.search-navbar {
  padding-left: 50px;
  padding-top: 20px;
}

.search-container {
  min-height: calc(100% - 175px);
}

.search-content {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.search-content .title {
  position: relative;
  line-height: 1.1;
  font-size: 60px;
  font-weight: bolder;
  color: #1b1464;
  padding-top: 25px;
}
.search-content .title:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  top: 0;
  width: 170px;
  height: 6px;
  background-color: #c9dd5d;
}

.search-input {
  width: 100%;
  border: 1px solid #707070;
  border-radius: 50px;
  margin: 45px 0 25px;
  padding: 10px 10px 10px 20px;
  position: relative;
}
.search-output {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* min-height: 130px; */
  /* background: #fff; */
  top: 51px;
  z-index: 39;
}
.search-output-content {
  background: #fff;
  padding: 5px 0;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  max-height: 290px;
  overflow-y: auto;
}
.search-link-dropdown {
  padding: 8px 15px;
  display: block;
  width: 100% !important;
  height: auto;
}
.search-link-dropdown:hover {
  background: #eee;
}
.search-link-dropdown:active {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.search-input input {
  width: calc(100% - 40px);
}
.search-input .icon-search {
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.search-input .icon-search:before {
  color: #737077;
}
.search-links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.search-link {
  width: 47%;
}
.search-link:first-of-type {
  width: 100%;
}
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
  color: #6e6d76;
}
.search-link .link:hover {
  color: #1b1464;
}
.search-link .link:hover .icon-back:before {
  color: #1b1464;
}
.search-link .link small {
  font-size: 13px;
  color: #636365;
  margin-right: 10px;
  margin-left: auto;
}
.search-link a.active {
  color: #1b1464;
}
.search-link .icon-back:before {
  position: relative;
  color: #848293;
  font-size: 25px;
  font-weight: 600;
}
.search-container-content {
  height: 100%;
}

.search-container-content {
  overflow: auto;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .search-content {
    width: 100%;
  }
  .search-navbar {
    display: none;
  }
  .search-navbar-sm {
    display: block;
  }
  .search-link {
    width: 100%;
  }
  .search-content .title {
    font-size: 41px;
  }
  .search-content .title:after {
    content: none;
  }
  .search-link:last-of-type {
    margin-bottom: 30px;
  }
  .search-input .icon-search {
    width: 35px;
    font-size: 30px;
  }
  .search-links {
    max-width: 350px;
    margin: 0 auto;
  }
  .search-container {
    min-height: calc(100vh - 130px);
  }
  .fluid-search {
    padding-top: 76.6px;
  }
  .search-container-content {
    height: 100%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .search-content {
    width: 100%;
  }
  .search-navbar {
    display: none;
  }
  .search-navbar-sm {
    display: block;
  }
  .search-content .title:after {
    content: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .search-navbar {
    display: none;
  }
  .search-navbar-sm {
    display: block;
  }
  .search-content .title:after {
    content: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

<script>
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "Search",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  data() {
    return {
      searchToggle: false,
      links: [],
      keyword: "",
      search: "",
      searchOutput: false,
      noResults: false,
      sectors: [],
      pages: [],
    };
  },
  methods: {
    searchChange: function () {
      if (this.search.length > 0) {
        this.searchOutput = true;
      } else {
        this.searchOutput = false;
      }
    },
    reloadPage() {
      // this.$router.reload();
      // location.reload();
      this.$router.go(this.$router.currentRoute);
    },
    fetchSectors: function () {
      // Search
      axios
        .get(window.baseURL + "/programs")
        .then((res) => {
          const data = res.data.rows[1].sectors;
          this.sectors = data;
          console.log(data);
          console.log(sectors);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchPages: function () {
      // Search
      axios
        .get(window.baseURL + "/search")
        .then((res) => {
          const data = res.data.rows;
          this.pages = data;
          console.log("search");
          console.log("search ", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchPopularSearchs: function () {
      axios
        .get(window.baseURL + "/popularSearch")
        .then((res) => {
          var data = res;
          console.log(data);
          this.links = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  computed: {
    filteredItems() {
      this.searchOutput = true;
      return this.sectors.filter((item) => {
        return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
  watch: {
    $route() {
      this.fetchSectors();
    },
  },
  created() {
    this.fetchSectors();
    this.fetchPages();
    this.fetchPopularSearchs();
  },
};
</script>
