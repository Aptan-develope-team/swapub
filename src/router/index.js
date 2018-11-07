import Vue from 'vue'
import Router from 'vue-router'
import Market from '@/pages/Market/Market'
import Market_detail_follow from '@/pages/Market/Market_detail_follow'
import Market_detail_whisper from '@/pages/Market/Market_detail_whisper'
import Market_detail from '@/pages/Market/Market_detail'
import Market_edit from '@/pages/Market/Market_edit'
import Market_search from '@/pages/Market/Market_search'
import Market_search_name from '@/pages/Market/Market_search_name'
import Market_upload from '@/pages/Market/Market_upload'
import Wish from '@/pages/Wish/Wish'
import Wish_detail from '@/pages/Wish/Wish_detail'
import Wish_edit from '@/pages/Wish/Wish_edit'
import Wish_search from '@/pages/Wish/Wish_search'
import Wish_search_name from '@/pages/Wish/Wish_search_name'
import Wish_upload from '@/pages/Wish/Wish_upload'
import Signin from '@/pages/Signin'
import User_attention_other from '@/pages/Attention/User_attention_other'
import User_attention from '@/pages/Attention/User_attention'
import Exp_about from '@/pages/Exp/Exp_about'
import Exp_qa from '@/pages/Exp/Exp_qa'
import Exp_rule from '@/pages/Exp/Exp_rule'
import Exp_service from '@/pages/Exp/Exp_service'
import Swap_item_detail_other from '@/pages/Swap/Swap_item_detail_other'
import Swap_item_detail_otherOK from '@/pages/Swap/Swap_item_detail_otherOK'
import Swap_item_detail_user from '@/pages/Swap/Swap_item_detail_user'
import Swap_item_detail from '@/pages/Swap/Swap_item_detail'
import Menu_t_deal_detail from '@/pages/Menu_t/Menu_t_deal_detail'
import Menu_t_deal from '@/pages/Menu_t/Menu_t_deal'
import Menu_t_follow from '@/pages/Menu_t/Menu_t_follow'
import Menu_t_swap from '@/pages/Menu_t/Menu_t_swap'
import Menu_t_whisper from '@/pages/Menu_t/Menu_t_whisper'
import Menu_u_set from '@/pages/Menu_u/Menu_u_set'
import Menu_u_myinfo from '@/pages/Menu_u/Menu_u_myinfo'
import Menu_u_myitem from '@/pages/Menu_u/Menu_u_myitem'
import Menu_u_my_item_other from '@/pages/Menu_u/Menu_u_my_item_other'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Market',
      component: Market,
    },
    {
      path: '/market_detail_follow/:id',
      name: 'Market_detail_follow',
      component: Market_detail_follow,
      props: true
    },
    {
      path: '/market_detail_whisper',
      name: 'Market_detail_whisper',
      component: Market_detail_whisper
    },
    {
      path: '/market_edit/:id',
      name: 'Market_edit',
      component: Market_edit,
      props: true
    },
    {
      path: '/market_search',
      name: 'Market_search',
      component: Market_search
    },
    {
      path: '/market_search_name',
      name: 'Market_search_name',
      component: Market_search_name
    },
    {
      path: '/market_upload',
      name: 'Market_upload',
      component: Market_upload
    },
    {
      path: '/market_detail/:id',
      name: 'Market_detail',
      component: Market_detail,
      props: true
    },
    {
      path: '/wish',
      name: 'Wish',
      component: Wish
    },
    {
      path: '/wish_detail/:id',
      name: 'Wish_detail',
      component: Wish_detail,
      props: true
    },
    {
      path: '/wish_edit/:id',
      name: 'Wish_edit',
      component: Wish_edit,
      props: true
    },
    {
      path: '/wish_search',
      name: 'Wish_search',
      component: Wish_search
    },
    {
      path: '/wish_search_name',
      name: 'Wish_search_name',
      component: Wish_search_name
    },
    {
      path: '/wish_upload',
      name: 'Wish_upload',
      component: Wish_upload
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/swap_item_detail/:id',
      name: 'Swap_item_detail',
      component: Swap_item_detail,
      props:true
    },
    {
      path: '/swap_item_detail_other',
      name: 'Swap_item_detail_other',
      component: Swap_item_detail_other
    },
    {
      path: '/swap_item_detail_otherOK',
      name: 'Swap_item_detail_otherOK',
      component: Swap_item_detail_otherOK
    },
    {
      path: '/swap_item_detail_user',
      name: 'Swap_item_detail_user',
      component: Swap_item_detail_user
    },
    {
      path: '/menu_t_deal',
      name: 'Menu_t_deal',
      component: Menu_t_deal
    },
    {
      path: '/menu_t_swap',
      name: 'Menu_t_swap',
      component: Menu_t_swap
    },
    {
      path: '/menu_t_deal_detail',
      name: 'Menu_t_deal_detail',
      component: Menu_t_deal_detail
    },
    {
      path: '/menu_t_follow',
      name: 'Menu_t_follow',
      component: Menu_t_follow
    },
    {
      path: '/menu_t_whisper',
      name: 'Menu_t_whisper',
      component: Menu_t_whisper
    },
    {
      path: '/menu_u_set',
      name: 'Menu_u_set',
      component: Menu_u_set
    },
    {
      path: '/menu_u_myinfo',
      name: 'Menu_u_myinfo',
      component: Menu_u_myinfo
    },
    {
      path: '/menu_u_myitem/:id',
      name: 'Menu_u_myitem',
      component: Menu_u_myitem,
      props: true
    },
    {
      path: '/menu_u_my_item_other',
      name: 'Menu_u_my_item_other',
      component: Menu_u_my_item_other
    },
    {
      path: '/exp_about',
      name: 'Exp_about',
      component: Exp_about
    },
    {
      path: '/exp_qa',
      name: 'Exp_qa',
      component: Exp_qa
    },
    {
      path: '/exp_rule',
      name: 'Exp_rule',
      component: Exp_rule
    },
    {
      path: '/exp_service',
      name: 'Exp_service',
      component: Exp_service
    },
    {
      path: '/user_attention/:id',
      name: 'User_attention',
      component: User_attention,
      props: true
    },
    {
      path: '/user_attention_other',
      name: 'User_attention_other',
      component: User_attention_other
    }
  ]
})
