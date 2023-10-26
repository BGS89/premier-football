import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-npk0.onrender.com/api",
});

export function fetchNewsArticles() {
  return ncNewsApi.get(`/articles?topic=football`).then((response) => {
    return response.data.articles;
  });
}

export function fetchArticleById(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}
