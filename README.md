# gulp-ccr-clean

Clean up destination folder. A cascading configurable gulp recipe for [gulp-chef](https://github.com/gulp-cookery/gulp-chef).

## Install

``` bash
$ npm install --save-dev gulp-chef gulp-ccr-clean
```

## Recipe

Clean

## Ingredients

* [del](https://github.com/sindresorhus/del)

## API

### config.options.force

Allow deleting the current working directory and files/folders outside it. Defaults to false.

### config.options.dryRun

See what would be deleted. Defaults to false.

## Usage

``` javascript
var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    dest: 'dist/',
    clean: {
    }
});

gulp.registry(meals);
```
