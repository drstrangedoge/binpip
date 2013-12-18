var _ = require('lodash'),
    commands = require('./grunt');

require('colors');

module.exports = function(grunt){
    _.each(commands, function(cmd){
        grunt.registerTask(cmd.command, cmd.description, cmd.func);
    });

    grunt.registerTask('default', 'help function', function(){
        _.each(['░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░'.yellow,
            '░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░'.yellow,
            '░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░'.yellow,
            '░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░'.yellow,
            '░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░'.yellow,
            '░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░'.yellow,
            '░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░'.yellow,
            '░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░'.yellow,
            '░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░'.yellow,
            '░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░'.yellow,
            '▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░'.yellow,
            '▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌'.yellow,
            '▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░'.yellow,
            '░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░'.yellow,
            '░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░'.yellow,
            '░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░'.yellow,
            '░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░'.yellow,
            '░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░'.yellow,
            '░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░'.yellow], function(line){
            console.log(line);
        });

        var description = [
            '',
            'Available commands:'.underline
        ];

        _.each(description, function(line){
            console.log(line);
        });

        var tabs = Math.ceil(_.max(commands, function(c){ return c.command.length; }).command.length / 8);

        _.each(commands, function(cmd){
            console.log(cmd.command + Array(tabs - Math.floor(cmd.command.length / 8) + 2).join('\t') + cmd.description);
        });
    });
};
