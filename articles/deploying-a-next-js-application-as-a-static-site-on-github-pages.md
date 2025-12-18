---
title: "Deploying a NextJS Application as a Static Site on Github Pages"
date: "2025-12-17"
description: "Lets start with the problem. I a simple Next JS Application. "
---

# Deploying a NextJS Application as a Static Site on GitHub Pages

Lets start with the problem. I have a simple Next JS Application. I want it
deployed as a static site. The deployment platform should be free for life
and it should support CICD.

Okay, now let me show you how to use Github pages to check all these boxes.

## Introduction

Before we start, I'm assuming you already have your code, working locally and
pushed to github. Note that the repository must be publicly visible. To deploy
from a private repository, you will be required to upgrade your subscription.

## Setup Github Pages

![Setup](/deploying-a-next-js-static-site-on-github-pages/setup.png)

1. Go to the repository settings tab.
2. Click on the Pages tab to open the Github pages settings.
3. Select the source, deploy from a branch
4. select the branch and source folder, we have two options either root or docs.
   We will go with docs.
5. Save

## Setup NextJS

1. Next, update your Next js config file to output the export to the docs folder we pointed
   to earlier.

   `next.config.js`

   ```
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
   output: "export",
   distDir: "docs",
   };

   export default nextConfig;
   ```

2. Run `npm run build` command to build and export the project to the specified `distDir`.
   In our case, the `distDir` will be `docs`.

3. Add a `.nojekyll` file at the root of the deployment directory, in our case, the `docs`
   directory.

4. Add, commit and push.

## Notes

Rebuilding the application deletes the `.nojekyll` file in the `docs` folder. So,
remeber to create it after building.

Also, I'm not sure if adding the `.nojekyll` file every time you rebuild is the
best approach, if you find a better approach, please leave a comment below
this post on X describing your solution.

## References

1. [Configure publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
2. [Static Exports](https://nextjs.org/docs/app/guides/static-exports#configuration)
