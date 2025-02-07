export const metadata = {
  title: "contact",
  description: "It's my email.",
};

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's my email.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body mb-0">I'm always happy to talk!</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body mb-0">
            <a href="mailto:nmicinski@gmail.com" className="page-link">
              nmicinski@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
