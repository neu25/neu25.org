<img src="src/images/hoosky.png" alt="Hoosky" width="175px" /><br />

# NEU25.org

The class website of Northeastern’s Class of 2025.

## Live website

The live website can be found at [www.neu25.org](https://www.neu25.org)

## Structure

```
.
├── README.md (this)
└── src
    ├── images
    └── styles
        └── globals.css (global styles)
    └── index.html
```

## Getting started

> How to set up neu25.org locally

### Obtaining the language and code

1. Make sure your computer has `git`, and run

```bash
git clone git@github.com:neu25/neu25.org.git
```

in the directory where you want to clone the site.

2. Locate the `neu25.org` folder and open up the `index.html` file to see the site!

### Local development

Install dependencies and set up pre-commit hooks with

```bash
npm install
npm run prepare
```

Start watching for changes with

```bash
npm run watch
```

Build the site with

```bash
npm run build
```

Open the `/dist/index.html` to see the site.

### Making changes

All changes should be made either on the `dev` branch or on a feature branch (`user/feature`). All pull requests should merge into `dev`.
