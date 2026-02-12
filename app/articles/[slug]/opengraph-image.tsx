import { ImageResponse } from "next/og";
import { getArticleData } from "@/utils/utils";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

// Image generation
export default async function Image({ params }: Props) {
  const { slug } = await params;

  const article = await getArticleData(slug);
  const { id, title, description } = article;

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        // background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <article key={id} className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="md:col-span-3 group relative flex flex-col items-start">
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <span className="relative z-10">{title}</span>
          </h2>

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
      </article>
    </div>,
  );
}
