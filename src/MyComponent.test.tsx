import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

describe("My Component test", () => {
    test('should show the text', () => {
        const wrapper = shallow(<MyComponent/>);
        const text = wrapper.find("div div");
        expect(text.text()).toBe("Text goes here");
    });
    
    test("should hide text when button is clicked", () => {
        const wrapper = shallow(<MyComponent/>);
        const button = wrapper.find('button');
        button.simulate('click');
        // console.log(wrapper.debug());
        // const el = wrapper.find("div div").props();
        // expect(el.style.display).toEqual('none');        
        expect(wrapper.state()).toEqual({ isShown: false });
    })
});
