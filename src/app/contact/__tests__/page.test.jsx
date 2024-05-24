import { render } from "@testing-library/react";
import ContactPage from "../page";

const NAME = "Name and Surname";
const EMAIL = "Email Address";
const PHONE = "Phone Number (Optional)";
const MESSAGE = "Message";
const SEND = "Send";

describe("Contact Page", () => {
    it("should render the contact page texts properly", () => {
        const { getByText, getByPlaceholderText } = render( <ContactPage /> )
        getByPlaceholderText(NAME);
        getByPlaceholderText(EMAIL);
        getByPlaceholderText(PHONE);
        getByPlaceholderText(MESSAGE);
        getByText(SEND);
    })
})