import { Card, Avatar } from "flowbite-react";

function AboutMe() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h5>
        <div className="flex flex-wrap gap-2">
          <Avatar
            img="/assets/images/chika_kim_headshots.jpg"
            rounded={true}
            size="xl"
          />
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Hi, I’m Chika Kim. I’m currently working as a product manager and have
          decided to take the Rutgers Coding Bootcamp course to become more
          technically proficient and better communicate with engineers. I have a
          bachelors degree in Journalism and Media Studies from Rutgers
          University, started my career as a marketer and made a pivot into
          Product Management. Outside of work, I enjoy tending to my indoor
          plants and traveling.
        </p>
      </Card>
      ;
    </div>
  );
}

export default AboutMe;
