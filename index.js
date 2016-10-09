var fs = require('fs');
var gulp = require('gulp');
var yaml = require('js-yaml');
var elixir = require('laravel-elixir');
var hologram = require('gulp-hologram');

elixir.extend('hologram', function(yamlFile) {

    yamlFile = yamlFile || './node_modules/laravel-elixir-hologram/config.yml';

    new elixir.Task('hologram', function() {
        var err = function(e) {
            new elixir.Notification().error(e, 'Hologram Failed!');
            this.emit('end');
        };

        if(typeof this.recordStep !== 'undefined') {
            var doc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));

            this.recordStep('Building Style Guide');
            this.src = doc.source;
            this.output = doc.destination;
        }

        gulp.src(yamlFile)
            .pipe(hologram())
            .on('error', err)
            .pipe(new elixir.Notification().message('Hologram Complete!'));
    })

    .watch([
        elixir.config.get('assets.css.sass.folder') + '/**/*',
        elixir.config.get('assets.css.less.folder') + '/**/*'
    ]);

});
