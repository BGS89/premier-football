import { Container } from "react-bootstrap";
import { Header } from "../components/Header";
import { ArticleCard } from "../components/ArticleCard";
import { ArticlePlaceholder } from "../components/ArticlePlaceholder";

export function TheNews({ newsArticles, articlesLoading }) {
  if (articlesLoading) {
    return <ArticlePlaceholder />;
  }

  return (
    <Container>
      <Header title="News" />
      <main>
        <ul className="the-news">
          {newsArticles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                className={"news-article"}
              />
            );
          })}
        </ul>
      </main>
    </Container>
  );
}
