import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({ title, date, excerpt, slug }: Props) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-8 md:mb-8 ">
        <div>
          <h3 className="text-3xl mb-3 leading-snug hover:underline">
            {title}
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
