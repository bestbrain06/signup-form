# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](This is a form validator project. Caution: It does not submit to external resources it just checks for a valid email)
  - [The challenge](This is a signup form from frontend mentor)
  - [Links](#links)
- [My process](I am learning Javascript basis and Document object model)
  - [Built with](HTML, CSS, and Vanilla Javascript)
  - [What I learned](I learned about how to manipulate the DOM and also how to check for validity of an Input field)
  - [Continued development](I will continue building some basic javascript challenges to improve my knownlege on Javascript basis and DOM Manipulation)
  - [Useful resources](JavaScript form validation tutorial)
- [Author](Ikechukwu chidera)
- [Acknowledgments](Future coder a Youtube channel that thaught be about form validation)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![screenshot](./images/project%20screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned about Basis of JavaScript and DOM Manipulation.

To see how you can add code snippets, see below:

```html
<small>This is a recent tag i discovered the small tag</small>
```

```js
function isValidEmail(email) {
  const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return re.test(email);
  // use to check for a validity of an email
}
```

## Author

- Frontend Mentor - [@bestbrain06](https://www.frontendmentor.io/profile/bestbrain06)
- Twitter - [@BrainBest06](https://twitter.com/BrainBest06)

## Acknowledgments

What helped me is watching tutorial on Youtube from Future Coder. I learned about form validation from Him his a great teacher as well
