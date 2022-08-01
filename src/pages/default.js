import PortfolioCard from "../components/portfolioCard";

function DefaultPage() {
  const projects = [
    {
      imgSrc: "",
      title: "project 1",
      description: "description 1 - this is some wrapping descriptions",
      githubLink: "http://github.com",
      hostLink: "http://google.com",
    },
    {
      imgSrc: "",
      title: "project 2",
      description: "description 2",
      githubLink: "http://github.com",
      hostLink: "http://google.com",
    },
  ];

  return (
    <div class="flex justify-around">
      {projects.map((project) => (
        <PortfolioCard
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export default DefaultPage;
