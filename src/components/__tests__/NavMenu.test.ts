import { fireEvent, render, screen } from '@testing-library/vue'
import NavMenu from "../menu/NavMenu.vue";
import { shallowMount } from "@vue/test-utils";

describe("NavMenu.vue", () =>
{
  test("Renders the 'bars' icon", () =>
  {
    const { getByTitle } = render(NavMenu);
    expect(screen.getByTitle('bars')).toBeTruthy();
  });

  test("Renders the menu when the bars icon is clicked", async () =>
  {
    const { getByTitle } = render(NavMenu);
    await fireEvent.click(screen.getByTitle('bars'));
    expect(screen.getByTitle('times')).toBeTruthy();
  });

  test("Times is not rendered until bars is clicked", async() =>
  {
    const { getByTitle } = render(NavMenu);
    expect(() => screen.getByTitle('times')).toThrowError();
  });
});
