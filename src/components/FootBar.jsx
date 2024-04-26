import { Button } from "react-bootstrap"


function FootBar(){
return(
    <footer className="bg-dark text-secondary d-flex flex-column">
      <div className="links row">
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Audio and Subtitles</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Audio Description</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Help Center</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Gift Cards</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Media Center</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Investor Relations</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Jobs</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Terms of Use</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Privacy</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Legal Notices</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Cookie Preferences</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Corporate Information</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 my-3 ">
          <p href="#" className="link-secondary">Contact Us</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button
        type="button"
        className="btn btn-dark border border-light d-block text-secondary mb-4 btn-service"
      >
        Service Code
      </Button>
      </div>
      
      <p className="d-flex justify-content-center">© 1997-2024 Netflix, Inc.</p>
    </footer>
)
}

export default FootBar