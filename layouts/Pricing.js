import Link from "next/link";
import Cta from "./components/Cta";

const Courses = ({ data }) => {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;

  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="row justify-center">
            {plans.map((plan, index) => (
              <div
                className="col-12 md:col-4 lg:col-4 mb-4"
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <h5 className="mt-2 font-normal text-text">{plan.subtitle}</h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, featureIndex) => (
                      <li className="mb-[10px] leading-5" key={featureIndex}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`}
                    href={plan.button.link}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
};

export default Courses;
