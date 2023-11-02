// the interface bellow enforces properties of the menu item object in terms of data types and variables
export interface MenuItem {
    url: string;
    title: string;
    cName: string;
}

/* 
the actual menu items object is as follows
incase theres need for an extra menu item the following structure is followed 
 */
const menuItems: MenuItem[]=[
    {
        url: '/about',
        title: 'About',
        cName: 'menuItem'
    },
    {
        url: '/invest',
        title: 'Invest',
        cName: 'menuItem'
    },
    {
        url: '/social-impact',
        title: 'Social Impact',
        cName: 'menuItem'
    }

];

export default menuItems
