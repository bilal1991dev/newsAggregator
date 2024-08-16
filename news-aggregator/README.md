

## To deploy Docker: Build and Run the Docker Image

1. Open Command Prompt or PowerShell.

2. Navigate to your project directory:

    ```bash
    cd path\to\your\project
    ```

3. Build the Docker image:

    ```bash
    docker build -t news-aggregator .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 3000:3000 news-aggregator
    ```

Your React app should now be accessible at `http://localhost:3000`.

## `To run the project Locally follow the below insructions`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### `npm run build` fails to minify