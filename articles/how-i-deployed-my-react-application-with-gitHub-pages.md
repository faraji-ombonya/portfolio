---
date: "2024-09-02"
title: "How I Deployed my React Application with GitHub Pages"
description: "After weeks of massive effort, I finally created my portfolio website and needed a place to deploy. The deployment options I had were Vercel, s3 site on AWS and github pages. I decided to go with github pages because it was free and also simple to deploy. GitHub Pages also had simple CI/CD already integrated. This meant that after a successful setup, all I needed to do was push to production and my application would be deployed."
---

# How I Deployed my React Application with GitHub Pages

After weeks of massive effort, I finally created my portfolio website and
needed a place to deploy. The deployment options I had were Vercel, s3
site on AWS and github pages. I decided to go with github pages because
it was free and also simple to deploy. GitHub Pages also had simple
CI/CD already integrated. This meant that after a successful setup,
all I needed to do was push to production and my application would
be deployed.

Before the application was ready to deploy, there are a couple of things I did
in the setup phase of the portfolio website that I think are worth mentioning.
To get started, I created the React application with Vite and Tailwind CSS.
Checkout this link to see how to initialize a react application with
[Tailwind CSS and Vite.](https://tailwindcss.com/docs/guides/vite)

To store vectors in my PostgreSQL database, I needed to set up pgvector.
Pgvector is an open source vector similarity search for Postgres.
[See Pgvectors documentation](https://github.com/pgvector/pgvector/blob/master/README.md)
to learn more about pgvector, see this for
[python specific documentation](https://github.com/pgvector/pgvector-python?tab=readme-ov-file#django)
to learn more about what it is and how to set it up. Pgvector allowed me to
store embeddings in a Postgresql database instead of a specialized vector
database.

After initializing the project, I then configured NPM to use the docs
directory as the output folder when building for production. This is
a trick I learnt after painful months of manually renaming my output
folder from build to docs. NPM by default uses the build folder as
its output folder while building for production. GH pages uses either
root or docs subdirectory for deployment. So, to configure my project
to output to the docs directory, all I had to do was to go to the
`vite.config.js` file and add to the configuration.

When I was finally ready to deploy the website. The next step was
to set up GH pages to use the master branch for deployment. To
set up GH pages:

1. Go to the repository, then settings, then GH pages.

   ![gh pages settings](/Screenshot-from-2024-08-25-22-05-19.png)

2. Select the deployment branch as master and the output folder as docs

   ![gh pages settings 2](/Screenshot-from-2024-08-25-22-06-42.png)

After Completing the setup I noticed that my site was appearing blank. After
digging around on the internet, I learnt that I needed to add a
`.nojekyll` file to prevent github pages from using jekyll to deploy
my site. To learn more about jekyll, checkout
[this link.](https://jekyllrb.com/docs/)

After Deploying the first site, It was perfect. But after deploying my second
site I started realizing some problems. Refreshing any client side urls
resulted in a 404 error page from GH Pages. After a little digging
on the internet, I learnt that refreshing meant that my client(browser)
was requesting for a resource that the server was not aware of.
There were a couple of solutions on how I could have solved this. See
[this link](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)
for more information about the nature of the problem and how to solve it.
Finally, I decided to use React Router Dom’s hash router with react router
dom instead of a browser router. The reason being that, in my particular
setup, I had multiple sites deployed on the same GH pages server, also
using the same base url. The downside to this approach at least in my
view is that it does not work with search engine optimization.

Page blocked because of disallowed Mime type. This is also another problem
I faced that I feel is worth mentioning. Checkout this
[discussion](https://github.com/vitejs/vite/discussions/13910) for more
information about the nature of the problem and ways to solve it.
I solved It by adding a base url in the `vite.config.js` file.
This made my application use the url as the base url for proper routing of asset files.
