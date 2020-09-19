import Vue from "*.vue";
import { shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import AboutPage from "../AboutPage.vue"



describe("AboutPage.vue", () => {
    
    test("Renders AboutPage", () => {
        const msg = "some message";
        const wrapper = shallowMount(AboutPage)

        fail();
    })
})