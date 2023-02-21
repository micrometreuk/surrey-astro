import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Domestic',
      href: '/#domestic ',
    },
    {
      text: 'Car Charging',
      href: '/#car-charging',
    },
    
    {
      text: 'Commercial',
      href: '/#commercial',
    },
    
    {
      text: 'Making Good',
      href: '/#making-good',
    },
    {
      text: 'CCTV and Intruder Alarms',
      href: 'cctv',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Contact us',
      links: [
        { text: 'info@electricalsurrey.com', href: 'mailto:info@electricalsurrey.com' },
        { text: 'Office: 01932 886593 ', href: 'tel:01932 886593' },
        { text: 'Mobile: 07849 721448 Mobile', href: 'tel:07849 721448 Mobile' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Car Charging', href: '/#car-charging' },
        { text: 'CCTV and Intruder Alarms ', href: '/cctv' },
        { text: 'Domestic', href: '/#domestic' },
        { text: 'Commercial', href: '/#commercial' },
        { text: 'External', href: '/#external' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Making Good', href: '/#making-good' },
        { text: 'Business Hours', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm "></span>
    Copyright © <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://electricalsurrey.com/">©2023Electricalsurrey Ltd</a>
  `,
};
