import Link from "next/link";

import { getSortedArticlesData } from "@/utils/utils";

export default function ArticlesPage() {
  const articles = getSortedArticlesData();

  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Writing on software engineering and the tech industry.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  My featured long-form thoughts on software engineering and
                  related topics.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 ">
                  <div className="flex max-w-3xl flex-col space-y-16">
                    {articles?.map(({ id, title, date, description }) => (
                      <article
                        key={id}
                        className="md:grid md:grid-cols-4 md:items-baseline"
                      >
                        <div className="md:col-span-3 group relative flex flex-col items-start">
                          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                            <Link href={`/articles/${id}`}>
                              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                              <span className="relative z-10">{title}</span>
                            </Link>
                          </h2>
                          <time
                            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400  pl-3.5"
                            dateTime={date}
                          >
                            <span
                              className="absolute inset-y-0 left-0 flex items-center"
                              aria-hidden="true"
                            >
                              <span className="h-4 w-0.5 rounded-full bg-zinc-200 "></span>
                            </span>
                            {date}
                          </time>
                          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {description}
                          </p>
                          <div
                            aria-hidden="true"
                            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                          >
                            Read article
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                              className="ml-1 h-4 w-4 stroke-current"
                            >
                              <path
                                d="M6.75 5.75 9.25 8l-2.5 2.25"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <time
                          className="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                          dateTime="2022-09-05"
                        >
                          {date}
                        </time>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
