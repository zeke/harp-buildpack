# Harp Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for
deploying static sites to Heroku. It's powered by [Harp](http://harpjs.com/), a
Node.js server that automatically converts Jade, Markdown, EJS, CoffeeScript,
Sass, LESS and Stylus to HTML, CSS & JavaScript. You don't have to use
preprocessors though: this buildpack works with with regular old HTML, CSS, and
JavaScript files too.

## Deprecated!

I am no longer maintaining this repository. Feel free to continue using it, or fork your own.

The good news is, you can pretty easily run Harp apps on Heroku using the default Node.js buildpack:

- make sure your app has a `package.json` file. `npm init` is a good way to create one.
- `npm install harp --save` to add Harp to your package.json dependencies.
- `heroku config:unset BUILDPACK_URL` to make sure you're not using this buildpack any more.

Then set the following in your package.json `scripts` stanza:

```json
{
  "scripts": {
    "start": "NODE_ENV=production harp server -p $PORT",
    "dev": "harp server"
  }
}
```

The default node buildpack will use your `scripts.start` value to create a Procfile. Now all you have to do is `git commit` and `git push heroku master` and you should be back in business!

That's it!

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
