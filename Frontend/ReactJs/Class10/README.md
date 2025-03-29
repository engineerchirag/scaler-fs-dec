## Setup a new app:
npm create vite@latest counter-app -- --template react


## Testting Env Setup:

1. Install npm install --save-dev vitest @testing-library/react @testing-library/dom

2. create setupTests.js & write below code
import '@testing-library/dom';

3. add below configuration in vite.config.js

....
export default defineConfig({
  ...
  test: {
    globals: true,
    setupFiles: "./setupTests.js",
  },
});


4. add script in package.json

"scripts": {
    ...
    "test": "vitest"
}

5. Run using npm run test

