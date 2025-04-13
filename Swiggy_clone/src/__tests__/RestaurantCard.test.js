import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render the restaurant card with correct props", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Krispy Kreme - Doughnuts & Coffee");

    expect(name).toBeInTheDocument()
})