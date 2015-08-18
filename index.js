var gulp = require('gulp'),
	Elixir = require('laravel-elixir'),
	hologram = require('gulp-hologram'),
	_ = require('underscore');

Elixir.extend('hologram', function(options) {

	var defaultOptions = {
		yml: './node_modules/laravel-elixir-hologram/config.yml'
	};

	options = _.extend(defaultOptions, options);

	new Elixir.Task('hologram', function() {
		gulp.src(options.yml)
			.pipe(hologram())
			.on('error', function(e) {
                new Elixir.Notification().error(e, 'Hologram Failed!');

                this.emit('end');
            })
			.pipe(new Elixir.Notification().message('Hologram Complete!'));
	})
	.watch([
		config.get('assets.css.sass.folder') + '/**/*',
		config.get('assets.css.less.folder') + '/**/*'
	]);
});
