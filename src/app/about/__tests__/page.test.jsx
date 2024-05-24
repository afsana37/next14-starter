import { render } from "@testing-library/react";
import AboutPage from "../page";

const ABOUT = "About Bookwiz"
const READ = "Read"
const SHARE = "Share"
const SOCIALIZE = "Socialize"

describe("About Page", () => {
    it("should render the about page texts properly", () => {
        const { getByText } = render( <AboutPage /> )
        getByText(ABOUT);
        getByText(READ);
        getByText(SHARE);
        getByText(SOCIALIZE);
    })
})