# Laravel Elixir Hologram Extension

This extension uses [gulp-hologram](https://github.com/rejahrehim/gulp-hologram) which in turn uses the Trulia Hologram ruby gem.

## Install
```shell
npm install laravel-elixir-hologram --save-dev
```

## Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-hologram');

elixir(function(mix) {
    mix.hologram();
});
```

This will use the default yml file settings as defined by this extension and scan your `resources/assets/scss` directory for all scss files. Instead, if you want to user your own settings, you may create a `hologram.yml` file at the root of your project and do:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-hologram');

elixir(function(mix) {
    mix.hologram('hologram.yml');
});
```

## laravel-elixir-hologram default settings

* source: ../../resources/assets/scss
* destination: ../../public/styleguide
* documentation_assets: ../../resources/assets/hologram
* nav_level: all
* exit_on_warnings: false

## Hologram — Style Documentation Build System

To learn more about Hologram visit [trulia/hologram](https://github.com/trulia/hologram).
