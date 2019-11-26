import React from "react";
import renderer from 'react-test-renderer'
import { MemoryRouter, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage", () => {
      const component = renderer.create(
        <MemoryRouter keyLength={0} initialEntries={[{ pathname: '/login'}]}>
          <Route path="/login" component={LoginPage}/>
        </MemoryRouter>
      );
      const loginPage = component.toJSON();
      expect(loginPage).toMatchSnapshot();
  });

  // it("logs in LoginPage", () => {
  //     const loginPage = mount(<MemoryRouter initialEntries={[{pathname:'/login', key:'test'}]}>
  //       <Route path="/login" component={LoginPage} />
  //     </MemoryRouter>);
  //   //console.log(loginPage.find('Form').props(), loginPage.find('Button').get(0))
  //   loginPage.find('input[type="string"]').simulate('change', { target: { value: 'user' } })
  //   loginPage.find('input[type="password"]').simulate('change', { target: { value: 'password' } })
  //   loginPage.find('Form').simulate('submit', { target: loginPage.find('Button').get(0) });
  //   expect(useJSONRequest).toBeCalledTimes(1);
  // });
});
