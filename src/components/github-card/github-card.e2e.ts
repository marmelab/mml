import { newE2EPage } from "@stencil/core/testing";

describe("github-card", () => {
  it("should renders", async () => {
    const page = await newE2EPage();

    await page.setContent(`<github-card></github-card>`);

    const element = await page.find("github-card");
    expect(element).toHaveClass("hydrated");
  });

  it("should render inner child at least if not yet loaded", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <github-card>
        <span>Child</span>
      </github-card>
    `);

    const element = await page.find("github-card");
    expect(element).toEqualText("Child");
  });
});
