import Accordion from "./components/Accordion";

export default function App() {
  return (
    <section className="faq">
      <header className="faq__header">
        <img
          src="/assets/images/icon-star.svg"
          width={28}
          height={28}
          alt=""
          className="header__logo"
        />
        <h1 className="header__title">FAQs</h1>
      </header>
      <ul className="faq__questions questions">
        <li className="questions__item">
          <Accordion
            title="What is Frontend Mentor, and how will it help me?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ad."
          />
        </li>
        <li>
          <Accordion
            title="Is Frontend Mentor free?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui nulla consectetur quasi numquam incidunt"
          />
        </li>
        <li>
          <Accordion
            title="Can I use Frontend Mentor projects in my portfolio?"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptas sint dignissimos odit magnam, culpa quo veniam. Quidem."
          />
        </li>
        <li>
          <Accordion
            title="How can I get help if I'm stuck on a challenge?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a enim animi ut itaque, blanditiis maiores eveniet odio repudiandae, incidunt cupiditate pariatur?"
          />
        </li>
      </ul>
    </section>
  );
}
