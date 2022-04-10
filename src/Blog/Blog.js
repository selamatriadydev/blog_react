import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ArticleAll from "./ArticleAll";
import ArticleDetail from "./ArticleDetail";
import ArticleMenu from "./ArticleMenu";
import Pagination from "react-js-pagination";

function Blog(){
     //home
    const [artcle, setArticle] = useState([]);
    const [populer, setPopuler] = useState([]);
    const [terbaru, setTerbaru] = useState([]);
    const [category, setCategory] = useState([]);
    const [tag, setTag] = useState([]);
    const [archive, setArchive] = useState([]);
    const [activePage, setActivePage] = useState(10);
    const [perPage, setPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(10);
    //detail 
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://blog.selamatriadydev.com/api/v1/blog';
    const url_image = 'https://blog.selamatriadydev.com';
    //detail 
    const {parslug } =useParams();
    const {parcategory } =useParams();
    const {partag } =useParams();
    const {paryear } =useParams();
    //home
    const getDataHome = async (page = 1) => {
        try {
          const response = await axios.get(`${url}?page=${page}`);
          // console.log(response.data.article.data);
          setArticle(response.data.article.data);
          setActivePage(response.data.article.current_page);
          setPerPage(response.data.article.per_page);
          setTotalItems(response.data.article.total);

          setPopuler(response.data.article_populer);
          setTerbaru(response.data.article_terbaru);
          setCategory(response.data.category);
          setTag(response.data.tags);
          setArchive(response.data.archive);
          setError(null);
        } catch (err) {
          setError(err.message);
          setArticle([]);
          setPopuler([]);
          setTerbaru([]);
          setCategory([]);
          setTag([]);
          setArchive([]);
        } finally {
          setLoading(false);
        }
      };
    //detail
    const getDataDetail = async (slug) => {
        try {
          const response = await axios.get(`${url}/${slug}`);
          // console.log('detail',response.data);
          setDetail(response.data);
          setError(null);
        } catch (err) {
          setError(err.message);
          setDetail({});
        } finally {
          setLoading(false);
        }
      };
    //category group
    const getCategoryGroup = async (parcategory, partag, paryear, page =1) => {
      try {
        let url_par;
        if (parcategory !== undefined) {
          url_par = `category/${parcategory}`;
        }else if (partag !== undefined) {
          url_par = `tag/${partag}`;
        }else if (paryear !== undefined) {
          url_par = `year/${paryear}`;
        }else{
          url_par = `category/${parcategory}`;
        }
        const response = await axios.get(`${url}/${url_par}?page=${page}`);
        // console.log('detail',response.data);
          setArticle(response.data.article.data);
          setActivePage(response.data.article.current_page);
          setPerPage(response.data.article.per_page);
          setTotalItems(response.data.article.total);

          setPopuler(response.data.article_populer);
          setTerbaru(response.data.article_terbaru);
          setCategory(response.data.category);
          setTag(response.data.tags);
          setArchive(response.data.archive);
        setError(null);
      } catch (err) {
        setError(err.message);
          setArticle([]);
          setPopuler([]);
          setTerbaru([]);
          setCategory([]);
          setTag([]);
          setArchive([]);
      } finally {
        setLoading(false);
      }
    };

    const handlePageChange = (pageNumber) => {
      // console.log(`active page is ${pageNumber}`);
      setActivePage(pageNumber);
      getDataHome(pageNumber);
      if (parcategory !== undefined || partag !== undefined || paryear !== undefined) {
        getCategoryGroup(parcategory, partag, paryear, pageNumber);
      }
    };
    useEffect(() => {
          if (parslug !== undefined) {
            getDataDetail(parslug);
          }else if (parcategory !== undefined || partag !== undefined || paryear !== undefined) {
            getCategoryGroup(parcategory, partag, paryear);
          }else{
            getDataHome();
          }
      }, [parslug, parcategory, partag, paryear]);
      
      let page_article_detail;
      let page_article;
      let page_menu;
      let page_paginasi;
      if(parslug !== undefined){ 
        page_article_detail =  <ArticleDetail loading={loading} error={error} detail={detail} url_image={url_image} />;
        page_article = <></>;
        page_menu    = <></>;
        page_paginasi    = <></>;
      }else{
        page_article_detail = <></>;
        page_article = <ArticleAll loading={loading} error={error} artcle={artcle}  url_image={url_image} />;
        page_paginasi    = <nav aria-label="..."><Pagination innerClass={'pagination'} itemClass={'page-item'} linkClass={'page-link'} activeClass={'active'} activePage={activePage} itemsCountPerPage={perPage} totalItemsCount={totalItems}  pageRangeDisplayed={5} onChange={(e)=>{handlePageChange(e)}}/></nav>;
        page_menu    = <ArticleMenu loading={loading} error={error} terbaru={terbaru} populer={populer} category={category} tag={tag} archive={archive}/>;
      }
      // console.log("slug",slug)
    return(
        <div className="section-body">
            {/* home  */}
           {page_article_detail}
            <div className="row">
            <div className="col-12 col-md-8 col-lg-8">
              {page_article}
              {page_paginasi}
            </div>
              {page_menu}
            </div>
        </div>
    )
}

export default Blog;