import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/components/swiper'
import HoverLine from '@/components/hover_line'
import HoverMenu from '@/components/hover_menu'
import HoverMenu2 from '@/components/hover_menu_2'
import YinYang from '@/components/yin_yang'
import Heart from '@/components/heart'
import InputFocus from '@/components/input_focus'
import MyButton from '@/components/button'
import BL from '@/components/bl'
import TransformSwiper from '@/components/transform_swiper'
import TransformSwiperCustomWK from '@/components/transform_swiper-custom_wk'
import TransformSwiperCustomWZ from '@/components/transform_swiper_wz'
// import Accordion from '@/components/accordion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'swiper',
      component: Swiper,
      meta: {
        title: '轮播'
      }
    },
    {
      path: '/hoverLine',
      name: 'hoverLine',
      component: HoverLine,
      meta: {
        title: '下划线'
      }
    },
    {
      path: '/HoverMenu',
      name: 'HoverMenu',
      component: HoverMenu,
      meta: {
        title: '划过菜单 1'
      }
    },
    {
      path: '/HoverMenu2',
      name: 'HoverMenu2',
      component: HoverMenu2,
      meta: {
        title: '划过菜单 2'
      }
    },
    {
      path: '/YinYang',
      name: 'YinYang',
      component: YinYang,
      meta: {
        title: '阴阳'
      }
    },
    {
      path: '/Heart',
      name: 'Heart',
      component: Heart,
      meta: {
        title: '心'
      }
    },
    {
      path: '/InputFocus',
      name: 'InputFocus',
      component: InputFocus,
      meta: {
        title: '输入框聚焦'
      }
    },
    {
      path: '/MyButton',
      name: 'MyButton',
      component: MyButton,
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/BL',
      name: 'BL',
      component: BL,
      meta: {
        title: '波浪'
      }
    },
    {
      path: '/transformSwiper',
      name: 'TransformSwiper',
      component: TransformSwiper,
      meta: {
        title: '旋转轮播'
      }
    },
    {
      path: '/transformSwiperCustomWK',
      name: 'TransformSwiperCustomWK',
      component: TransformSwiperCustomWK,
      meta: {
        title: '旋转轮播。'
      }
    },
    {
      path: '/TransformSwiperCustomWZ',
      name: 'TransformSwiperCustomWZ',
      component: TransformSwiperCustomWZ,
      meta: {
        title: '旋转轮播。。。'
      }
    }
    // {
    //   path: '/accordion',
    //   name: 'accordion',
    //   component: Accordion,
    //   meta: {
    //     title: '手风琴'
    //   }
    // }
  ]
})
