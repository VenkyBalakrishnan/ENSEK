# **Instruction to run the Cypress project**




# **Pre requisites**

Install VS Code (latest)

Install Node js (latest)

## **Create node package**

npm init

## **Installing Cypress**

npm install cypress

## **Basic Usage**

**Open cypress**

npx cypress open

**Run all features**

npx cypress run

**Run all features on specific browser**

npx cypress run --browser chrome

**Run all features on headless mode**

npx cypress run --headless

**Run a specific feature file**

npx cypress run --spec cypress/e2e/{featurefile.feature}

**Run multiple feature files**

npx cypress run --spec "cypress/e2e/*.feature"  --browser chrome
