import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ArticleCard({ article, className }) {
  const articleCardBody = article.body.slice(0, 100);

  return (
    <Link to={`/articles/${article.article_id}`} className={className}>
      <Card>
        <Card.Img
          variant="top"
          src={article.article_img_url}
          className="card-image"
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{articleCardBody}...</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
