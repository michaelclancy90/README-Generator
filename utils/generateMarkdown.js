// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} 
   

  ## Description
  ${data.description}

## Table of Content

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Licenses](#Licenses)
* [Credits](#Credits)


## Installation
  ${data.installation}

## Usage
  ${data.usage}  
## Contributing
${data.Contributing}
## Tests
${(data.Tests)}

## Licenses    
${data.license}
  
## Questions    
To view my [repository](https://github.com/${data.github}). </br>
If you have any further questions, please email on ${data.email}
`;
}

module.exports = generateMarkdown;
