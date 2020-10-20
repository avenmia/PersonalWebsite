import Vue from "*.vue";
import { shallowMount } from '@vue/test-utils'
import AboutSection from "../sections/AboutSection.vue"



describe("AboutSection.vue", () => 
{
    
  test("Renders AboutSection", () => 
  {
    const wrapper = shallowMount(AboutSection);
    expect(wrapper.html()).toContain("Here is Mike's about section")
  });
})