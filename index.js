var gulp = require('gulp'),
	elixir = require('laravel-elixir'),
	Notification = require('laravel-elixir/ingredients/commands/Notification'),
	hologram = require('gulp-hologram'),
	_ = require('underscore');

elixir.extend('hologram', function(options) {

	var defaultOptions = {
		yml: './node_modules/laravel-elixir-hologram/config.yml'
	};

	options = _.extend(defaultOptions, options);

	var onError = function(e) {
		new Notification().error(e, 'Failed!');
		this.emit('end');
	};

	gulp.task('hologram', function() {
		gulp.src(config.yml)
			.pipe(hologram())
			.on('error', onError)
			.pipe(new Notification().message('Hologram Complete!'));
	});

	return this.queueTask('hologram');
});