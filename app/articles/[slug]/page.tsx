import BackButton from "@/components/backButton";
import { getAllArticleIdsV2, getArticleData } from "@/utils/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleIdsV2();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const article = await getArticleData(slug);

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function Article({ params }: Props) {
  const { slug } = await params;

  const article = await getArticleData(slug);

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
                      <time
                        dateTime={article.date}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        <span className="ml-3">{article.date}</span>
                      </time>
                    </header>

                    <div
                      className="mt-8 prose dark:prose-invert"
                      data-mdx-content="true"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: article.contentHtml,
                        }}
                      />
                    </div>
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
