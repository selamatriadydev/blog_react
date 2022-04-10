import {Link} from "react-router-dom";
function ArticleAll(props){
    const loading = props.loading;
    const error = props.error;
    const artcle = props.artcle;
    // const url_image = props.url_image;
    
    return(
        <>
        {/* <div className="col-12 col-md-8 col-lg-8"> */}
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {artcle &&
            artcle.map(({ id, title,preview, slug, file_path, views_count,category_name,user_name,post_date, tags }, key) => (
               
                    <div className="card" key={key}>
                        <div className="card-header">  
                        <h4>{ title } - <small>by { user_name }</small></h4>
                        <span className="pull-right">
                            { post_date }
                            </span>
                        </div>
                        <div className="card-body">
                            <p dangerouslySetInnerHTML={{ __html: preview }}/>
                        </div>
                        <div className="card-footer">
                            {/* <p> */}
                                <div className="badges">
                                Tags:
                                    { tags &&
                                        tags.map((item, key) => (
                                            <span className="badge badge-light" key={key}>{ item.name }</span>
                                    ))
                                    }
                                </div>
                            {/* </p>
                            <p> */}
                                <div className="badges">
                                    <span className="badge badge-success">{ category_name}</span>
                                    <span className="badge badge-info">{ views_count} views</span>
                                </div>
                            {/* </p>
                            <p> */}
                                <Link to={`/blog/${slug}`} className="btn btn-sm btn-primary">Read More</Link>
                            {/* </p> */}
                        </div>
                    </div>
                ))}

               
            {/* </div> */}
        </>
    )
}

export default ArticleAll;