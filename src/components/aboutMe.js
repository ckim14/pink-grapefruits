import { Card, Avatar } from "flowbite-react";

function AboutMe() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hi, I'm Chika Kim.
        </h5>
        {/* <div className="float-left">
          <Avatar
            img="/assets/images/chika_kim_headshots.jpg"
            rounded={true}
            size="xl"
          />
        </div> */}
        <p className="font-normal text-gray-700 dark:text-gray-400">
          I'm taking the Rutgers Coding Bootcamp course because I strive to
          become more technically proficient and better communicate with
          engineers. Software and programming is a changing the world everyday,
          and I think it's an important skill to have to stay relevant and
          marketable in future opportunities. I have a bachelors degree in
          Journalism and Media Studies from Rutgers University, started my
          career as a marketer and made a pivot into Product Management. Outside
          of work, I enjoy tending to my indoor plants and traveling.
        </p>
      </Card>
      ;
    </div>
  );
}

export default AboutMe;
