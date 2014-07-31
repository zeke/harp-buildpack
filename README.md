# Harp Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for
deploying static sites to Heroku. It's powered by [Harp](http://harpjs.com/), a
Node.js server that automatically converts Jade, Markdown, EJS, CoffeeScript,
Sass, LESS and Stylus to HTML, CSS & JavaScript. You don't have to use
preprocessors though: this buildpack works with with regular old HTML, CSS, and
JavaScript files too.

## Usage

```sh
mkdir my-harp-app
cd my-harp-app
echo "hello world" > index.html
git init
git add .
git commit -am "hello world"
heroku create my-harp-app
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack
git push heroku master
heroku open
```

## Custom Root Directory

If your directory structure doesn't play nicely with [harp's
defaults](http://harpjs.com/docs/environment/init), you can configure the path
from which the harp server is started:

```sh
heroku config:set HARP_ROOT=./doc -a my-harp-app
```

## Demo

Check out the sample app at [harp-sample.herokuapp.com](https://harp-sample.herokuapp.com/) and its source at [github.com/zeke/harp-sample](https://github.com/zeke/harp-sample).


## License

MIT
