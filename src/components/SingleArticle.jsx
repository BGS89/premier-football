import { useParams } from "react-router-dom";
import { fetchArticleById } from "../data/NewsData";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { NewsCarousel } from "./NewsCarousel";

export function SingleArticle({ newsArticles }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <Container>
      <main className="single-article">
        <Header title={article.title}></Header>
        <img src={article.article_img_url} alt="" />
        <div className="article-body">
          <h4>Wriiten by {article.author}</h4>
          <p>{article.body}</p>
        </div>
      </main>
      <NewsCarousel newsArticles={newsArticles} articleId={article_id} />
    </Container>
  );
}
