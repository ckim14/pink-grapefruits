import { Card } from "flowbite-react";

function Resume() {
  return (
    <div>
      <Card>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          See my resume
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          See my full career journey from where I started to where I am today.
          Below are my technical skills. I'm always eager to learn new languages
          and skills when the opportunity arises.
        </p>
        <ul>HTML</ul>
        <ul>CSS</ul>
        <ul>Javascript</ul>
        <ul>Bootstrap</ul>
        <ul>jQuery</ul>
        <ul>JSON</ul>
        <ul>React</ul>
        <ul>Node.js</ul>
        <ul>Express.js</ul>
        <ul>mySQL</ul>
        <ul>MongoDB</ul>
        <ul>Mongoose ODM</ul>
        <ul>Rest and GraphQL APIs</ul>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          >
            <svg
              className="mr-3 h-7 w-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="document-text"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Download my Resume</div>
            </div>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Resume;
