var replaceTask = require('gulp-replace-task'),
    chalk = require('chalk');

function injectEnvironmentVariables(environmentVariables) {

    var pattern = '<%=EnvironmentVariable:(.*?)%>';
    var regex = new RegExp(pattern, 'g');

    return replaceTask({
        patterns: [
            {
                match: regex,
                replacement: function (fullMatch, envVariable) {
                    var envVariableValue = environmentVariables[envVariable];
                    if (typeof envVariableValue === 'undefined' || envVariableValue === null) {
                        var errormsg = 'No environment variable specified for ' + envVariable;
                        console.log(chalk.bold.red(errormsg));
                        throw new Error(errormsg);
                    } else {
                        return envVariableValue;
                    }
                }
            }
        ]
    })
};

module.exports = injectEnvironmentVariables;
