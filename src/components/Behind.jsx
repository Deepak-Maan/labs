import behind1 from "../assets/images/png/behind1.png";
import behind2 from "../assets/images/png/behind2.png";
import behind3 from "../assets/images/png/behind3.png";
import behind4 from "../assets/images/png/behind4.png";
import behind5 from "../assets/images/png/behind5.png";
import behind6 from "../assets/images/png/behind6.png";
import behind7 from "../assets/images/png/behind7.png";
import behind8 from "../assets/images/png/behind8.png";

const mycardinfo = [
    {
        img: behind1,
        name: "James Vuong",
        nametwo: "(Co-CEO)",
        para1: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
        para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    },
    {
        img: behind2,
        nametwo: "(Co-CEO)",
        name: "Tricia Yong",
        para1: "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
        para2: "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
    },
    {
        img: behind3,
        name: "Kevin Li",
        nametwo: "(CFO)",
        para1: "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
        para2: "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease..",
    },
    {
        img: behind4,
        nametwo: "(Lorem Ipsum)",
        name: "Ryan Ang",
        names: "Vuong",
        para1: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
        para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    },
    {
        img: behind5,
        name: "Dylan",
        nametwo: "(Executive Producer)",
        para1: "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
        para2: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
    },
    {
        img: behind6,
        name: "Ralf",
        nametwo: "(Lorem Ipsum)",
        para1: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
        para2: "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
    },
    {
        img: behind7,
        name: "Jordan Stratford",
        nametwo: "(Creative Director)",
        para1: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
        para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    },
    {
        img: behind8,
        nametwo: "(Lorem Ipsum)",
        name: "Jae Sik Choi",
        para1: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
        para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    },
];

const Behind = () => {
    const mycard = mycardinfo.map((mycard) => (
        <div className=" col-lg-6 col-12 my-3">
            <div className="behind_card position-relative my-3 p-3 overflow-hidden">
                <div className="d-sm-flex align-items-center">
                    <img className="behind_img" src={mycard.img} alt="card-img" />
                    <div>
                        <p className=" d-flex align-items-center fw-semibold text-white ms-2">{mycard.name}<span className="fs-sm fw-normal text-gradient ms-2 ">{mycard.nametwo}</span></p>
                        <p className="fs-sm fw-normal  text-gray ms-2">{mycard.para1}</p>
                    </div>
                </div>
                <p className="fs-sm fw-normal  text-gray mt-2 ms-2 ms-sm-0">{mycard.para2}</p>
                <span className="ellipesourtem"></span>
            </div>
        </div>
    ));
    return (
        <div className="bg-black position-relative pt-5 mt-5">
            <p className="fs-xxl1 text-white op-6 fw-bold our-team">Our Team</p>
            <div className="container pt-2 mt-5">
                <div className="d-flex align-items-center justify-content-center">
                    <button className="team_btn ">OUR TEAM</button>
                </div>
                <h1 className="fs-xl1 fw-bold text-white text-center mx-auto"> Behind our expertise</h1>
                <div className="row pt-5">{mycard}</div>
            </div>
        </div>
    );
};

export default Behind;