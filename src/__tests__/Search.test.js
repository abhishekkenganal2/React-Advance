import { render ,screen} from "@testing-library/react"
import Body from "../components/Body";
import MOCK_DATA from "../__tests__/mocks/mockFullData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
         return Promise.resolve(MOCK_DATA)
        }    
    })
})

it("Should render the body component with Search:",async () =>{
    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
));

    const searchBtn = screen.getByRole("button", { name:"Search"})

    const searchInput = screen.getByTestId("searchInput")

    expect(searchBtn).toBeInTheDocument()
})