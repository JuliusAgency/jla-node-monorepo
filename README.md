## Julius Agency Node packages Monorepo
<p>
  <a href="https://github.com/JuliusAgency/jla-node-monorepo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/jla-node-monorepo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/jla-node-monorepo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


Monorepo for development and deployment Nodejs packages  

### The monorepo file system tree:

├── .eslintrc  
├── .github  
│     └── workflows  
│       ├── {package-name}-github.yaml  
│       ├── {package-name}-npm.yaml  
│       └── {package-name}-test.yaml  
├── .gitignore  
├── husky  
│   ├── _  
│   ├── pre-commit  
│   └── pre-push  
├── .npmignore  
├── .prettierrc  
├── .vscode  
│   └── settings.json  
├── README.md  
├── babel.config.json  
├── jest.config.ts  
├── package-lock.json  
├── package.json  
├── development  
│   ├── actions_templates  
│   │   ├── new-package-github.yaml  
│   │   ├── new-package-npm.yaml  
│   │   └── new-package-test.yaml  
│   └── package_template  
│       ├── babel.config.json  
│       ├── package.json  
│       ├── readme.md  
│       ├── src  
│       │   └── index.ts  
│       ├── test  
│       │   └── index.test.ts  
│       ├── tsconfig.cjs.json  
│       └── tsconfig.esm.json  
├── packages  
│   └── {package-name}  
│       ├── babel.config.json  
│       ├── package.json  
│       ├── readme.md  
│       ├── src  
│       │   └── index.ts  
│       ├── test  
│       │   └── index.test.ts  
│       ├── tsconfig.cjs.json  
│       └── tsconfig.esm.json  
├── tree.txt  
├── tsconfig.base.json  
├── tsconfig.cjs.json  
└── tsconfig.esm.json  


### The monorepo development infrastructure

[Typescript](http://www.typescriptlang.org/),  
[ESLint](https://www.npmjs.com/package/eslint) - a static code analysis tool,     
[prettier](https://www.npmjs.com/package/prettier) - a code formatter,  
[jest](https://www.npmjs.com/package/jest) - a testing framework,  
[husky](https://www.npmjs.com/package/husky) - a tool that allows to use Git hooks,  
[rimraf](https://www.npmjs.com/package/rimraf) - a deep deletion module for node.  
[move-file-cli](https://www.npmjs.com/package/move-file-cli) - a cross-platform alternative to mv for build scripts, etc.  
[semantic-release](https://www.npmjs.com/package/semantic-release) - automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package
[cz-conventional-changelog"]() - Prompts for conventional changelog standard. 

### Get started
#### 1. Clone the monorepo, install and activate git hooks

  Activate the git hooks:
  ```bash
  npm run prepare
  ```

#### 2. Create a package project

  Run the script
  ```bash
  $ ./development/create-pack.bash private(public) <new-package-name>
  ```
  
  It will be:
    - create a folder under the packages folder;  
    - copy the package template to the appropriate directory;  
    - copy the actions templates to the .github/workflows;  
  
  After that:
  In the package.json file:   
    - change "package-name" to the "new-package-name";  
    - edit the "dependencies" and "devDependencies" sections if need;  

  In the .github/workflows folder:
    - edit the package new files;  

  Install (update package-lock.json):
  ```bash
  npm install 
  ```
#### 3. Write a package code , pack and tests locally:
  - Packaging:
  ```bash
  npm run pack:local
  ```
  - Testing:
  Copy path a juliusagency-{package-name}-0.0.0-development.tgz
  Install the package from root directory of a node application project:
  ```bash
  npm i @juliusagency-{package-name}-0.0.0-development.tgz
  ```

#### 4. Prepare to publish a package: 
##### 4.1. [Sign up with npm](https://www.npmjs.com/signup).
##### 4.2. Sign in with your npm account in the terminal:
    ```bash
    npm login 
    follow the on-screen instructions
    ```
#### 5. Publish a package:
##### 5.1. Manual publishing:
 - Check the contents that will be included in the published version of the package:
    ```bash
    npx npm-packlist-cli
    ```
 - See what would be done when actually running the command:
    ```bash
    npm publish --dry-run
    ```
 - publish the package to npm:
    ```bash
    npm publish --access=public
    ```
    Note: --access=public is needed for scoped package (`@juliusagency/<package-name>`)   
      as it's private by default. If it's not scoped and doesn't have the `private`   
      field set to `true` in `package.json` it will be public as well.  
##### 5.2 Automated publishing:
    The publishing process is defined via Github Actions:
    - <package-name>-test.yaml - build and tests.
    - <package-name>-npm.yaml - publish the package to the npm registry.
    - <package-name>-github.yaml - make package link to the Github registry.
    The actions will run automatically after each push and pull-request.
    Note: Before running the GitHub Actions, set this two environment variables:  
        GITHUB_TOKEN – go to GitHub and select your repository.  
        Then go to Settings/Actions/General.  
        Find a section called “Workflow permissions”.  
        Ensure that “Read and write permissions” is selected for the GITHUB_TOKEN.  
        We need this to push the newly generated package version to the repository.  
        NPM_TOKEN – in your NPM account, go to the “Access Tokens” page and create a new classic token.  
        The type of the new access token should be “Automation”.  
        Copy the token and go to GitHub.  
        In the repository, navigate to “Settings” and “Secrets”.  
        Add a new repository secret named NPM_TOKEN and paste the access token you created in NPM.


### Usage the commands from the command line during the development:

Run a npm script for all packages from the project root:
```bash
npm run <script-name>
```

Run a npm script for a single package from the project root:
```bash
npm run <script-name> -w packages/private(public)/<package-name>
```

Linting:
```bash
npm run lint
npm run lint:fix
```
Commit (use the command instead of git commit for write a conventional message):
```bash
npm run commit
```
Testing:
```bash
npm test
```
Clean build output:
```bash
npm run clean
```
Build:
```bash
npm run build:esm
npm run build:cjs
npm run build
```
Prepack:
```bash
npm run prepack
```
Pack for local installation:
```bash
npm run pack:local
```
### Dynamic loader
[Import](https://medium.com/@nlfernando11/javascript-dynamically-import-c2b890d75b5a)  
[TS](https://marketsplash.com/tutorials/typescript/import-typescript/)