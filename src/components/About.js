import Users from "./Users";
import UserClass from "./UserClass.js";

const About = () => {
    return (
        <div className="p-4">
            <h1 className="font-bold text-2xl">About</h1>
            <p className="text-1xl">This is Namaste React series...</p>
            {/* <Users name="John Doe (functional component)"/> */}
            <UserClass name="John Doe (class based component)"/>  
        </div>
    )
}

export default About;