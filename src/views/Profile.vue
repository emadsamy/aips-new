<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
            <div class="profile">
                <div class="row mb-4">
                    <div class="col-lg-3 col-md-4 pl-2">
                        <div class="profile-header">
                            <div class="user-head d-flex align-items-center">
                                <div class="avatar">
                                    <Avatar />
                                    <div class="upload-avatar-profile">
                                        <span class="icon-camera change-avatar">
                                            <input type="file" name="" value="" />
                                        </span>
                                    </div>
                                </div>
                                <div class="username">
                                    <div class="fullname text-capitalize">
                                        {{ firstName }} {{ lastName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 pr-2">
                        <div class="profile-welcome-msg d-flex align-items-center">
                            <div class="hello">
                                Welcome,
                            </div>
                            <div class="user-name text-capitalize">
                                {{ firstName }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <div id="profileTabs" class="profile-links nav nav-tabs">
                            <a href="#myInfo" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content active">
                              <span class="profile-link-text">My Profile</span>
                              <span class="icon-edit icon"></span>
                            </a>
                            <a href="#myCertificate" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">My Certificate</span>
                              <span class="icon-quality icon"></span>
                            </a>
                            <router-link to="/logout" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">Sign Out</span>
                              <span class="icon-logout icon"></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8">

                        <div class="profile-info">
                            <div class="profile-edit-head d-flex justify-content-between align-items-center">
                                <div id="tabTitle" class="title">
                                    My Profile
                                </div>
                                <button class="profile-edit-action d-flex justify-content-between align-items-center">
                                    <span class="edit-text">Edit</span>
                                    <span class="icon-edit icon"></span>
                                </button>
                            </div>
                            <div class="profile-form tab-content">
                                <!-- Profile Data -->
                                <div id="myInfo" class="profile-data tab-pane active">
                                    <form class="" action="index.html" method="post">
                                        <div class="form-group d-flex align-items-center">
                                            <label for="name" class="d-flex justify-content-between">Name<span>:</span></label>
                                            <div class="user-data text-capitalize">
                                                {{ firstName }} {{ lastName }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="phone" class="d-flex justify-content-between">Tel<span>:</span></label>
                                            <div class="user-data user-data-number">
                                                +96 66 55 44 11 22
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="company" class="d-flex justify-content-between">Company <span>:</span></label>
                                            <div class="user-data">
                                                24 Print
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="job" class="d-flex justify-content-between">Country <span>:</span></label>
                                            <div class="user-data">
                                                Art Director
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="website" class="d-flex justify-content-between">Website <span>:</span></label>
                                            <div class="user-data">
                                                Kaizens.com
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <!-- Profile Previous -->
                                <div id="myCertificate" class="profile-previous tab-pane">
                                    <div class="certificatesOrders">
                                        <div class="co-row" v-for="(certificate, index) in certificates"  :key="index">
                                            <div class="co-info">
                                                <div class="co-title">
                                                    {{ certificate.title }}
                                                </div>
                                                <div class="co-code">
                                                    {{ certificate.code }}
                                                </div>
                                            </div>
                                            <div class="co-view">
                                                <img :src="certificate.image" alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          </div>
      </div>
      <!-- Content -->

      <!-- Footer -->
      <Footer />
      <!-- Footer -->
  </div>
</template>

<style scoped src="../components/common/css/Profile.css">

</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Avatar from '../components/Avatar.vue';

export default {
  name: 'Profile',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Avatar: Avatar
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      certificates: [
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Diploma.png')
        },
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Achievement.png')
        },
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Diploma.png')
        }
      ]
    }
  },
  created() {
    this.firstName = localStorage.getItem('user_name');
    this.lastName = localStorage.getItem('last_name');
    // Check Auth
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' });
    }
  },
  mounted() {
    $(function(){
        var hash = window.location.hash;
        hash && $('.profile-links a[href="' + hash + '"]').tab('show');
        if (hash) {
          var titleHash = $('a[href="' + hash + '"]').find('.profile-link-text').text();
          $("#tabTitle").text(titleHash);
        }

        $('.nav-tabs a').click(function (e) {
            var title = $(this).find('.profile-link-text').text();
            $(this).tab('show');
            $("#tabTitle").text(title);
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });
  }
}
</script>
