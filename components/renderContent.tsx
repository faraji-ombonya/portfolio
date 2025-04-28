/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type Props = {
  content: any;
};

export default function RenderContent({ content }: Props) {
  if (Array.isArray(content)) {
    return content.map((item, index) => (
      <RenderContent key={index} content={item} />
    ));
  }

  switch (content.type) {
    case "p":
      return (
        <p>
          {Array.isArray(content.value)
            ? content.value.map((item, index: string) => (
                <RenderContent key={index} content={item} />
              ))
            : content.value}
        </p>
      );
    case "h1":
      return <h1>{content?.value}</h1>;
    case "h2":
      return <h2>{content?.value}</h2>;
    case "h3":
      return <h3>{content?.value}</h3>;
    case "text":
      return <span>{content.value}</span>;
    case "link":
      return (
        <a href={content.url} target="_blank" rel="noopener noreferrer">
          {content.value}
        </a>
      );
    case "image":
      return (
        <figure>
          <Image
            src={content?.src}
            alt={content?.alt}
            width={1310}
            height={872}
          />
          <figcaption>{content?.alt}</figcaption>
        </figure>
      );
    case "ol":
      return (
        <ol>
          {content?.value?.map((item, index) => (
            <li key={index}>
              {Array.isArray(item.value)
                ? item.value.map((subItem, subIndex) => (
                    <RenderContent key={subIndex} content={subItem} />
                  ))
                : item.value}
            </li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul>
          {content?.value?.map((item, index) => (
            <li key={index}>
              {Array.isArray(item.value)
                ? item.value.map((subItem, subIndex) => (
                    <RenderContent key={subIndex} content={subItem} />
                  ))
                : item.value}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}
