export const adminPageConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    { label: 'MENU PRINCIPAL', separator: true },
    { label: 'Dashboard', route: '/', iconClasses: 'fa fa-tachometer' },
    { label: 'Acesso', route: '/menu/acesso', iconClasses: 'fa fa-cogs' },
    { label: 'Pessoa', route: '/menu/pessoa', iconClasses: 'fa fa-users' }
    /* {label: 'Get Started', route: '/', iconClasses: 'fa fa-road',
      pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuration', route: 'layout/configuration'},
        {label: 'Custom', route: 'layout/custom'},
        {label: 'Header', route: 'layout/header'},
        {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        {label: 'Content', route: 'layout/content'}
      ]} */
  ]
};
