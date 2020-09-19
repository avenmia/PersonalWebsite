import Vue from "*.vue";
import { shallowMount } from '@vue/test-utils'
import EducationPage from "../EducationPage.vue"



describe("EducationPage.vue", () => {
    
    test("Renders EducationPage", () => {
        const wrapper = shallowMount(EducationPage);
        expect(wrapper.html()).toContain('Here is the education page')
    });
})