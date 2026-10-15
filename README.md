# Room Homepage | Frontend Mentor

A responsive landing page built as a practice project for the [Room homepage](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq) challenge from Frontend Mentor.

## Live Demo

- Live site: [View the live site](https://room-homepage-liard-delta.vercel.app/)
- Source code: [View the source code](https://github.com/Anees-ul-rehman-1/room-homepage.git)

## Features

- Fully responsive layout, from small phones to large desktop screens
- Mobile navigation menu that opens and closes with a toggle
- Hero slider with previous and next arrow buttons to change slides

## Built With

- HTML5
- Tailwind CSS
- JavaScript (ES modules)
- Vite

## Getting Started

### Prerequisites

- Node.js (a current LTS version is recommended)
- npm

### Installation

```bash
git clone https://github.com/Anees-ul-rehman-1/room-homepage.git
cd room-homepage
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will print a local address in the terminal. Open it in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
.
├── index.html
├── package.json
└── src
    ├── main.js        # Slider logic, next and previous slide handling
    ├── style.css      # Tailwind entry point and custom theme values
    └── assets
        └── images     # Logos, icons, and photos
```

## What I Learned

- How to set up a custom theme in Tailwind CSS and reuse styles with `@apply`.
- Why `<picture>` with `<source>` is a safer way to switch image sources on desktop screens.
- How to build a responsive layout using Tailwind CSS utility classes and responsive variants.

## Future Improvements

- Disable the previous and next buttons when there is no earlier or later slide.

## Author

Anees Ul Rehman

- GitHub: [Anees-ul-rehman-1](https://github.com/Anees-ul-rehman-1)
- Frontend Mentor: [Anees-ul-rehman-1](https://www.frontendmentor.io/profile/Anees-ul-rehman-1)

## Acknowledgements

The design and challenge brief are provided by [Frontend Mentor](https://www.frontendmentor.io?ref=challenge). This project is a personal implementation and is not affiliated with Frontend Mentor.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
