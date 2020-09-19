import Vue from "*.vue";
import { shallowMount } from '@vue/test-utils'
import AboutPage from "../AboutPage.vue"



describe("AboutPage.vue", () => {
    
    test("Renders AboutPage", () => {
        const wrapper = shallowMount(AboutPage);
        expect(wrapper.html()).toContain('Here is the about page')
    });
})