## Assignment 4: Deploying

#### 4.1 Create a new repository to use for staging


1. Create a new public repository `cicd-workshop-staging` in your user/organization account to be used for staging deployment.
- Click on your profile icon on top right corner and open Your repositories
- Press New to create a new repository
- Provide the repo name as `cicd-workshop-staging`
- Ensure to choose **Public**
- **Enable** the checkbox for adding the Readme
- Leave the rest of the options as default and click Create repository

2. Enable GitHub Pages settings for this repository.

- Go to `Settings` in your repository and click on `Pages`
- Please ensure that you have chosen a specific branch (`main` or `gh-pages` for instance) and `/(root)` folder. 
- Press save.
 
3. Create a [GitHub Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for your account. Add the permissions for the specific repo under `Contents` the **read and write** permissions. Store the value of the token in a good place, because you will need to use it later on.

#### 4.2 Continuous Delivery Workflow changes 

1. Go to the cicd-workshop-github-actions repository > Settings > Secrets > Actions
2. Create a new repository secret called TOKEN with the value from the PAT, which you created at the beginning of this exercise (section 4.1.1). 

#### 4.3 Deploying from the pipeline

1.  Add a new job inside the same workflow file within our application repository. The responsibility of this job will be to do the deployment. To share the end result (the package) of the build phase with the deployment job we will be [storing workflow data as artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts). 
2.  We will be using the [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages) action for deploying to GitHub pages in our new repository.
4.  Make sure the new job downloads the artifact.
5.  After downloading the artifact define a new step and configure the settings for publishing to the staging repo:
    ```
    - name: Deploy 
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        branch: main # The branch the action should deploy to in the staging repo.
        folder: dist # The folder the action should deploy.
        token: ${{ secrets.TOKEN }}
        repository-name: ${{ env.owner }}/${{ env.repo }}
    ```
    _note: you will need to define owner and repo yourself or hardcode replace it by a hardcoded value._
6.  Trigger a few commits and verify successful deployments of the application to the new repository.

#### 4.4 Deploying from different branches

1. Just like in the exercise 4.1 step 2 create a new repository but called: `cicd-workshop-production`.
2. Change the workflow file to trigger a deployment to the `cicd-workshop-staging` repository when a push is made to the `develop` branch. 
3. Change the workflow to trigger a deployment to the `cicd-workshop-production` repository when a push is made to the `main` branch.

### 5.0 Improvements (optional)

1. You might have placed all instructions inside a single Github workflow job. While this works, it's mixing responsibilities, so it's better to split up your pipeline into different jobs just like we've seen in the slides. Create 4 jobs (build, test, analysis, deploy) and split the responsibilities.
   You will probably need to use existing actions like [https://github.com/actions/upload-artifact](https://github.com/actions/upload-artifact) and [https://github.com/actions/download-artifact](https://github.com/actions/download-artifact) to prevent additional checkout of code for the 'test' and deploy 'phase'.
2. Make sure jobs within a workflow are dependent on the succes of the previous job
3. If you run your pipeline now it will always download dependencies. See if you can improve speed by adding dependency caching to your pipeline. See [https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows) for how to do that for nodejs based projects.

#### Further reading

- [Github Pages](https://pages.github.com)
- [Deploy to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages)


