# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). The goal of the challenge is to build a responsive newsletter subscription form that includes proper validation and a success message. Frontend Mentor challenges help improve front-end development skills by building realistic, user-centric UIs.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Form Screenshot](./assets/images/127.0.0.1_5501_%20(4).png)

### Links

- Solution URL: https://github.com/DanKRT-Star/newsletter-sign-up-with-success-message-main
- Live Site URL: https://newsletter-sign-up-with-success-mes-sand.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox and media queries for responsiveness
- Vanilla JavaScript for form handling and validation
- Mobile-first responsive design
- Keyframe animations for UI transitions and interactions

### What I learned

This project helped reinforce my understanding of:

- Basic form validation using regular expressions
- Toggling visibility of sections using JavaScript
- Responsive layout adjustments with media queries
- Implementing entrance animations with CSS `@keyframes`

Example of email validation logic in JavaScript:

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  // Show error
}
```
Example of keyframe animation for scaling in elements:

```css
@keyframes scaleVertical {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
```

### Continued development
- In future projects, I would like to:
- Add ARIA roles and better accessibility support
- Replace alert() with a custom modal or toast for better UX
- Implement better animation sequencing for smoother transitions
- Add email address persistence or integration with a backend

### Useful resources
- [MDN Web Docs - HTML Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [CSS Tricks - Keyframe Animations](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
- [Frontend Mentor Slack Community](https://www.frontendmentor.io/community)

## Author
- Frontend Mentor - [@DanKRT-Star]https://www.frontendmentor.io/profile/DanKRT-Star
- Facebook - [Lê Mạnh Đan](https://www.facebook.com/le.manh.an.887330)
- Gmail - [Lê Mạnh Đan](tonyle1207@gmail.com)
- Github - [Lê Mạnh Đan](https://github.com/DanKRT-Star)

## Acknowledgments

Thanks to Frontend Mentor and the community for providing helpful resources and feedback during this challenge.

