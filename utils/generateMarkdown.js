// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
    ${data.description}
  
  ## Table of contents
  - [Installation](#install)
  - [Languages](#languages)
  - [License](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  


  ## Installation <a id="install></a>
    ${data.install}
  ## Languages Used <a id="languages></a>"
    ${data.languages}
  ## License <a id="licence"></a>
    ${data.licence}
  ## Contributing <a id="contributing"></a>
    ${data.contribute}
  ## Test Instructions <a id="tests"></a>
    ${data.instructions}
  ## Questions <a id ="questions"></a>
    ${data.questions}
    [Github Link](https://github.com/${data.link})
    [Email Adress] ${data.email}
  ## Github: 
    ${data.link}
 
  ## Email:
      ${data.email}

`;
}

module.exports = generateMarkdown;
