import { render } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json"

it("should render the restaurant card with correct props", () => {

    render(<RestaurantCard />)
})