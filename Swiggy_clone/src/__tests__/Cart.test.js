import { fireEvent, render, screen } from "@testing-library/react"
import {act} from "react-dom/test-utils"
import RestaurantMenu from "../components/RestaurantMenu"
import MOCK_DATA_CART from "../__tests__/mocks/mockCartData.json"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"

// fetching the data

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_CART)
    })
})

it("Should render the Cart component", async () => {
    await act(async () => {
        render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
        )
    })

    const accordianHeader = screen.getByText("Biryani (5)");

    // clicking on accordian.
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("fooditem")).toBe(5);

    // checking the length of food items in accordian
})

