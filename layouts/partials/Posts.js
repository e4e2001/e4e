import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12">
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-text mb-4">
              Our Mission: At E4E, we aim to empower students, educators, and institutions by providing a transparent, comprehensive platform to access crucial information on educational entities. From rankings and course details to institutional reviews, E4E bridges the gap between users and the education ecosystem.
            </p>

            <h2 className="h3 mb-2 mt-4">Our Vision</h2>
            <p className="text-text mb-4">
              To become the leading global platform for educational insights, helping individuals and organizations connect with the best opportunities to learn, grow, and excel.
            </p>

            <h2 className="h3 mb-2 mt-4">Why Choose E4E?</h2>
            <ul className="list-disc pl-6 text-text mb-4">
              <li><strong>Accurate Data:</strong> We provide verified and regularly updated information from trusted sources.</li>
              <li><strong>Rankings You Can Trust:</strong> Our rankings are based on a clear, data-driven methodology that evaluates institutions on factors such as research output, academic performance, faculty, and infrastructure.</li>
              <li><strong>User-Friendly Platform:</strong> Navigate with ease to find the right courses and institutions for your needs.</li>
            </ul>

            <Link href="/" className="btn btn-primary mt-4">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
