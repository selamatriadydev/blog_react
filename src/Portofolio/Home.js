import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Home(){
  const [banner, setBanner] = useState([]);
  // const [skill, setSkill] = useState([]);
  const [project, setProject] = useState([]);
  const [category, setCategory] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = 'https://blog.selamatriadydev.com/api/v1/portofolio';
  const url_image = 'https://blog.selamatriadydev.com';

  const getDataHome = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data.Banner.data);
      setBanner(response.data.banner);
      // setSkill(response.data.skill);
      setProject(response.data.project);
      setCategory(response.data.project_categori);
      setError(null);
    } catch (err) {
      setError(err.message);
      setBanner([]);
      // setSkill([]);
      setProject([]);
      setCategory([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataHome();
}, []);
    return (
        <>
        <div className="section-body">
          <div className="row"> 
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                      {loading && <div>A moment please...</div>}
                      {error && (
                          <div>{`Banner Tidak tersedia`}</div>
                      )}
                      {banner &&
                      banner.map(({ title, body, file_path }, key) => (
                        <div className="carousel-item active" key={key}>
                          <img className="d-block w-100" src={`${url_image}/${file_path}`} alt="First slide"/>
                          <div className="carousel-caption d-none d-md-block">
                              <h5>{title}</h5>
                              <p>{body}</p>
                            </div>
                        </div>
                      ))
                      }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Project</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <div className="list-group" id="list-tab" role="tablist">
                          {loading && <Link className="list-group-item list-group-item-action active show" id="list-home-list" data-toggle="list" to="#" role="tab" aria-selected="true">A moment please...</Link>}
                          {error && (
                              <Link className="list-group-item list-group-item-action active show" id="list-home-list" data-toggle="list" to="#" role="tab" aria-selected="true">Data Not Found</Link>
                          )}
                          {category &&
                          category.map(({ title, link }, key) => (
                            <Link key={key} className={`list-group-item list-group-item-action ${key ? '' : 'active show'} `} id={`list-${link}-list`} data-toggle="list" to={`#list-${link}`} role="tab" aria-selected={ key ? 'false' : 'true'}>{title}</Link>
                          ))
                          }
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="tab-content" id="nav-tabContent">
                        {loading && <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">A moment please... </div>}
                          {error && (
                              <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">A moment please... </div>
                          )}
                          {project &&
                          project.map(({ title, file_path, category_link }, key) => (
                            <div key={key} className={`tab-pane fade ${key ? '' : 'active show'}`} id={`list-${category_link}`} role="tabpanel" aria-labelledby={`list-${category_link}-list`}>
                              <div className="gallery gallery-fw" data-item-height="100">
                                <div className="gallery-item" data-image={`${url_image}/${file_path}`} data-title="Image 1" href={`${url_image}/${file_path}`} title="Image 1" style={{height: '300px', backgroundImage: `url(${url_image}/${file_path})`}}></div>
                                {/* <div className="gallery-item gallery-more" data-image="assets/img/news/img08.jpg" data-title="Image 3" href="assets/img/news/img08.jpg" title="Image 3"  style={{height: '100px', backgroundImage: 'url(&quot;assets/img/news/img09.jpg&quot)'}}>
                                  <div style={{lineHeight: '100px'}}>+2</div>
                                </div>
                                <div className="gallery-item gallery-hide" data-image="assets/img/news/img01.jpg" data-title="Image 4" href="assets/img/news/img01.jpg" title="Image 4"  style={{height: '100px', backgroundImage: 'url(&quot;assets/img/news/img09.jpg&quot)'}}></div> */}
                              </div>
                          </div>
                          ))
                          }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </>
    )
}

export default Home;