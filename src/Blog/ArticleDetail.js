
import ArticleDetailListComment from "./ArticleDetailListComent";

function ArticleDetail(props){
    const loading = props.loading;
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const error = props.error;
    const detail = props.detail;
    const postId = detail.id;
    const comment = detail.comments;
    const url_image = props.url_image;
    // const url = 'https://blog.selamatriadydev.com/api/v1/blog';
    // console.log(detail.tags)
    return(
        <>
        <div className="row">
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">  
                        <h4>{ detail.title } - <small>by { detail.user_name }</small></h4>
                        <span className="pull-right">
                            { detail.date_publish }
                            </span>
                        </div>
                        <div className="card-body">
                            <img src={`${url_image}/${detail.file_path}`} className="img-fluid rounded mx-auto d-block" alt={ detail.title }/>
                            <p dangerouslySetInnerHTML={{ __html: detail.body }}/>
                        </div>
                        <div className="card-footer">
                            
                                <div className="badges">
                                Tags:
                                    { detail.tags &&
                                        detail.tags.map((item, key) => (
                                            <span className="badge badge-light" key={key}>{ item.name }</span>
                                    ))
                                    }
                                </div>
                            
                                <div className="badges">
                                    <span className="badge badge-success">{ detail.category_name}</span>
                                    <span className="badge badge-info">{ detail.views_count} views</span>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ArticleDetailListComment postId={postId} comment={comment ? comment : []} />
        </>
    )
}

export default ArticleDetail;