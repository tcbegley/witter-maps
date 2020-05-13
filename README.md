# README

This is a simple web app keeping track of movies recommended in [Wittertainment's](https://www.bbc.co.uk/wittertainment) "A movie from every country in the world" feature.

## Contributing

I am not a web developer, I just did this to learn some new things during lockdown, suggestions / improvements are all very welcome! Fork this repository and submit a pull request.

Data on chosen films can be found in `src/data/films.json`.

## Development

The site is built with [GatsbyJS](https://www.gatsbyjs.org/) and hosted on a public S3 bucket. GitHub actions are used to automatically deploy to S3 whenever a branch is merged to master.

For development you'll need Node.js and either `npm` or `yarn` installed. Install the Gatsby command line interface with

```
yarn global add gatsby-cli
# OR
npm install -g gatsby-cli
```

then install this project's dependencies with

```
yarn install
# OR
npm install
```

finally run

```
gatsby develop
```

and navigate to `localhost:8000` to see a development build of the site.
