export const TITLE = "Writing on software engineering and the tech industry.";

export const DESCRIPTION =
  "My featured long-form thoughts on software engineering and related topics.";

export const ARTICLES = [
  {
    date: {
      display: "September 07, 2024",
      datetime: "2024-09-07",
      pubDatetime: "2024-09-07",
      pubDatetimeTitle: "September 7th, 2024",
      pubDatetimeDisplay: "Sep. 7, 2024",
    },
    description:
      "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.",
    slug: "how-to-train-a-word2vec-model",
    url: "/how-to-train-a-word2vec-model",
    author: "Faraji Ombonya",
    title: "How to Train a Word2vec Model",
    lead: "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.",
    graphic: {
      src: "/Screenshot from 2024-09-07 13-02-53.png",
      alt: "",
      caption: "Digital art by Dall-E",
    },
    linkText: "Read in 5 minutes",
    relatedPosts: [
      "how-i-built-a-library-search-engine-powered-by-vector-search",
    ],
    content: [
      {
        type: "h2",
        value: "What is Word2vec",
      },
      {
        type: "p",
        value: [
          {
            type: "text",
            value:
              "Word2vec is a family of model architectures and optimizations that can be used to learn word embeddings from large datasets. See this ",
          },
          {
            type: "link",
            value: "documentation",
            url: "https://www.tensorflow.org/text/tutorials/word2vec",
          },
          {
            type: "text",
            value: " to learn more about Word2vec and how you can use it.",
          },
        ],
      },
      {
        type: "h2",
        value: "Prepare Training Data",
      },
      {
        type: "p",
        value: [
          {
            type: "text",
            value:
              "To train a Word2vec model, you will need data. The data will typically be a list of lists of tokens. We will call this list of lists of tokens, sentences. Each sentence in the collection of sentences will consist of a list of tokens.  Therefore, the majority of the work will be preparing the sentences. For large datasets, Word2vec’s documentation recommends that you stream the list directly from disk or network. This improves the memory efficiency of the function. To achieve this, we will create a python generator that streams one sentence at a time from the disk. See this ",
          },
          {
            type: "link",
            value: "python’s wiki",
            url: "https://wiki.python.org/moin/Generators",
          },
          {
            type: "text",
            value: " to learn more about generators and how to use them.",
          },
        ],
      },
      {
        type: "p",
        value:
          "Using a generator is memory efficient because we’re not loading the whole dataset in memory at once. Instead, we are loading chunks of 1000 rows and tokenizing and returning only one row at a time. It is also important to note that the generator function is wrapped inside a custom iterator class. This is because you can only iterate once over a generator. Introducing the class wrapper ensures that the Word2vec model can efficiently iterate over the dataset as many times as it would like.",
      },
      {
        type: "h3",
        value: "Initial setup",
      },
      {
        type: "image",
        src: "/Screenshot from 2024-09-07 19-14-08.png",
        alt: "inital setup",
        caption: "inital setup",
      },
      {
        type: "ol",
        value: [
          {
            type: "li",
            value: "Line 1 to 9 imports the necessary packages.",
          },
          {
            type: "li",
            value: "Line 12 to 17 Sets up the django environment.",
          },
        ],
      },
      {
        type: "h3",
        value: "Streaming the Data",
      },
      {
        type: "image",
        src: "/Screenshot from 2024-09-07 19-21-32.png",
        alt: "streaming the data",
        caption: "streaming the data",
      },
      {
        type: "ol",
        value: [
          {
            type: "li",
            value:
              "Line 20 defines a class called Corpus. This class encapsulates all the logic required to stream one tokenized sentence at a time.",
          },
          {
            type: "li",
            value:
              "Line 21 defines the dunder init method that initializes the class. ",
          },
          {
            type: "li",
            value: "Line 22 pre-compiles the regex for better performance. ",
          },
          {
            type: "li",
            value:
              "Line 23 Initializers BertTokenizer. We use Bert Tokenizer to tokenize the sentence to get a list of tokens. ",
          },
          {
            type: "li",
            value:
              "Line 24 creates a variable that contains the path to the dataset.",
          },
          {
            type: "li",
            value:
              "Line 26 defines the dunder iter method. The presence of a dunder iter method on our class means that you can iterate over an object instantiated from this class.",
          },
          {
            type: "li",
            value:
              "Line 27 and 28 The dunder iter method iterates over the iterator object returned by calling our generator function and yields the elements in the iterable. We wrap tqdm around our iterator object to get progress updates. See tqdm's documentation to learn more about it. (https://tqdm.github.io/)",
          },
          {
            type: "li",
            value:
              "Line 30 defines a sentence generator called sentences. A generator looks like a normal python function, but with one key difference. A generator yields an item in a collection instead of returning the entire collection like a function would.",
          },
          {
            type: "li",
            value:
              "Line 31 reads a chunk of the dataset from disk and starts a for loop to iterate over the chunk.",
          },
          {
            type: "li",
            value:
              "Line 32 uses the dataframe’s iterrows method to lazily iterate over each item in the dataframe ",
          },
          {
            type: "li",
            value: "Line 33 to 37 extracts attributes from each row.",
          },
          {
            type: "li",
            value: "Line 38 creates a sentence from the attributes",
          },
          {
            type: "li",
            value: "Line 39 cleans the sentence with the pre compiled regex",
          },
          {
            type: "li",
            value: "Line 40 tokenizes the sentence with tokenizer instance",
          },
          {
            type: "li",
            value: "Finally, line 42 yields the tokenized sentence",
          },
        ],
      },
      {
        type: "h2",
        value: "Training the model",
      },
      {
        type: "p",
        value:
          "After preparing the data, we can now use the tokenized sentences to train the Word2vec model.",
      },
      {
        type: "image",
        src: "/Screenshot from 2024-09-07 19-44-25.png",
        alt: "training the model",
        caption: "training the model",
      },
      {
        type: "ol",
        value: [
          {
            type: "li",
            value:
              "Line 45 saves the current time. This is used to track how long it takes the script to run.",
          },
          {
            type: "li",
            value:
              "Line 46 instantiates an iterable object from the custom iterable class called Corpus ",
          },
          {
            type: "li",
            value:
              "Line 48 to 55 is where the actual training happens. To train the model, we instantiate the Word2Vec class and pass parameters to the class's constructor function. The parameters are as follows: ",
          },
          {
            type: "ul",
            value: [
              { type: "li", value: "sentences: A list of lists of tokens" },
              {
                type: "li",
                value: "vector_size: Dimensionality of the word vectors.",
              },
              {
                type: "li",
                value:
                  "window: maximum distance between the current word and the predicted word within a sentence",
              },
              {
                type: "li",
                value: "epochs: Number of iterations over the corpus",
              },
              {
                type: "li",
                value:
                  "min_count: the number of times a word has to appear in the corpus to be included in the models library",
              },
            ],
          },
          {
            type: "li",
            value:
              "Line 57 to 60 saves two versions of the  model do disk, the binary and the text version.",
          },
          {
            type: "li",
            value:
              "Line 62 to 64 calculates and prints to the console how long the script took to run.",
          },
        ],
      },
      {
        type: "h2",
        value: "Conclusion",
      },
      {
        type: "p",
        value:
          "Training a Word2vec model involves preparing the dataset by efficiently reading the dataset from disk, and passing data to the model’s constructor function. Finally, the model can be saved to disk and later loaded by an application that intends to use it.",
      },
    ],
  },
  {
    date: {
      display: "September 2, 2024",
      datetime: "2024-08-26",
      pubDatetime: "2024-08-26",
      pubDatetimeTitle: "August 26th, 2024",
      pubDatetimeDisplay: "Aug. 26, 2024",
    },
    description:
      "Keyword search sometimes is not enough. Sometimes you want to search based on meaning. This is where vector search comes in. In this article, I want to take you through how I built a Library Search Engine that is powered by vector search.",

    slug: "how-i-built-a-library-search-engine-powered-by-vector-search",
    url: "/how-i-built-a-library-search-engine-powered-by-vector-search",
    author: "Faraji Ombonya",
    title: "How I Built a Library Search Engine Powered by Vector Search",
    lead: "Keyword search sometimes is not enough. Sometimes you want to search based on meaning. This is where vector search comes in. In this article, I want to take you through how I built a Library Search Engine that is powered by vector search.",
    graphic: {
      src: "/vector-search-banner.webp",
      alt: "",
      caption: "Digital art by Dall-E",
    },
    linkText: "Read in 5 minutes",
    relatedPosts: ["how-to-train-a-word2vec-model"],
    content: [
      {
        type: "h2",
        value: "Setting up the vector database",
      },
      {
        type: "p",
        value:
          "To store vectors in my PostgreSQL database, I needed to set up pgvector. Pgvector is an open source vector similarity search for Postgres. See Pg Vectors documentation (https://github.com/pgvector/pgvector/blob/master/README.md),  se this for python specific documentation (https://github.com/pgvector/pgvector-python?tab=readme-ov-file#django) to learn more about what it is and how to set it up. Pgvector allowed me to store embeddings in a Postgresql database instead of a specialized vector database.",
      },
      { type: "h2", value: "Training the Word2Vec model" },
      {
        type: "p",
        value:
          "To train the Word2Vec model, I created a script that loads the dataset with pandas, iterates over each book. Takes important attributes e.g name, description etc. and builds a chunk of text with information about the book. We will call this chunk of text a sentence. It then tokenizes the sentences with BertTokenizer. BertTokenizer will transform the sentence into lowercase  and split the sentence into a list of tokens. It then takes a list of all tokenized sentences and passes them to the Word2Vec model for training. After successful training, the model is saved to a file. ",
      },
      { type: "h2", value: "Seeding the database" },
      {
        type: "p",
        value:
          "Seeding the database involved the following steps. Creating a script that  uses pandas to load the dataset from a csv file. Uses iterrows method from the dataframe object to efficiently iterate over the dataset and create a book object from each line. Loading the list of books into the database in bulk. ",
      },
      { type: "h2", value: "Generating embeddings" },
      {
        type: "p",
        value:
          "Embeddings are vector representations of words that contain meaning. To generate embeddings, I started by iterating over all book objects in the database. Next, using the attributes of each book, I created a sentence. A sentence, in this context, is a group of texts that describe an object. For instance, the attributes of a book object e.g the book’s title, description, authors e.t.c. make up a sentence.  I then tokenized the sentence with BertTokenizer. After tokenization, I ended up with a list of tokens. Thereafter, I filtered out invalid tokens by checking that each token was present in the model’s keyed vectors. I then created a list of vectors. Each Item in the list was a vector representation of each token. I then averaged the vectors with numpy’s mean method to get one average embedding. I then used the average embedding to update the book’s embedding field and saved the object.",
      },
      {
        type: "h2",
        value:
          "Generating embeddings and seeding the database at the same time",
      },
      {
        type: "p",
        value:
          "I also decided to add another script that generates embeddings and seeds the database at the same time. This is different from previous approaches where seeding and generating embeddings happened in two separate steps. I started by creating a book generator. A generator in python is an iterable that yields the next item in the sequence when needed. The generator loads the dataset with pandas. Uses the dataframe’s iterrows methods to iterate over rows in the dataset. Each row in the dataset represents a book. The generator then creates a book object that also includes the book’s embeddings and finally yields the book. I then loaded the books into the database by using Book.objects created in bulk method and passing the books generator as an iterable. ",
      },
      {
        type: "p",
        value:
          "There are several advantages to this approach. One, we’re leveraging django ORM’s create_bulk etc. The limitations to this approach is it is only useful if you need to clear the whole database, It does not make sense If your database already has items.",
      },
      { type: "h2", value: "API" },
      { type: "h3", value: "Model" },
      {
        type: "p",
        value:
          "A Django model that represents a book with attributes such as title, description, authors, publisher and embeddings. The embeddings property stores the embeddings of the book. ",
      },
      { type: "h3", value: "Serializer" },
      { type: "p", value: "A simple Django rest framework model serializer" },
      { type: "h3", value: "View" },
      {
        type: "p",
        value:
          "After setting up the model and the searializer, the next step was to write the logic that would leverage the setup to serve search request. I therefore started by getting the submitted search term from the request object and applied regex on it to remove special characters. Next, I used BertTokenizer to tokenize the search term. Using BertTokenizer on a sentence returns a list of tokens. I then filtered out valid tokens by checking that the token exists in the model’s keys vectors. I then used numpy’s mean method to get the average embeddings for the list of tokens. ",
      },
      {
        type: "p",
        value:
          "After preprocessing the search term and getting its vector representation, I was now ready to perform a query that retrieves items with similar embeddings. I achieved this by using the CosineDistance function provided by pgvector.django package to annotate each item in the queryset with a distance relative to the search embeddings. After annotating, I ordered the items by the annotated distance and applied a filter that only gets items with a distance of less than 0.5 from the search term embeddings. Finally, I prepared the response by paginating the queryset and including relevant metadata before returning the response.",
      },
      { type: "h2", value: "Conclusion" },
      {
        type: "p",
        value:
          "In conclusion, to leverage vector search to power search I had to: Setup pg vector, train a Word2Vec model, use the model to generate embeddings. Store those embeddings in a vector database, use Cosine distance to perform similarity search.",
      },
    ],
  },
  {
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
    lead: "After weeks of massive effort, I finally created my portfolio website and needed a place to deploy. The deployment options I had were Vercel, s3 site on AWS and github pages. I decided to go with github pages because it was free and also simple to deploy. GitHub Pages also had simple CI/CD already integrated. This meant that after a successful setup, all I needed to do was push to production and my application would be deployed.",
    graphic: {
      src: "/gh-pages-react-banner.webp",
      alt: "",
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
  },
];
