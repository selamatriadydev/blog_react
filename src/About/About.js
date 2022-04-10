function About(){
    return (
        <>
        <div className="section-body">
            <div className="row mt-sm-4">
                <div className="col-12">
                    <div className="card profile-widget">
                        <div className="profile-widget-header">                     
                        <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle profile-widget-picture"/>
                        <div className="profile-widget-items">
                            <div className="profile-widget-item">
                            <div className="profile-widget-item-label">Posts</div>
                            <div className="profile-widget-item-value">187</div>
                            </div>
                            <div className="profile-widget-item">
                            <div className="profile-widget-item-label">Followers</div>
                            <div className="profile-widget-item-value">6,8K</div>
                            </div>
                            <div className="profile-widget-item">
                            <div className="profile-widget-item-label">Following</div>
                            <div className="profile-widget-item-value">2,1K</div>
                            </div>
                        </div>
                        </div>
                        <div className="profile-widget-description">
                        <div className="profile-widget-name">Selamat Riady <div className="text-muted d-inline font-weight-normal"><div className="slash"></div> Web Developer</div></div>
                        Selamat Riady is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template. Not a tribute, I'm just bored with <b>'John Doe'</b>.
                        </div>
                        {/* <!-- <div className="card-footer text-center">
                            <div className="font-weight-bold mb-2">Follow Ujang On</div>
                            <a href="#" className="btn btn-social-icon btn-facebook mr-1">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="btn btn-social-icon btn-twitter mr-1">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="btn btn-social-icon btn-github mr-1">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="btn btn-social-icon btn-instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div> --> */}
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default About;