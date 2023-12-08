import { Accordion } from "./Accordion";

export const FAQ = () => {
       const faqs = [
           {
               id: 1,
               question: "Why should I use EBooks?",
               answer: "EBooks are convenient, portable, and environmentally friendly. You can access an entire library wherever you go without carrying heavy books. EBooks also tend to be cheaper than print books.",
           },
           {
               id: 2,
               question: "Can I access my eBook on mobile?",
               answer: "Yes, our eBooks can be accessed on both mobile and desktop. You can download the eBook file to your phone or tablet and read it on the go through an eReader app.",
           },
           {
               id: 3,
               question: "Do you offer refunds?",
               answer: "Yes, we offer full refunds within 14 days of purchase if you are not satisfied. Simply contact our support team to initiate a return.",
           },
           {
               id: 4,
               question: "Do you support Internation payments?",
               answer: "Yes, we accept payments from most major credit cards from countries around the world. If you have any trouble with international payment, contact us for assistance.",
           },
       ];

    return (
        <section className="my-10 p-7 border rounded-lg shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mt-5 mb-3 underline underline-offset-8">
                Frequently asked questions
            </h1>
            <div
                className=""
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white text-black"
                data-inactive-classes="text-gray-500"
            >
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};
