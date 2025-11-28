export const Article000001 = {
  date: {
    pubDatetime: "2024-09-02",
    pubDatetimeTitle: "September 2nd, 2024",
    pubDatetimeDisplay: "Sep. 2, 2024",
    display: "August 26, 2024",
    datetime: "2024-08-26",
  },
  description:
    "After weeks of massive effort, I finally created my portfolio website and needed a place to deploy. The deployment options I had were Vercel, s3 site on AWS and github pages. I decided to go with github pages because it was free and also simple to deploy. GitHub Pages also had simple CI/CD already integrated. This meant that after a successful setup, all I needed to do was push to production and my application would be deployed.",
  slug: "how-i-deployed-my-react-application-with-gitHub-pages",
  url: "/how-i-deployed-my-react-application-with-gitHub-pages",
  author: "Faraji Ombonya",
  title: "How I Deployed my React Application with GitHub Pages",
  lead: "",
  graphic: {
    src: "/gh-pages-react-banner.webp",
    alt: "digital art by Dall-E",
    caption: "Digital art by Dall-E",
  },
  linkText: "Read in 3 minutes",
  relatedPosts: [
    "how-to-train-a-word2vec-model",
    "how-i-built-a-library-search-engine-powered-by-vector-search",
  ],
  content: [
    {
      type: "p",
      value: [
        {
          type: "text",
          value:
            "Before the application was ready to deploy, there are a couple of things I did in the setup phase of the portfolio website that I think are worth mentioning. To get started, I created the React application with Vite and Tailwind CSS. Checkout this link to see how to initialize a react application with ",
        },
        {
          type: "link",
          value: "Tailwind CSS and Vite.",
          url: "https://tailwindcss.com/docs/guides/vite",
        },
      ],
    },
    {
      type: "p",
      value: [
        {
          type: "text",
          value:
            "To store vectors in my PostgreSQL database, I needed to set up pgvector. Pgvector is an open source vector similarity search for Postgres.  ",
        },
        {
          type: "link",
          value: "See Pgvectors documentation ",
          url: "https://github.com/pgvector/pgvector/blob/master/README.md",
        },
        {
          type: "text",
          value: "to learn more about pgvector,  see this for ",
        },
        {
          type: "link",
          value: "python specific documentation ",
          url: "https://github.com/pgvector/pgvector-python?tab=readme-ov-file#django",
        },
        {
          type: "text",
          value:
            "to learn more about what it is and how to set it up. Pgvector allowed me to store embeddings in a Postgresql database instead of a specialized vector database.",
        },
      ],
    },
    {
      type: "p",
      value:
        "After initializing the project, I then configured NPM to use the docs directory as the output folder when building for production. This is a trick I learnt after painful months of manually renaming my output folder from build to docs. NPM by default uses the build folder as its output folder while building for production. GH pages uses either root or docs subdirectory for deployment. So, to configure my project to output to the docs directory, all I had to do was to go to the vite.config.js file and add to the configuration.",
    },
    {
      type: "p",
      value:
        "When I was finally ready to deploy the website. The next step was to set up GH pages to use the master branch for deployment. To set up GH pages:",
    },
    {
      type: "ol",
      value: [
        {
          type: "li",
          value: [
            {
              type: "text",
              value: "Go to the repository, then settings, then GH pages. ",
            },
            {
              type: "image",
              src: "/blog/Screenshot from 2024-08-25 22-05-19.png",
              alt: "gh pages settings",
            },
          ],
        },
        {
          type: "li",
          value: [
            {
              type: "text",
              value:
                "Select the deployment branch as master and the output folder as docs ",
            },
            {
              type: "image",
              src: "/Screenshot from 2024-08-25 22-06-42.png",
              alt: "gh pages settings 2",
            },
          ],
        },
      ],
    },
    {
      type: "p",
      value: [
        {
          type: "text",
          value:
            "After Completing the setup I noticed that my site was appearing blank. After digging around on the internet, I learnt that I needed to add a .nojekyll file to prevent github pages from using jekyll to deploy my site. To learn more about jekyll, checkout ",
        },
        {
          type: "link",
          value: "this link.",
          url: "https://jekyllrb.com/docs/",
        },
      ],
    },
    {
      type: "p",
      value: [
        {
          type: "text",
          value:
            "After Deploying the first site, It was perfect. But after deploying my second site I started realizing some problems. Refreshing any client side urls resulted in a 404 error page from GH Pages. After a little digging on the internet, I learnt that refreshing meant that my client(browser) was requesting for a resource that the server was not aware of. There were a couple of solutions on how I could have solved this. See ",
        },
        {
          type: "link",
          value: "this link ",
          url: "https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually",
        },
        {
          type: "text",
          value:
            "for more information about the nature of the problem and how to solve it. Finally, I decided to use React Router Dom’s hash router with react router dom instead of a browser router. The reason being that, in my particular setup, I had multiple sites deployed on the same GH pages server, also using the same base url. The downside to this approach at least in my view is that it does not work with search engine optimization.",
        },
      ],
    },
    {
      type: "p",
      value:
        "Page blocked because of disallowed Mime type. This is also another problem I faced that I feel is worth mentioning. Checkout this link for more information about the nature of the problem and ways to solve it (https://github.com/vitejs/vite/discussions/13910). I solved It by adding a base url in the vite.config.js file base: https://faraji-ombonya.github.io/blog/, This made my application use the url as the base url for proper routing of asset files.",
    },
  ],
};
