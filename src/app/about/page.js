import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "about",
  description: "It's more about me.",
};

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's more about me.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            I'm a software engineer living in California.
          </p>
          <p className="page-body">
            I’ve been writing code professionally for 5 years and can’t get
            enough. I’m always looking to take on new projects or
            opportunities—if you’re interested in working with me, make sure to{" "}
            <Link href="/contact" className="page-link">
              drop me a line!
            </Link>
          </p>
          <p className="page-body">
            When I’m not at the keyboard I can be found on a beach or mountain.
          </p>
          <Image
            src="/images/nate-headshot.jpg"
            alt="Nate Micinski Headshot"
            className="profile-img"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
