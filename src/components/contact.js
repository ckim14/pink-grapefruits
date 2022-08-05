import { useState } from "react";
import { Forms, Label, TextInput, Button, Card } from "flowbite-react";
import ValidatedTextInput from "./validatedTextInput";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
              <ValidatedTextInput
                id="name"
                name="name"
                required={true}
                value={name}
                onChange={(event) => setName(event.target.value)}
                validation={(value) => !!value.trim()}
                validationText="Name cannot be blank!"
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <ValidatedTextInput
              id="email1"
              name="email1"
              required={true}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              validation={(value) =>
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
              }
              validationText="Email must be valid!"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value="Message" />
            </div>
            <ValidatedTextInput
              id="message"
              name="message"
              required={true}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              validation={(value) => !!value.trim()}
              validationText="Message cannot be blank!"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
