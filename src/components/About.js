import Users from "./Users";
import UserClass from "./UserClass.js";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is Namaste React series...</p>
            <Users name="John Doe (functional component)"/>
            <UserClass name="John Doe (class based component)"/>  
        </div>
    )
}

export default About;