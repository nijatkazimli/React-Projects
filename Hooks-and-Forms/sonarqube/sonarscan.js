const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c3e463ee427c408ab1a787d72a890dca7554e893",
        options: {
            'sonar.projectName': 'lab4',
            'sonar.projectKey': 'lab4',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.sources': "./src"
        }
    },
    () => process.exit()
)