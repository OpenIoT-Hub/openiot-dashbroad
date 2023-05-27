export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'home',
      displayName: '主页',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
      children: [
        {
          name: 'workSpace',
          displayName: '仪表盘',
        },
      ],
    },
    {
      name: 'VisualizationPage',
      displayName: '数据可视化',
      meta: {
        icon: 'insert_chart',
      },
      children: [],
    },
    {
      name: 'device',
      displayName: '设备',
      meta: {
        icon: 'devices',
      },
      children: [
        {
          name: 'table',
          displayName: '设备表格',
        },
        {
          name: 'map',
          displayName: '设备地图',
        },
        {
          name: 'form',
          displayName: '新建设备',
        },
      ],
    },
    {
      name: 'UserInfoPage',
      displayName: '用户',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      children: [
        {
          name:'Info',
          displayName:'用户信息'
        }
      ],
    },
    // {
    //   name: 'dashboard',
    //   displayName: 'menu.dashboard',
    //   meta: {
    //     icon: 'vuestic-iconset-dashboard',
    //   },
    // },
  ] as INavigationRoute[],
}
