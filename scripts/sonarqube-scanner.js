const scanner = require('sonarqube-scanner');
require('dotenv').config()

console.log(process.env)

scanner(
  {
  serverUrl: process.env.SONAR_URL,
  token: process.env.SONAR_TOKEN,
  options: {
    "sonar.sources": "./src",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx"
  },
},
() => process.exit()
);