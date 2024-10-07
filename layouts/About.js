import { markdownify } from "@lib/utils/textConverter";

const AboutUs = ({ data }) => {
  const { frontmatter } = data;
  const { title, mission, vision, whyChooseUs } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        {markdownify(title, "h1", "text-center font-normal")}

        <div className="section row pb-0">
          <div className="col-12 lg:col-8">
            {/* Mission Section */}
            <div className="content">
              {markdownify(mission.title, "h2", "font-semibold")}
              {markdownify(mission.description, "p", "mt-4")}
            </div>

            {/* Vision Section */}
            <div className="content mt-8">
              {markdownify(vision.title, "h2", "font-semibold")}
              {markdownify(vision.description, "p", "mt-4")}
            </div>

            {/* Why Choose Us Section */}
            <div className="content mt-8">
              {markdownify(whyChooseUs.title, "h2", "font-semibold")}
              <ul className="list-disc pl-6 mt-4">
                {whyChooseUs.items.map((item, index) => (
                  <li key={index}>
                    {markdownify(item, "p")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
