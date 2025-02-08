export const metadata = {
  title: "code",
  description: "It’s my code.",
};

const Code = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It’s my code.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body mb-0">
            Feel free to check out my{" "}
            <a
              href="https://github.com/its-nate"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            I also profile projects I’ve completed through my company,&nbsp;
            <a
              href="https://vaya.digital"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              Vaya Digital LLC
            </a>
            , on their site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
