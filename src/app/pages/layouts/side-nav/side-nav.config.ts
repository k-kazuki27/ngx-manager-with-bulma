interface MainMenu {
  name: string;
  subMenus: SubMenu[];
}

interface SubMenu {
  icon: string;
  name: string;
  link: string;
}

export const SIDE_NAV_CONFIG: MainMenu[] = [
  {
    name: 'GENERAL',
    subMenus: [{ icon: 'fa-tachometer', name: 'Dashboard', link: '/dashboard' }]
  }
];
