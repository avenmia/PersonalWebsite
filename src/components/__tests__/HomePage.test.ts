import { shallowMount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";

describe("HomePage.vue", () => 
{
  test("Renders HomePage", () => 
  {
    const version = "v0.1";
    const wrapper = shallowMount(HomePage, { propsData: { version } });
    expect(wrapper.html()).toContain(
      `<h1>Michael Avendano</h1><p>Software Engineer</p><p>${version}</p>`
    );
  });
});
