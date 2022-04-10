
import Pagination from "react-js-pagination";

function ArticlePagination(){
    return(
        <div className="card">
        <div className="card-body">
            <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
            />
        </div>
    </div>
    )
}
export default ArticlePagination;