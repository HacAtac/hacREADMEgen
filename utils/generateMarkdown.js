// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
    return ''
    case 'MIT':
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache':
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Boost':
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none'){
    return '';
  }else {
    return `- [License](#license)`
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license === 'none') {
    return '';
  }else {
    return `## License 
    ${license}`
  }
}
//generateMarkdown('sally');
  //generateMarkdown(9);
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log(data);
  const {description, title, install, languages, contribute, instructions, link, email, license} = data;
  console.log (description);
  return `
  # ${title}
  ${renderLicenseBadge(license)}
  ## Description
    ${description}
  
  ## Table of contents
  - [Installation](#installation)
  - [Languages](#languages)
  ${renderLicenseLink(license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
    ${install}
  
  ## Languages 
    ${languages}
  
  ${renderLicenseSection(license)}

  ## Contributing 
    ${contribute}
  
  ## Tests 
    ${instructions}
  
  ## Questions 
  Can reach me at following info:
    [Github Link](https://github.com/${link})
    [Email Adress] ${email}
  `;
}

module.exports = generateMarkdown;
