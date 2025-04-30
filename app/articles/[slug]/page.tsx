import Image from "next/image";

import { getArticle } from "@/utils/utils";
import RenderContent from "@/components/renderContent";
import BackButton from "@/components/backButton";
import { ARTICLES } from "@/utils/data/articles";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;

  const article = getArticle(slug);

  return (
    <main className="flex-auto w-full">
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  <BackButton />
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {article?.title}
                      </h1>
                      <time
                        dateTime={article?.date?.datetime}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        <span className="ml-3">{article?.date?.display}</span>
                      </time>
                    </header>
                    {article && (
                      <div
                        className="mt-8 prose dark:prose-invert"
                        data-mdx-content="true"
                      >
                        <p>{article.lead}</p>

                        {article && (
                          <>
                            <Image
                              src={article.graphic.src}
                              alt={article.graphic.alt}
                              width={1310}
                              height={872}
                            />
                            <figcaption>{article.graphic.caption}</figcaption>
                          </>
                        )}

                        <RenderContent content={article.content} />
                      </div>
                    )}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
