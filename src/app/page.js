import Image from "next/image";

export const metadata = {
  title: "home | its-nate",
  description:
    "We believe in creating solutions that truly meet our clients’ needs—no matter their size, industry, or goals.",
};

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's me, Nate.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h2 className="page-subhead">I make cool websites.</h2>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            The things I build focus on their essence. I believe technology
            works best in a simple, uncluttered way.
          </p>
          <p className="page-body">
            I'm a Software Engineer doing contract and subcontract work through
            my company,{" "}
            <a
              href="https://vaya.digital"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              Vaya Digital LLC
            </a>
            .
          </p>
          <p className="page-body">
            Formerly of{" "}
            <a
              href="https://sense.com/"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              Sense
            </a>
            ,{" "}
            <a
              href="https://github.com/clowdr-app/clowdr"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              Midspace
            </a>
            , and{" "}
            <a
              href="https://overourmoon.com/"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              AndAlways
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
