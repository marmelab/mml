import { Component, Host, h, Prop, State } from "@stencil/core";

@Component({
  tag: "github-card",
  styleUrl: "github-card.css",
  shadow: true
})
export class GithubCard {
  @Prop() login: string;
  @State() user: any;

  async componentWillLoad() {
    return this.fetchUser(this.login);
  }

  async componentWillUpdate() {
    return this.fetchUser(this.login);
  }

  async fetchUser(login: string) {
    const response = await fetch(`https://api.github.com/users/${login}`);

    if (response.status === 200) {
      this.user = await response.json();
    } else {
      this.user = null;
    }
  }

  render() {
    if (!this.user) {
      return null;
    }

    const {
      login,
      avatar_url,
      name,
      public_repos,
      public_gists,
      followers
    } = this.user;

    return (
      <Host>
        <div class="card">
          <div class="header" />
          <a class="avatar" href={`https://github.com/${login}`}>
            <img src={avatar_url} alt={login} />
          </a>
          <div>
            <h1>{name}</h1>
            <slot />
            <ul>
              <li>
                <a
                  target="_blank"
                  href={`https://github.com/${login}?tab=repositories`}
                >
                  <strong>{public_repos}</strong>Repos
                </a>
              </li>
              <li>
                <a target="_blank" href={`https://gist.github.com/${login}`}>
                  <strong>{public_gists}</strong>Gists
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={`https://github.com/${login}/followers`}
                >
                  <strong>{followers}</strong>Followers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
