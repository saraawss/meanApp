export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Library',
    url: '#',
    icon: 'icon-docs',
    children: [
	  {
	    name: 'Rates',
	    url: '/rates',
	    icon: 'icon-graph',
	  },  
	  {
	    name: 'Suppliers',
	    url: '/',
	    icon: 'icon-people',
	  },  
	  {
	    name: 'Subcontractors',
	    url: '/',
	    icon: 'icon-layers',
	  },  
	  {
	    name: 'Rawilsons',
	    url: '/',
	    icon: 'icon-list',
	  } 
    ]
},
 {
    name: 'Projects',
    url: '#',
    icon: 'icon-folder-alt',
    children: [
	  {
	    name: 'Income Status',
	    url: '/rates',
	    icon: 'icon-cursor',
	  },  
	  {
	    name: 'Payment Status',
	    url: '/',
	    icon: 'icon-hourglass',
	  },  
	  {
	    name: 'Monthly Report',
	    url: '/',
	    icon: 'icon-cursor',
	  },  
	  {
	    name: 'Forecast',
	    url: '/',
	    icon: 'icon-chart',
	  },  
	  ]
},  
  {
    name: 'Income',
    url: '/',
    icon: 'icon-target'
  },
  {
    name: 'Expense',
    url: '/',
    icon: 'icon-credit-card'
  },
  {
    name: 'Daily Report',
    url: '/',
    icon: 'icon-chart'
  },
  {
    name: 'Personnel',
    url: '/',
    icon: 'icon-user'
  },
 {
    name: 'Setting',
    url: '#',
    icon: 'icon-equalizer',
    children: [
	  {
	    name: 'Accounts',
	    url: '/',
	    icon: 'icon-settings',
	  },  
	  {
	    name: 'Help',
	    url: '/',
	    icon: 'icon-bubble',
	  }
	  ]
},   
];
