import heroImage from '../../assets/images/about_page_hero_background.jpg'
// interface for hero section props of the About page
export interface AboutPageHeroProps {
    cName: string;
    heroImg: any;
    textOne: string;
    textTwo: string;
    textThree: string;
    imgAlt: string;
}

// the actual data object to be exported
export const aboutPageHeroProps: AboutPageHeroProps = {
    cName: 'hero-section',
    heroImg: heroImage,
    textOne: 'HOW TO RECOGNIZE AN ELEWA MEMBER',
    textTwo: 'Dependable, Creative, Supportive, Open Minded and Fun*',
    textThree: '*SERIOUS WHEN IT MATTERS',
    imgAlt: 'The team'
}