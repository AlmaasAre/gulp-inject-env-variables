# gulp-inject-env-variables
Used to inject environment variables in code


## usage

Define environment variable in any file using this syntax: `<%=EnvironmentVariable:VARIABLE_NAME%>`. Pipe a stream of files to gulp-inject-env-variables with the env variables as argument.

A random file with to insert env variables into:
``` javascript

var config = {
    environment: '<%=EnvironmentVariable:environment%>',
    googleTrackingCode: '<%=EnvironmentVariable:googleTrackingCode%>'
};

app.boot(config);

```


```javascript
var injectEnvVariables = require('gulp-inject-env-variables');
var environmentVariables = {environment: 'production', googleTrackingCode:'1ijh1ihu3ih109u0'}

gulp.src('**/*.{js|html|scss...}
    .pipe(injectEnvVariables(environmentVariables))
    .pipe(gulp.dest('/'));

```