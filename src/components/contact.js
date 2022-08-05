import { useState } from "react";
import { Forms, Label, TextInput, Button, Card } from "flowbite-react";

function ContactForm() {
  const [name, setName] = useState("");
  const [nameColor, setNameColor] = useState("");
  const validateName = () => {
    if (name === "") {
      setNameColor("red");
      alert("wrong");
    } else {
      setNameColor("");
    }
  };

  return (
    <div>
      <Card>
        <h5
          id="contact"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Reach Out!
        </h5>
        <p>
          Fill out the form below with any questions or inquiries and I will get
          back to you as soon as I can.
        </p>
        <form className="flex flex-col gap-4">
          <div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Name" />
              </div>
              <TextInput
                id="name"
                name="name"
                required={true}
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={validateName}
                color={nameColor}
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput id="email1" type="email" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value="Message" />
            </div>
            <TextInput id="Message" type="text" sizing="lg" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
