<img src="public/images/hoosky.png" alt="Hoosky" width="175px" /><br />

# NEU25.org

The class website of Northeastern’s Class of 2025.

## Live website

The live website can be found at [www.neu25.org](https://www.neu25.org)

## Structure

```
.
├── README.md (this)
└── public
    └── images
└── src
    └── css
        └── globals.css (global styles)
    └── data
        └── site.json (global site variables)
    └── templates
        └── layouts
            └── base.njk (base layout)
    └── index.njk (landing page)
```

## Getting started

> How to set up neu25.org locally

### Obtaining the language and code

1. Make sure your computer has `git`, and run

```bash
git clone git@github.com:nu25/neu25.org.git
```

in the directory where you want to clone the website.

2. Ensure Node.js and NPM (the package manager for Node.js) are installed. Install from here: https://nodejs.org/en/

3. In the code folder, run

```bash
npm install
npm run prepare
```

to install all necessary dependencies and libraries.

4. You're ready!

### Local development

1. Start watching for changes with

```bash
npm run watch
```

This command will open the website at [localhost:3000](http://localhost:3000/).

2. To build a production version of the website, run

```bash
npm run build
```

Open the file at `/dist/index.html` to see the site.

3. Commit your changes with Git - see next section.

### Making changes to the code

1. We'll use GitHub Pull Requests to merge your changes onto the `main` and `dev` branches, so commit your changes onto your own branch.

2. Branch naming: name your branches as `<username>/tiny_description`.

3. All pull requests should merge into `dev`.
