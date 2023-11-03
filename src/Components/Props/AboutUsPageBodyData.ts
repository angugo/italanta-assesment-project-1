export interface AboutUsSection {
  title: string;
  paragraphs: string[];
}

const aboutUsData: AboutUsSection[] = [
  {
    title: "We Care!",
    paragraphs: [
      "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.",
      "Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.",
    ],
  },

  {
    title: "Holistic solutions",
    paragraphs: [
      "We go beyond a simple patch-up but develop lasting solutions through holistic design.",
    ],
  },

  {
    title: "Impact",
    paragraphs: [
      "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.",
    ],
  },
  
  {
    title: "Open data",
    paragraphs: [
      "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.",
    ],
  },
];

export default aboutUsData;
