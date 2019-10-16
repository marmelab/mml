import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "github-card-selector",
  styleUrl: "github-card-selector.css",
  shadow: true
})
export class GithubSelector {
  @State() login: string;

  handleLoginChange(e: UIEvent) {
    const target = e.target as HTMLInputElement;
    this.login = target.value;
  }

  render() {
    return (
      <Host>
        <input
          onChange={this.handleLoginChange.bind(this)}
          placeholder="Github username"
        />
        {this.login && <github-card login={this.login} />}
      </Host>
    );
  }
}
