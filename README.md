# Harp Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for deploying static sites to Heroku. It's powered by [Harp](http://harpjs.com/), a Node.js server that automatically converts Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus to HTML, CSS & JavaScript. You don't have to use preprocessors though: this buildpack works with with regular old HTML, CSS, and JavaScript files too.

## Requirements

You'll need an `index.jade` or `index.html` file in the root directory of your app.

## Demo

Check out the sample app at [harp-sample.herokuapp.com](https://harp-sample.herokuapp.com/) and its source at [github.com/zeke/harp-sample](https://github.com/zeke/harp-sample).

## Usage

```sh
mkdir my-harp-app
cd my-harp-app
echo "hello world" > index.html
git init
git add .
git commit -am "hello world"
heroku create my-harp-app
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
git push heroku master
heroku open
```

## License

MIT