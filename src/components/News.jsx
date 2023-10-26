import { ArticleCard } from "./ArticleCard";
import { SubHeader } from "./SubHeader";
import { LinkButton } from "./LinkButton";
import { ArticlePlaceholder } from "./ArticlePlaceholder";

export function News({ newsArticles, articlesLoading }) {
  const topThreeArticles = newsArticles.slice(0, 3).map((article) => {
    return article;
  });

  if (articlesLoading) {
    return <ArticlePlaceholder />;
  }

  return (
    <section className="news">
      <SubHeader title="Latest News" />
      <ul className="news-list">
        {topThreeArticles.map((article, index) => (
          <ArticleCard
            key={article.article_id}
            article={article}
            className={index === 0 ? "first-article" : "news-article"}
          />
        ))}
      </ul>
      <LinkButton linkTo={"/news"} text={"More News"} />
    </section>
  );
}
