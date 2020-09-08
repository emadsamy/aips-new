import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programs from "../views/Programs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Program from "../views/Program.vue";
import Entre from "../views/Entre.vue";
import OnlineApplication from "../views/OnlineApplication.vue";
import OnlineAppMembership from "../views/OnlineAppMembership.vue";
import OurCertificate from "../views/OurCertificate.vue";
import Instructor from "../views/Instructor.vue";
import Experience from "../views/Experience.vue";
import TrainingCenter from "../views/TrainingCenter.vue";
import Membership from "../views/Membership.vue";
import Privacy from "../views/Privacy.vue";
import Accreditation from "../views/Accreditation.vue";
import Accreditation2 from "../views/Accreditation2.vue";
import Accreditation3 from "../views/Accreditation3.vue";
import Accreditation4 from "../views/Accreditation4.vue";
import Corporate from "../views/Corporate.vue";
import News from "../views/News.vue";
import MainCertificate from "../views/MainCertificate.vue";
import CertificateAchievement from "../views/CertificateAchievement.vue";
import ContactUs from "../views/ContactUs.vue";
import VerficationAccount from "../views/VerficationAccount.vue";
import OnlineTraining from "../views/OnlineTraining.vue";
import Events from "../views/Events.vue";
import Faq from "../views/Faq.vue";
import Profile from "../views/Profile.vue";
import Logout from "../views/Logout.vue";
import NavbarPage from "../views/NavbarPage.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/programs",
    name: "Programs",
    component: Programs,
  },
  {
    path: "/program/sectors/:slug",
    name: "Program",
    component: Program,
  },
  {
    path: "/program/sectors/:slug/in/:pro",
    name: "program-detail",
    component: Entre,
  },
  {
    path: "/online-application",
    name: "OnlineApplication",
    component: OnlineApplication,
    props: true,
  },
  {
    path: "/online-app-membership",
    name: "OnlineApplicationMem",
    component: OnlineAppMembership,
    props: true,
  },
  {
    path: "/our-certificate",
    name: "ourCertificate",
    component: OurCertificate,
  },

  /* Show */
  // {
  //   path: "/i-am-instructor",
  //   name: "Instructor",
  //   component: Instructor,
  // },
  // {
  //   path: "/i-have-experience",
  //   name: "Experience",
  //   component: Experience,
  // },
  // {
  //   path: "/training-center",
  //   name: "TrainingCenter",
  //   component: TrainingCenter,
  // },
  // {
  //   path: "/membership",
  //   name: "Membership",
  //   component: Membership,
  // },
  /* Show */

  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  // {
  //   path: "/what-is-accreditation",
  //   name: "Accreditation",
  //   component: Accreditation,
  // },
  // {
  //   path: "/why-you-should-choose-our-accreditation",
  //   name: "Accreditation2",
  //   component: Accreditation2,
  // },
  // {
  //   path: "/accreditation-benefits",
  //   name: "Accreditation3",
  //   component: Accreditation3,
  // },
  // {
  //   path: "/accreditation-procedures-for-training-provider--instructors",
  //   name: "Accreditation4",
  //   component: Accreditation4,
  // },
  // {
  //   path: "/pages/:slug",
  //   name: "NavbarPage",
  //   component: NavbarPage,
  // },
  // {
  //   path: "/news",
  //   name: "News",
  //   component: News,
  // },
  {
    path: "/my-certificate",
    name: "MainCertificate",
    component: MainCertificate,
  },
  // {
  //   path: "/main-certificate-achievement",
  //   name: "CertificateAchievement",
  //   component: CertificateAchievement,
  // },
  // {
  //   path: "/corporate-training",
  //   name: "Corporate",
  //   component: Corporate,
  // },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/verify",
    name: "VerficationAccount",
    component: VerficationAccount,
  },
  {
    path: "/online-training",
    name: "OnlineTraining",
    component: OnlineTraining,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  // {
  //   path: "/faq",
  //   name: "Faq",
  //   component: Faq,
  // },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },

  // Accreditations
  {
    path: "/accreditations",
    name: "accrediations",
    component: require("../views/Accreditations/List.vue").default,
  },
  {
    path: "/accreditations/:slug",
    name: "show-accrediations",
    component: require("../views/Accreditations/Show.vue").default,
  },

  // Memberships
  {
    path: "/memberships",
    name: "memberships",
    component: require("../views/Memberships/List.vue").default,
  },
  {
    path: "/memberships/:slug",
    name: "show-memberships",
    component: require("../views/Memberships/Show.vue").default,
  },

  // About
  {
    path: "/about",
    name: "about",
    component: require("../views/About/List.vue").default,
  },
  {
    path: "/about/:slug",
    name: "show-about",
    component: require("../views/About/Show.vue").default,
  },

  // Pages
  {
    path: "/page/:slug",
    name: "show-page",
    component: require("../views/Pages/Show.vue").default,
  },

  {
    path: "/our-certificate/programs/:slug",
    name: "certificate-program-detail",
    component: require("../views/Certificate/ShowProgram.vue").default,
  },

  // Memberships
  {
    path: "/popular-search/:slug",
    name: "popular-search-show",
    component: require("../views/PopularSearch/Show.vue").default,
  },
  {
    path: "/popular-search/in/programs",
    name: "popular-search-programs",
    component: require("../views/PopularSearch/Programs.vue").default,
  },
  {
    path: "/popular-search/in/programs/:slug",
    name: "popular-search-program-detail",
    component: require("../views/PopularSearch/ShowProgram.vue").default,
  },

  // Faq
  {
    path: "/faqs",
    name: "faq",
    component: require("../views/Faq.vue").default,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
