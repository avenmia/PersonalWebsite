import HomeSection from "../sections/HomeSection.vue";
import { shallowMount } from "@vue/test-utils";

describe("HomeSection.vue", () =>
{
  test("Renders HomeSection", () =>
  {
    const version = "v0.1";
    const wrapper = shallowMount(HomeSection, { propsData: { version } });
    expect(wrapper.html()).toContain(
      `<h1>Michael Avendano</h1><p>Software Engineer</p><p>${version}</p>`
    );
  });
});
