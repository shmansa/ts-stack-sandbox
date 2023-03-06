# Sandbox for experimenting in a TypeScript stack

1. To get started, clone this repository locally.
2. Build the Docker image using: `docker build -t ts-sandbox .`
3. Run the detached container with port 8080: `docker run -p 8080:8080 -d ts-sandbox`
4. View the server's response at [0.0.0.0:8080](http://0.0.0.0:8080)

## Running Tests using Jest

1. Build the docker image tagged `ts-sandbox` (see above)
2. Write tests in `ModuleName.test.ts` test suite file convention
3. Run with a volume to latest code and run the test script: `docker run -it ts-sandbox npm test`