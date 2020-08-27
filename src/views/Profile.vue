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
                            <a href="#myBalance" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">test</span>
                              <span class="profile-link-balance profile-balance"><span class="ne_font">00.00</span> د.أ</span>
                            </a>
                            <a href="#previousOrders" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">My Certificate</span>
                              <span class="icon-prints icon"></span>
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
                                    حسابي
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
                                            <label for="name" class="d-flex justify-content-between">الإسم<span>:</span></label>
                                            <div class="user-data">
                                                Mohamed Salah
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="phone" class="d-flex justify-content-between">التليفون<span>:</span></label>
                                            <div class="user-data user-data-number">
                                                +96 66 55 44 11 22
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="company" class="d-flex justify-content-between">الشركة <span>:</span></label>
                                            <div class="user-data">
                                                24 Print
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="job" class="d-flex justify-content-between">المسمى الوظيفي<span>:</span></label>
                                            <div class="user-data">
                                                Art Director
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="website" class="d-flex justify-content-between">الموقع الإلكتروني<span>:</span></label>
                                            <div class="user-data">
                                                Kaizens.com
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <!-- Profile Balance -->
                                <div id="myBalance" class="profile-balance tab-pane">
                                    <div class="balance-num">
                                        500.00 د.أ
                                    </div>
                                </div>

                                <!-- Profile Previous -->
                                <div id="previousOrders" class="profile-previous tab-pane">
                                    <div class="order-item profile-orders profile-previous-orders">
                                        <div class="order-item-header">
                                            <div>الملف</div>
                                            <div>أمر الطباعة رقم</div>
                                            <div>المنتج</div>
                                            <div>عدد النسخ</div>
                                            <div>سعر النسخة</div>
                                            <div>الإجمالي</div>
                                            <div>حالة الطلب</div>
                                        </div>
                                        <div class="order-item-body">
                                              <!-- Row -->
                                              <div class="order-item-border">
                                                  <div class="order-item-row">
                                                      <div class="order-item-img-flex">
                                                          <div class="order-item-title-sm-device">
                                                              المنتج كتاب م التخرج
                                                          </div>
                                                          <div class="order-item-img">
                                                              <img src="assets/img/products/book.png" class="img-fluid" alt="Product Image">
                                                          </div>
                                                      </div>

                                                      <div class="order-item-data">
                                                          <div class="d-flex order-item-id-parent justify-content-center align-items-end">
                                                              <div class="order-item-title-sm-device">
                                                                  أمر الطباعة
                                                              </div>
                                                              <div class="id-actions-parent">
                                                                  <div class="ne_font text-center print-number">67389</div>
                                                                  <div class="order-actions d-flex justify-content-center">
                                                                      <button type="button" class="ml-2 mr-2"><span class="icon-pencil"></span></button>
                                                                      <button type="button" class="ml-2 mr-2"><span class="icon-trash"></span></button>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-name justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                عدد النسخ
                                                              </div>
                                                              <div class="text">
                                                                  كتاب مشروع التخرج
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-copies-parent justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                عدد النسخ
                                                              </div>
                                                              <div class="order-copies-counter d-flex justify-content-between align-items-center">
                                                                  <div>+</div>
                                                                  <div>10</div>
                                                                  <div>-</div>
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-copy-price justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                سعر النسخة
                                                              </div>
                                                              <div class="or-price">
                                                                  18.00 د.أ
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-price-total justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                الإجمالي
                                                              </div>
                                                              <div class="or-price">
                                                                  18.00 د.أ
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-status justify-content-center align-items-center">
                                                              <div class="order-status-flex">
                                                                  <div class="order-item-title-sm-device">
                                                                      حالة الطلب
                                                                  </div>
                                                                  <div class="ne_font">
                                                                      <div class="icon-correct order-status-icon status-correct"></div>
                                                                      <div class="order-status-text">تمت الطباعة</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Row -->

                                              <!-- Row -->
                                              <div class="order-item-border">
                                                  <div class="order-item-row">
                                                      <div class="order-item-img-flex">
                                                          <div class="order-item-title-sm-device">
                                                              المنتج كتاب م التخرج
                                                          </div>
                                                          <div class="order-item-img">
                                                              <img src="assets/img/products/book.png" class="img-fluid" alt="Product Image">
                                                          </div>
                                                      </div>

                                                      <div class="order-item-data">
                                                          <div class="d-flex order-item-id-parent justify-content-center align-items-end">
                                                              <div class="order-item-title-sm-device">
                                                                أمر الطباعة
                                                              </div>
                                                              <div class="id-actions-parent">
                                                                  <div class="ne_font text-center print-number">67389</div>
                                                                  <div class="order-actions d-flex justify-content-center">
                                                                      <button type="button" class="ml-2 mr-2"><span class="icon-pencil"></span></button>
                                                                      <button type="button" class="ml-2 mr-2"><span class="icon-trash"></span></button>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-name justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                عدد النسخ
                                                              </div>
                                                              <div class="text">
                                                                  كتاب مشروع التخرج
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-copies-parent justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                عدد النسخ
                                                              </div>
                                                              <div class="order-copies-counter d-flex justify-content-between align-items-center">
                                                                  <div>+</div>
                                                                  <div>10</div>
                                                                  <div>-</div>
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-copy-price justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                سعر النسخة
                                                              </div>
                                                              <div class="or-price">
                                                                  18.00 د.أ
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-price-total justify-content-center align-items-center">
                                                              <div class="order-item-title-sm-device">
                                                                الإجمالي
                                                              </div>
                                                              <div class="or-price">
                                                                  18.00 د.أ
                                                              </div>
                                                          </div>
                                                          <div class="d-flex order-item-status justify-content-center align-items-center">
                                                              <div class="order-status-flex">
                                                                  <div class="order-item-title-sm-device">
                                                                      حالة الطلب
                                                                  </div>
                                                                  <div class="ne_font">
                                                                      <div class="icon-close order-status-icon status-wrong"></div>
                                                                      <div class="order-status-text">ملف غير صالح</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Row -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Profile Tracking -->
                                <div id="tracking" class="profile-tracking tab-pane">
                                  <div class="order-item profile-orders profile-tracking-orders">
                                      <div class="order-item-header">
                                          <div>الملف</div>
                                          <div>أمر الطباعة رقم</div>
                                          <div>المنتج</div>
                                          <div>عدد النسخ</div>
                                          <div>سعر النسخة</div>
                                          <div>الإجمالي</div>
                                          <div>الوقت المتبقي</div>
                                      </div>
                                      <div class="order-item-body">
                                            <!-- Row -->
                                            <div class="order-item-border">
                                                <div class="order-item-row">
                                                    <div class="order-item-img-flex">
                                                        <div class="order-item-title-sm-device">
                                                            المنتج كتاب م التخرج
                                                        </div>
                                                        <div class="order-item-img">
                                                            <img src="assets/img/products/book.png" class="img-fluid" alt="Product Image">
                                                        </div>
                                                    </div>

                                                    <div class="order-item-data">
                                                        <div class="d-flex order-item-id-parent justify-content-center align-items-end">
                                                            <div class="order-item-title-sm-device">
                                                              أمر الطباعة
                                                            </div>
                                                            <div class="id-actions-parent">
                                                                <div class="ne_font text-center print-number">67389</div>
                                                                <div class="order-actions d-flex justify-content-center">
                                                                    <button type="button" class="ml-2 mr-2"><span class="icon-pencil"></span></button>
                                                                    <button type="button" class="ml-2 mr-2"><span class="icon-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-name justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              عدد النسخ
                                                            </div>
                                                            <div class="text">
                                                                كتاب مشروع التخرج
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-copies-parent justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              عدد النسخ
                                                            </div>
                                                            <div class="order-copies-counter d-flex justify-content-between align-items-center">
                                                                <div>+</div>
                                                                <div>10</div>
                                                                <div>-</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-copy-price justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              سعر النسخة
                                                            </div>
                                                            <div class="or-price">
                                                                18.00 د.أ
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-price-total justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              الإجمالي
                                                            </div>
                                                            <div class="or-price">
                                                                18.00 د.أ
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-status justify-content-center align-items-center">
                                                            <div class="order-status-flex">
                                                                <div class="order-item-title-sm-device">
                                                                    الوقت المتبقي
                                                                </div>
                                                                <div class="order-item-timestamps">
                                                                    <div class="order-item-date">21/02/2020</div>
                                                                    <div class="order-item-time">09:21Pm</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="order-tracking d-flex justify-content-between">
                                                    <div class="order-item-track active">
                                                        تم إستلام الملف
                                                    </div>
                                                    <div class="order-item-track active">
                                                        جاري الطباعة
                                                    </div>
                                                    <div class="order-item-track">
                                                        تمت الطباعة
                                                    </div>
                                                    <div class="order-item-track">
                                                        تم الشحن
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Row -->

                                            <!-- Row -->
                                            <div class="order-item-border">
                                                <div class="order-item-row">
                                                    <div class="order-item-img-flex">
                                                        <div class="order-item-title-sm-device">
                                                            المنتج كتاب م التخرج
                                                        </div>
                                                        <div class="order-item-img">
                                                            <img src="assets/img/products/book.png" class="img-fluid" alt="Product Image">
                                                        </div>
                                                    </div>

                                                    <div class="order-item-data">
                                                        <div class="d-flex order-item-id-parent justify-content-center align-items-end">
                                                            <div class="order-item-title-sm-device">
                                                              أمر الطباعة
                                                            </div>
                                                            <div class="id-actions-parent">
                                                                <div class="ne_font text-center print-number">67389</div>
                                                                <div class="order-actions d-flex justify-content-center">
                                                                    <button type="button" class="ml-2 mr-2"><span class="icon-pencil"></span></button>
                                                                    <button type="button" class="ml-2 mr-2"><span class="icon-trash"></span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-name justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              عدد النسخ
                                                            </div>
                                                            <div class="text">
                                                                كتاب مشروع التخرج
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-copies-parent justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              عدد النسخ
                                                            </div>
                                                            <div class="order-copies-counter d-flex justify-content-between align-items-center">
                                                                <div>+</div>
                                                                <div>10</div>
                                                                <div>-</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-copy-price justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              سعر النسخة
                                                            </div>
                                                            <div class="or-price">
                                                                18.00 د.أ
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-price-total justify-content-center align-items-center">
                                                            <div class="order-item-title-sm-device">
                                                              الإجمالي
                                                            </div>
                                                            <div class="or-price">
                                                                18.00 د.أ
                                                            </div>
                                                        </div>
                                                        <div class="d-flex order-item-status justify-content-center align-items-center">
                                                            <div class="order-status-flex">
                                                                <div class="order-item-title-sm-device">
                                                                    الوقت المتبقي
                                                                </div>
                                                                <div class="order-item-timestamps">
                                                                    <div class="order-item-date">21/02/2020</div>
                                                                    <div class="order-item-time">09:21Pm</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="order-tracking d-flex justify-content-between">
                                                    <div class="order-item-track active">
                                                        تم إستلام الملف
                                                    </div>
                                                    <div class="order-item-track active">
                                                        جاري الطباعة
                                                    </div>
                                                    <div class="order-item-track">
                                                        تمت الطباعة
                                                    </div>
                                                    <div class="order-item-track">
                                                        تم الشحن
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Row -->
                                      </div>
                                  </div>
                                </div>

                                <!-- Profile Bills -->
                                <div id="bills" class="profile-bills tab-pane">
                                    bills
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
      lastName: ''
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
