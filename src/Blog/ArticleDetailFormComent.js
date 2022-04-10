import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function ArticleDetailFormComment(props){
    const postId = props.postId;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const {slug } =useParams();
    const[nama, setNama] = useState("");
    const[email, setEmail] = useState("");
    const[website, setWebsite] = useState("");
    const[body, setBody] = useState("");
    const url = 'https://blog.selamatriadydev.com/api/v1/blog';
    const navigasi = useNavigate();

    

    const sendComment = async (postId) => {
        setLoading(true);
        try {
         const {data} = await axios.post(`${url}/${postId}/comments`, {
              body:body,
              nama:nama,
              email:email,
              website:website,
          });
          navigasi(`/blog/${data.slug}`);
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    return(
        <>
        {error && (
                          <div>{`Failed Create comment`}</div>
                      )}
        { loading ?
         <div>A moment please...</div>
        :
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                    <h4>Komentar apa ya ? Apa aja.</h4>
                    </div>
                    <div className="card-body">
                    <blockquote className="blockquote">
                        <p className="mb-0">Kata apapun itu, jika di ketik di kolom komentar itu pasti komentar.</p>
                        <footer className="blockquote-footer">Selamat Riady <cite title="Source Title">2022</cite></footer>
                    </blockquote>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">  
                    <h4>Write Comment </h4>
                    </div>
                    <div className="card-body">
                            <textarea name="body" id="" rows="3" className="form-control" onChange={(e) => {setBody(e.target.value)}}></textarea>
                           
                            <div className="form-group">
                                <label>Nama *</label>
                                <input type="text" name="nama" className="form-control"  onChange={(e) => {setNama(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" name="email" className="form-control"  onChange={(e) => {setEmail(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" name="website" className="form-control"  onChange={(e) => {setWebsite(e.target.value)}}/>
                            </div>
                        </div> 
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary" onClick={() => sendComment(postId)}>
                                Reply
                            </button>
                        </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default ArticleDetailFormComment;