import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import ErorrMassage from "./Error";

export default function News(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [fetchEror, setFetchError] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        let getNews = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=${props.currentPath}&apiKey=33c6a9a3b2b246f4a70bc7d88df75c76&page=${page}&pageSize=6`
        );
        let formattedNews = await getNews.json();
        let status = await formattedNews.status;
        setFetchError(status === "error" ? true : false);
        setNews(formattedNews.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    setPage(page + 1);
    fetchNews();
  }, []);

  const fecthMore = () => {
    setPage(page + 1);
    async function fetchMoreNews() {
      try {
        let getNews = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=${props.currentPath}&apiKey=33c6a9a3b2b246f4a70bc7d88df75c76&page=${page}&pageSize=6`
        );
        let formattedNews = await getNews.json();
        let status = await formattedNews.status;
        setFetchError(status === "error" ? true : false);
        setNews(news.concat(formattedNews.articles));
        setHasMore(formattedNews.totalResults === news.length ? false : true);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchMoreNews();
  };
  return (
    <div className="py-20 ">

      {fetchEror ? (
        <ErorrMassage/>
      ) : (
        <>
        <h1 className=" text-xl text-center font-bold"> You are viewing  { props.currentPath } news </h1>
        <InfiniteScroll
          className="flex flex-wrap gap-6 justify-center pt-10"
          dataLength={news.length}
          next={fecthMore}
          hasMore={hasMore}
          loader={<Loader />}
        >
          {news &&
            news.map((article, index) => (
              <NewsItem
                key={index}
                urlToImage={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://www.pakainfo.com/wp-content/uploads/2021/09/live-image-link.jpg"
                }
                title={
                  article.title == "[Removed]"
                    ? "this data has been removed "
                    : article.title
                }
                description={article.description}
                url={article.url}
              />
            ))}
        </InfiniteScroll>
        </>
      )}
    </div>
  );
}
