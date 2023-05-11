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
    // {
    //   name: 'dashboard',
    //   displayName: 'menu.dashboard',
    //   meta: {
    //     icon: 'vuestic-iconset-dashboard',
    //   },
    // },
  ] as INavigationRoute[],
}
