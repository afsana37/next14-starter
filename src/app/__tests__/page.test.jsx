import { render } from "@testing-library/react";
import Home from "../page";

const BOOKWIZ = "Bookwiz Bookclub."
const LOREM = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore."
const LEARNMORE = "Learn More"
const CONTACT = "Contact"

describe("Home Page", () => {
    it("should render the home page texts properly", () => {
        const { getByText } = render( <Home /> )
        getByText(BOOKWIZ);
        getByText(LOREM);
        getByText(LEARNMORE);
        getByText(CONTACT);
    })
})