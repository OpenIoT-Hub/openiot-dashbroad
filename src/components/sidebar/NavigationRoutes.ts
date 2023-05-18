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
      name: 'device',
      displayName: 'device',
      meta: {
        icon: 'devices',
      },
      children: [
        {
          name: 'list',
          displayName: 'Device List',
        },
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
