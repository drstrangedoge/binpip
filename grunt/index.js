var fs = require('fs'),
    _ = require('lodash');

var commands = _.without(fs.readdirSync('./grunt'), 'index.js');

_.each(commands, function(command){
    var command = command.substr(0, command.lastIndexOf('.'));
    var cmd = require('./'+ command);

    module.exports[command] = {
        func: cmd.func,
        description: cmd.description || 'Description',
        command: command
    };
});