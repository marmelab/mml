import { GithubCard } from "./github-card";

describe("github-card", () => {
  it("builds", () => {
    expect(new GithubCard()).toBeTruthy();
  });
});
