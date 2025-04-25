## Assignment 3: Pipelines

#### 3.1 Creating a pipeline

Up until now, GitHub has accepted every single Git push, whether the build was succeeding or not. 
The next step is to create a pipeline / GitHub workflow that builds on every commit, the same way we are doing locally. 

1.  Read the [quick start documentation](https://docs.github.com/en/actions/quickstart) at GitHub.
2.  Create a file called `.github-actions-demo.yml` in a folder called '.github/workflows' in the root of the project.

Try and experiment with the provided example that you found in the GitHub quickstart.

3.  Push the pipeline workflow definition to GitHub and verify that pipelines are being executed under `🚀 Actions` in your personal GitHub repository.

4.  Assuming your build is now green, you can continue with the next step.


#### 3.2 Building our project in the pipeline

Now we'll create an actual pipeline for our project. Inspired by the quickstart example above

1. Create a new job called 'Build & Test' and add a step that executes an `npm run build`: 
        
    Did you manage to get a green build? Great! Most likely however, the pipeline returned an error such as: 
    ```
    src/App.test.tsx(1,28): error TS2307: Cannot find module 'vitest' or its corresponding type declarations.
    Error: Process completed with exit code 2.
    ```
   or
   ```
   error: Unable to find package.json
   ```

    Why is this the case?

2. Create a second step called 'Test'
   This step should run the unit tests.

#### 3.3 Adding SonarQube to the build pipeline

Now that we have a basic build up and running in our pipeline we would also like to connect SonarQube reporting into the pipeline.

To connect with SonarQube we will need to have our SonarQube `url` and `token` available in the pipeline.

We don't want to have secrets or credentials stored in our version control system as they could show up in our (public) code base. Therefor we will need to register the secrets in github, so that we can use it later on in our pipeline.
You can do so for your repository under Settings -> Security -> Secrets .

In assignment 2.3.3 we've created an environment file. Add both environment variables to our pipeline and get the values from a GitHub secret stored in GitHub. See the links below on how to use environment variables in your pipeline.

#### 3.4 Limit the branches the CI will trigger on.

Our pipeline / workflow now triggers for every branch. Experiment with the workflow to see if you can limit the branches our CI pipeline gets triggered for.

#### Further reading:

* [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
* [GitHub Docs: Workflow syntax](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions)
* [Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
* [Environment Variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables)