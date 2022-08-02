import { Forms, Label, TextInput, Button } from "flowbite-react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Name" value="Name" />
            </div>
            <TextInput
              id="name"
              type="name"
              placeholder="Your Name"
              required={true}
            />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" value="Message" />
          </div>
          <TextInput
            id="Message"
            placeholder="write a message"
            type="text"
            sizing="lg"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;
