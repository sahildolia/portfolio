import "./MyworkCard.css";
import uiux from '../../../assets/uiUx.jpg'
import logoimg from '../../../assets/logoimg.jpg'
import ets from '../../../assets/ets.jpg'
import uniImg from '../../../assets/university.png'
import mobileUIUX from '../../../assets/mobileUIUx.png'
import dentist from '../../../assets/dentist.png'
import tMa from '../../../assets/tma.png'
import chkflix from '../../../assets/chkflix.png'


const MyworkCard = ({ activeTab = "All" }) => {
  // Sample work data with categories
  const workItems = [
    {
      id: 1,
      image: uiux,
      subtitle: "UI/UX Design",
      title: "ATS Dark & Light Theme",
      link: "https://www.figma.com/proto/X5uK6A69xrcUXTsgTvBAS0/ATS?node-id=141-1985&t=OzxGRHOGcj3eFOrG-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=161%3A2123&show-proto-sidebar=1",
      linkText: "See Design",
      category: "UI/UX Design",
    },
    {
      id: 2,
      image: logoimg,
      subtitle: "UI/UX Design",
      title: "Logo Designs",
      link: "https://www.figma.com/proto/sQscTlSirm7fkAqjIOwLjx/logo-alpha?node-id=20-737&t=QxdlJdPtKOUv4vte-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      linkText: "See Design",
      category: "UI/UX Design",
    },
    {
      id: 3,
      image: ets,
      subtitle: "UI/UX Design",
      title: "Employee Tracking System",
      link: "https://www.figma.com/proto/MlsjZ20H4ndmt8lpSr9HjH/Employee-Management-System?node-id=6-2560&t=3cSxmVOGGpQw2mD8-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      linkText: "See Design",
      category: "UI/UX Design",
    },
    {
      id: 4,
      image: uniImg,
      subtitle: "UI/UX Design",
      title: "University Mockup",
      link: "https://www.figma.com/proto/Ht0NrEYLIz8n56g82zwe35/Rayat-Bahra-University?node-id=3090-545&m=dev&scaling=scale-down-width&content-scaling=fixed&page-id=2%3A10&starting-point-node-id=28%3A18&show-proto-sidebar=1",
      linkText: "See Design",
      category: "UI/UX Design",
    },
    {
      id: 5,
      image: mobileUIUX,
      subtitle: "UI/UX Design",
      title: "Mobile UI/UX Design",
      link: "https://www.figma.com/proto/7uU0i9d6dzJDPmo87Cvr58/Untitled?node-id=273-177",
      linkText: "See Design",
      category: "UI/UX Design",
    },
    {
      id: 6,
      image: dentist,
      subtitle: "Development",
      title: "Surgical Dentist",
      link: "https://surgicaldentist.com.au/",
      linkText: "Visit Website",
      category: "Development",
    },
    {
      id: 7,
      image: chkflix,
      subtitle: "Development",
      title: "CHK Flix",
      link: "https://chkflix.com/",
      linkText: "Visit Website",
      category: "Development",
    },
    {
      id: 8,
      image: tMa,
      subtitle: "Development",
      title: "The Mark Academy",
      link: "https://www.themark.academy/",
      linkText: "Visit Website",
      category: "Development",
    },
    {
      id: 9,
      image: uniImg,
      subtitle: "Development",
      title: "University",
      link: "https://rbuchd.in/",
      linkText: "Visit Website",
      category: "Development",
    },
  ];

  // Filter work items based on active tab
  const filteredItems =
    activeTab === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeTab);

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto mw_1200">
        <div className="flex flex-wrap -m-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full mainWorkCard opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#009e66] mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.title}
                  </h1>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-[#009e66] hover:text-white transition-colors duration-300"
                  >
                    {item.linkText || "View Project"}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyworkCard;
