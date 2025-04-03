import { render } from "@testing-library/react"
import Body from "../components/Body";
import MOCK_DATA from "../__tests__/mocks/mockFullData.json";
import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
         return Promise.resolve(MOCK_DATA)
        }    
    })
})

// it("Should render the body component with Search:",async () =>{
//     await act(async () => render(<Body />))
// })