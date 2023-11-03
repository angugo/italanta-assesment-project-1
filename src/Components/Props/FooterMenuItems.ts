// interphase to govern the types in the objects being used
interface FooterMenuItems {
    title: string;
    content: string[];
}

// footer menu items object to be exported
const footerItems: FooterMenuItems[] = [
   {
        title: 'Headquaters',
        content: [
            'The Promenade, 19 General',
            'Mathenge Rd',
            'Nairobi, Kenya',
        ],
    },

    {
        title: 'Content',
        content: [
            "T +254 78 92 27 755",
            "E info@elewa.ke"
        ],
    },

    {
        title: 'Navigation',
        content: [
            'About us',
            'Social impact',
            'Invest',
            'News',
            'Contact'
        ],
    },

    {
        title: 'Brands',
        content: [
            'Elewa',
            'Italanta',
           ' Venture labs'
        ],
    },

    {
        title: 'Privacy',
        content: [
            'Terms and conditions',
            'Cookie preferences'
        ],
    },
]

export default footerItems