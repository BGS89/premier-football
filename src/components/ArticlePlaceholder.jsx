import { Card, Placeholder } from "react-bootstrap";
import { SubHeader } from "./SubHeader";
import { loadingArticlesPlaceCards } from "../data/LoadingArticles";

export function ArticlePlaceholder() {
  return (
    <section className="news">
      <SubHeader title="Latest News" />
      <ul className="news-list">
        {loadingArticlesPlaceCards.map((article, index) => (
          <Card key={index} className={index === 0 ? "first-article" : ""}>
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </section>

    // <Card className={className}>
    //   <Card.Img variant="top" src={article.article_img_url} />
    //   <Card.Body>
    //     <Placeholder as={Card.Title} animation="glow">
    //       <Placeholder xs={6} />
    //     </Placeholder>
    //     <Placeholder as={Card.Text} animation="glow">
    //       <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
    //       <Placeholder xs={6} /> <Placeholder xs={8} />
    //     </Placeholder>
    //   </Card.Body>
    // </Card>
  );
}
