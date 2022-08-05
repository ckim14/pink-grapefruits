import PortfolioCard from "../components/portfolioCard";
import HeaderNav from "../components/header";
import FooterBar from "../components/footer";
import AboutMe from "../components/aboutMe";
import ContactForm from "../components/contact";
import Resume from "../components/resume";
import { Card } from "flowbite-react";

function DefaultPage() {
  const projects = [
    {
      imgSrc: "/assets/images/workday-scheduler.png",
      title: "Workday Scheduler",
      description:
        "This application is a daily planner to help you manage your day effectively.",
      githubLink: "https://github.com/ckim14/challenge5-workdayscheduler",
      hostLink: "https://ckim14.github.io/challenge5-workdayscheduler/ ",
    },
    {
      imgSrc: "/assets/images/weather-dashboard.png",
      title: "Weather Dashboard",
      description:
        "This application allows you to search for the current weather and 5 day forcast in a major city using the Open Weather API.",
      githubLink: "https://github.com/ckim14/module6-weather",
      hostLink: "https://ckim14.github.io/module6-weather/ ",
    },
    {
      imgSrc: "/assets/images/password-generator.png",
      title: "Password Generator",
      description:
        "The application will ask you for your minimum length for your password, and whether it needs to include lowercase letters, uppercase letters, and symbols.",
      githubLink: "https://github.com/ckim14/challenge3-password-generator",
      hostLink: "https://ckim14.github.io/challenge3-password-generator/",
    },
    {
      imgSrc: "assets/images/note-taker.png",
      title: "Notetaker",
      description:
        "This application, called Note Taker, can be used to write and save notes.",
      githubLink: "https://github.com/ckim14/note-taker-module11",
      hostLink: "https://note-taker-app-module11.herokuapp.com/ ",
    },
    {
      imgSrc: "assets/images/weather-dadjokes.png",
      title: "Weather and Dad Joke ",
      description:
        "A website to get the daily weather forecast and a dad joke of the day with one click.",
      githubLink: "https://github.com/mlarkin14/project-1",
      hostLink: "https://mlarkin14.github.io/project-1/",
    },
    {
      imgSrc: "assets/images/pokemon-team-builder.png",
      title: "Pokemon Team Builder",
      description:
        "Our team decided to make a pokemon web api to help make several teams for different strategies.",
      githubLink: "https://github.com/mlarkin14/pokemon-team-builder",
      hostLink: "https://best-team-pokemon-team-builder.herokuapp.com/",
    },
  ];

  return (
    <div>
      <HeaderNav />

      <AboutMe />
      <Card class="background-color: 8ecae6">
        <div class="flex flex-wrap gap-2">
          <h5
            id="portfolio"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Portfolio
          </h5>
          <div class="flex flex-wrap justify-around gap-4">
            {projects.map((project) => (
              <PortfolioCard
                class="max-w-sm min-h-400"
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </Card>
      <Resume />
      <ContactForm />
      <FooterBar />
    </div>
  );
}

export default DefaultPage;
