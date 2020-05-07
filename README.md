This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=alert_status)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=coverage)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=bugs)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=code_smells)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=ncloc)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ojousima_ojousima.network.react&metric=sqale_index)](https://sonarcloud.io/dashboard?id=ojousima_ojousima.network.react)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`
Runs linter on code to verify code style and warn about common pitfalls.

## Developing
1. First, check out the latest master from GitHub. `git pull`
2. Then, check out a branch describing the feature you want to add. `git checkout -b feature-pony`
3. Be sure to unit test your pony by writing `src/Pony.test.js`. Test driven development is encouraged.
4. Commit your tests. `git add src/Pony.test.js` `git commit -m "Add Pony tests"`.
5. Implement your pony in `src/Pony.js`. Remember to add JSDoc-comments to implementation.
6. Commit your pony `git add src/Pony.js` `git commit -m "Implement Pony"`.
7. Test your pony. `yarn test`.
8. Fix test errors.
9. Commit your fixes. `git add src/Pony.js` `git commit -m "Fix Pony"`.
10. Check test coverage. `yarn coverage`. Aim for at least 80% branch and line coverage on new code.
..* Add tests if coverage wasn't enough, go to 3.
11. Run eslint by `yarn lint`. 
12. Fix Lint errors. `yarn lint -- --fix` if you want the computer to fix syntax.
13. Commit your fixed file. `git add src/Pony.js` `git commit -m "Lint Pony"`.
..* If you made changes, go to 7.
14. Push your pony to GitHub. `git push origin pony`.
15. Open a pull request to origin/master on GitHub. 
16. Check continuous integration status checks. 
..* If checks fail, fix failing parts. 
17. Once checks pass, ask someone to review your work and merge the pull request.