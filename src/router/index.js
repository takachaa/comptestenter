import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// import Home from '../views/Home.vue'
import Top2 from '../views/Top2.vue'
import Top3Detail from '../views/Top3Detail.vue'
import Signup from '../views/Signup.vue'
import MailAuth from '../views/MailAuth.vue'
import Like from '../views/Like.vue'
import Favorite from '../views/Favorite.vue'
import Menu from '../views/Menu.vue'
import Profile from '../views/Profile.vue'
import Footprints from '../views/Footprints.vue'
import History from '../views/History.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
import Plan from '../views/Plan.vue'
import InputCard from '../views/InputCard.vue'
import ConfirmCard from '../views/ConfirmCard.vue'
import CompleteCard from '../views/CompleteCard.vue'
import ManageJobOffer from '../views/ManageJobOffer.vue'
import JobOfferDetail from '../views/JobOfferDetail.vue'
import CreateJobOffer from '../views/CreateJobOffer.vue'
import EditJobOffer1 from '../views/EditJobOffer1.vue'
import EditJobOffer2 from '../views/EditJobOffer2.vue'
import EditJobOffer3 from '../views/EditJobOffer3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top2',
    component: Top2
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/top2',
    name: 'Top2',
    component: Top2
  },
  {
    path: '/detail3',
    name: 'Top3Detail',
    component: Top3Detail
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/mailauth',
    name: 'MailAuth',
    component: MailAuth
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/footprints',
    name: 'Footprints',
    component: Footprints
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/messagedeital',
    name: 'MessageDetail',
    component: MessageDetail
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/inputcard',
    name: 'InputCard',
    component: InputCard
  },
  {
    path: '/confirmcard',
    name: 'ConfirmCard',
    component: ConfirmCard
  },
  {
    path: '/completecard',
    name: 'CompleteCard',
    component: CompleteCard
  },
  {
    path: '/managejoboffer',
    name: 'ManageJobOffer',
    component: ManageJobOffer
  },
  {
    path: '/jobofferdetail',
    name: 'JobOfferDetail',
    component: JobOfferDetail
  },
  {
    path: '/createjoboffer',
    name: 'CreateJobOffer',
    component: CreateJobOffer
  },
  {
    path: '/editjoboffer1',
    name: 'EditJobOffer1',
    component: EditJobOffer1
  },
  {
    path: '/editjoboffer2',
    name: 'EditJobOffer2',
    component: EditJobOffer2
  },
  {
    path: '/editjoboffer3',
    name: 'EditJobOffer3',
    component: EditJobOffer3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
