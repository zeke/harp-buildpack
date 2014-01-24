# Heroku Buildpack for Static Sites with Harp

This is a Heroku buildpack for serving static sites using [Harp](http://harpjs.com/). Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript. You don't have to use preprocessors though: This buildpack works with with regular old HTML, CSS, and JavaScript files too.

## Requirements

You'll need an `index.jade` or `index.html` file in the root directory of your repository.

## Usage

Check out the sample app at
[github.com/zeke/harp-sample](https://github.com/zeke/harp-sample), or make your own from scratch:

```
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