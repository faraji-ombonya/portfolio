import Image from "next/image";

export default function About() {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <Image
                      alt=""
                      loading="lazy"
                      width="800"
                      height="800"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover "
                      style={{ color: "transparent" }}
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      src="/1699168535873.jpeg"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    I’m Faraji Ombonya. I live in Nairobi, Kenya, where I build
                    the future.
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                      <strong>Overview:</strong> I am a seasoned Backend
                      Engineer with over four years of experience designing and
                      developing scalable, resilient systems. My expertise spans
                      multiple programming languages, frameworks, and tools,
                      with a strong emphasis on backend development, mobile and
                      web applications, data science, and DevOps practices. I
                      excel at delivering high-quality, well-tested code and
                      optimizing system performance to meet complex business
                      requirements.
                    </p>
                    <p>
                      <strong>Programming & Development:</strong> I am
                      proficient in Python, JavaScript/TypeScript, Go, PHP,
                      HTML5, and CSS3, enabling me to build robust applications
                      across the stack. In backend development, I leverage
                      frameworks like Django, Django REST Framework, Flask, and
                      FastAPI (Python), AdonisJS (TypeScript), Gin (Go), and
                      Laravel (PHP) to create scalable RESTful APIs. For
                      frontend and mobile development, I use React, Next.js,
                      React Native, and Expo with TypeScript, enhanced by
                      asynchronous state management with TanStack Query. My
                      Python expertise extends to data validation with Pydantic,
                      static typing with MyPy, task scheduling with Celery, ORM
                      with SQLAlchemy, and web scraping with Beautiful Soup. I
                      ensure code quality through rigorous unit testing using
                      pytest, unittest, and coverage.py.
                    </p>
                    <p>
                      <strong>Data Science & Machine Learning:</strong> I have
                      strong skills in data science and machine learning,
                      utilizing Python libraries such as pandas, NumPy,
                      Matplotlib, scikit-learn, Hugging Face, Gensim (Word2Vec),
                      and Jupyter. These tools enable me to perform data
                      analysis, visualization, and natural language processing,
                      delivering actionable insights and models for various
                      applications.
                    </p>
                    <p>
                      <strong>Database & Storage:</strong> My experience in
                      database management includes relational databases like
                      MySQL and PostgreSQL, NoSQL databases such as MongoDB and
                      DynamoDB, and in-memory data stores like Redis. I am
                      skilled in managing object storage with Amazon S3 and
                      Azure Blob Storage, as well as implementing message
                      brokering with RabbitMQ to support efficient system
                      communication.
                    </p>
                    <p>
                      <strong>DevOps & CI/CD:</strong> I am adept at DevOps
                      practices, including source code control with Git and
                      GitHub, containerization with Docker, Docker Compose,
                      Kubernetes, and Minikube, and continuous integration with
                      GitHub Actions. I deploy APIs using NGINX, monitor
                      applications with Sentry, and conduct load testing with
                      Locust. For project management, I utilize Notion, Jira,
                      and GitHub Projects, while API testing and documentation
                      are streamlined with Postman and drf-spectacular
                      (Swagger-UI, Redoc).
                    </p>
                    <p>
                      <strong>Key Strengths:</strong> My ability to build
                      scalable backend systems, RESTful APIs, and full-stack
                      applications, combined with expertise in data science and
                      DevOps, positions me as a versatile engineer. I am
                      committed to delivering reliable, high-performance
                      solutions, with a focus on clean code, thorough testing,
                      and efficient system architecture to drive business
                      success.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li className="flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="https://twitter.com/FarajiOmbonya"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                        </svg>
                        <span className="ml-4">Follow on X</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="https://github.com/faraji-ombonya"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                          ></path>
                        </svg>
                        <span className="ml-4">Follow on GitHub</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="https://linkedin.com/in/faraji-ombonya"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                        </svg>
                        <span className="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-zinc-100 pt-8  flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="mailto:farajiombonya@gmail.com"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                          ></path>
                        </svg>
                        <span className="ml-4">farajiombonya@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
