import { Card, Button } from "flowbite-react";

function Resume() {
  return (
    <div>
      <Card>
        <h5
          id="resume"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          See My Resume
        </h5>
        <p>
          See my full career journey from where I started to where I am today.
          Below are my technical skills. I'm always eager to learn new languages
          and skills when the opportunity arises.
        </p>
        <div class="flex flex-wrap gap-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>JSON</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>mySQL</li>
          <li>MongoDB</li>
          <li>Mongoose ODM</li>
          <li>Rest and GraphQL APIs</li>
        </div>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Button href="/assets/documents/resume.pdf">
            Download My Resume
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Resume;
