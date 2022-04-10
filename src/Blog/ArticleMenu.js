import {Link} from "react-router-dom";
function ArticleMenu(props){
    const loading = props.loading;
    const error = props.error;
    const category = props.category;
    const tag = props.tag;
    const archive = props.archive;
    const populer = props.populer;
    const terbaru = props.terbaru;
    return(
        <>
        {/* <!-- navigasi kanan  --> */}
            <div className="col-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                    <h4>News</h4>
                    </div>
                    <div className="card-body">
                    {loading && <div>A moment please...</div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    {terbaru &&
                        terbaru.map(({ title, slug, views_count,category_name }, key) => (
                        <div className="list-group" key={key}>
                            <Link to={`/blog/${slug}`} className="list-group-item list-group-item-action ">
                            {title}<span className="badge badge-primary badge-pill">{views_count} views</span>
                            <span className="badge badge-warning badge-pill">{category_name}</span>
                                </Link>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <h4>Populer</h4>
                    </div>
                    <div className="card-body">
                    {loading && <div>A moment please...</div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    {populer &&
                        populer.map(({ title, slug, views_count,category_name }, key) => (
                        <div className="list-group" key={key}>
                            <Link to={`/blog/${slug}`} className="list-group-item list-group-item-action ">
                            {title}<span className="badge badge-primary badge-pill">{views_count} views</span>
                            <span className="badge badge-warning badge-pill">{category_name}</span>
                                </Link>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <h4>Kategori</h4>
                    </div>
                    <div className="card-body">
                        {loading && <div>A moment please...</div>}
                        {error && (
                            <div>{`There is a problem fetching the post data - ${error}`}</div>
                        )}
                        {category &&
                            category.map(({name,posts_count }, key) => (
                            <div className="list-group" key={key}>
                                <Link to={`/blog/category/${name}`} className="list-group-item list-group-item-action ">
                                {name}<span className="badge badge-primary badge-pill">{posts_count}</span>
                                    </Link>
                            </div>
                            ))}
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <h4>Tags</h4>
                    </div>
                    <div className="card-body">
                        {loading && <div>A moment please...</div>}
                        {error && (
                            <div>{`There is a problem fetching the post data - ${error}`}</div>
                        )}
                        {tag &&
                            tag.map(({name,posts_count }, key) => (
                            <div className="list-group" key={key}>
                                <Link to={`/blog/tag/${name}`} className={`list-group-item list-group-item-action ${posts_count ? '': 'disabled'} `}>
                                {name}<span className="badge badge-primary badge-pill">{posts_count}</span>
                                    </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <h4>Tahun</h4>
                    </div>
                    <div className="card-body">
                    {loading && <div>A moment please...</div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    {archive &&
                        archive.map(({grouptahun,count_row }, key) => (
                        <div className="list-group" key={key}>
                            <Link to={`/blog/year/${grouptahun}`} className="list-group-item list-group-item-action ">
                            {grouptahun}<span className="badge badge-primary badge-pill">{count_row}</span>
                                </Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            {/* <!-- navigasi kanan end  --> */}
        </>
    )
}

export default ArticleMenu;