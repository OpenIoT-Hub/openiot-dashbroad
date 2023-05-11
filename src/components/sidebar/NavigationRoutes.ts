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
      name: 'homePage',
      displayName: 'Home',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
      children: [
        {
          name: 'workSpace',
          displayName: 'workSpace',
        },
      ],
    },
    {
      name: 'VisualizationPage',
      displayName: 'Data Analyse',
      meta: {
        icon: 'insert_chart',
      },
      children: [],
    },
    {
      name: 'DeviceListPage',
      displayName: 'device',
      meta: {
        icon: 'devices',
      },
      // FIXME 添加子层级列表导致无响应问题
      children: [
        // {
        //   name: 'From',
        //   displayName: 'device Detail',
        // },
      ],
    },
    {
      name: 'UserInfoPage',
      displayName: 'User',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      children: [],
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
