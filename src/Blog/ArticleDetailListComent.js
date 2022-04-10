import ArticleDetailFormComment from "./ArticleDetailFormComent";

function ArticleDetailListComment(props){
    const comment = props.comment;
    const loading = props.loading;
    const postId = props.postId;
    const listComment = comment && comment.map((item, key) =>(
        <div className="row" key={key}>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header"> 
                    <h4>  { item.user_comment } says...</h4>
                    <span className="pull-right">{ item.waktu_hitung}</span>
                    </div>
                    <div className="card-body">
                        <p>{ item.body }</p>
                    </div>
                </div>
            </div>
        </div>
    ));
    return(
        <>
        {loading && <div>A moment please...</div>}
        {listComment}
        <ArticleDetailFormComment postId={postId} />
        </>
    )
}

export default ArticleDetailListComment;