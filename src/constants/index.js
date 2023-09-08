import { facebook, instagram, twitter } from "../assets/icons";
import { customer1, customer2, customer3 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#getcard", label: "Get Card" },
    { href: "#pricing", label: "Pricing" },
];


export const statistics = [
    { value: '450k+', label: 'Global Users Total' },
    { value: '$80B+', label: 'Successful Payments' },
    { value: '90+', label: 'Currencies' },
    { value: '60+', label: 'Countries Supported' },
];


export const clients = [
    {
        pfpImg: customer1,
        name: "Irma McCready",
        opinion: "Fraone is the best way to save your money."
    },
    {
        pfpImg: customer2,
        name: "James Mercado",
        opinion: "I love Fraone. Made my life easier."
    },
    {
        pfpImg: customer3,
        name: "Richard Jordon",
        opinion: "Amazing experience with Fraone."
    },
];


export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];