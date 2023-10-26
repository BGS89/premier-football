import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NewsCarousel({ newsArticles, articleId }) {
  const filteredNewsArticles = newsArticles.filter(
    (article) => article.article_id != articleId
  );

  return (
    <section className="carousel">
      <h3>More News Stories</h3>
      <Carousel>
        {filteredNewsArticles.map((article) => (
          <Carousel.Item key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <div className="carousel-image-container">
                <img
                  src={article.article_img_url}
                  alt="article image showing different footballs and pitches"
                  className="article-image"
                />
              </div>
              <Carousel.Caption className="carousel-caption">
                <h3>{article.title}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
