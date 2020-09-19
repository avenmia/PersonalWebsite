import Vue from "*.vue";
import { shallowMount } from '@vue/test-utils'
import HomePage from "../HomePage.vue"



describe("HomePage.vue", () => {
    
    test("Renders HomePage", () => {
        const message = "testMessage";
        const wrapper = shallowMount(HomePage, { propsData: {msg: message}});
        expect(wrapper.html()).toContain("Welcome to Mike's webpage");
        expect(wrapper.html()).toContain(message);
    });
})