import { render } from "@testing-library/react"
import {act} from "react-dom/test-utils"
import RestaurantMenu from "../components/RestaurantMenu"

// fetching the data

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({
            
        })
    })
})

it("Should render the Cart component", async () => {
    await act(async () => {
        render(<RestaurantMenu />)
    })
})

