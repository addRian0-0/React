import { shallow, mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('pruebas en HomeScreen', () => {

    const user = {
        name: "addRian0-0",
        email: "addrianun@gmail.com"
    }

    const wrapper = mount(
        <UserContext.Provider
            value={{ user }}>
            <HomeScreen
            />
        </UserContext.Provider>
    );

    test('debe de hacer el match', () => {
        expect(wrapper).toMatchSnapshot();
    })


})
