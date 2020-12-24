/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/img.jpeg',
    infoLink: 'https://www.linkedin.com/in/anupama-sinha-05227854/',
    pinned: true,
  },
];

const siteConfig = {
  // Title for your website
  title: 'Technical Interview Handbook', 
  tagline: 'Website to help professionals to prepare for interview',
  // Your website URL
  url: 'https://anupama-sinha.github.io', 
  // Base URL for your project
  baseUrl: '/', 
  // Used for publishing and more
  projectName: 'interview-prep-site',
  // For top-level user or org sites, the organization is still the same
  organizationName: 'anupama-sinha',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'best_practices/spring_project', label: 'Notes'},
    {doc: 'about-me', label: 'About Me'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/final.ico',
  footerIcon: 'img/final.ico',
  favicon: 'img/final.ico',

  /* Colors for website */
   colors: {
    primaryColor: '#1775af',
    secondaryColor: '#10517a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} anupama-sinha`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },
  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  // Open Graph image
  // ogImage: 'img/final.ico',
  // For sites with a sizable amount of content, set collapsible to true
  docsSideNavCollapsible: true,
  docsUrl : '',
  usePrism : true,
  twitter : true,
  twitterImage : 'img/img.jpeg',
};

module.exports = siteConfig;