/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GithubCard {
    'login': string;
  }
  interface GithubCardSelector {}
}

declare global {


  interface HTMLGithubCardElement extends Components.GithubCard, HTMLStencilElement {}
  var HTMLGithubCardElement: {
    prototype: HTMLGithubCardElement;
    new (): HTMLGithubCardElement;
  };

  interface HTMLGithubCardSelectorElement extends Components.GithubCardSelector, HTMLStencilElement {}
  var HTMLGithubCardSelectorElement: {
    prototype: HTMLGithubCardSelectorElement;
    new (): HTMLGithubCardSelectorElement;
  };
  interface HTMLElementTagNameMap {
    'github-card': HTMLGithubCardElement;
    'github-card-selector': HTMLGithubCardSelectorElement;
  }
}

declare namespace LocalJSX {
  interface GithubCard {
    'login'?: string;
  }
  interface GithubCardSelector {}

  interface IntrinsicElements {
    'github-card': GithubCard;
    'github-card-selector': GithubCardSelector;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'github-card': LocalJSX.GithubCard & JSXBase.HTMLAttributes<HTMLGithubCardElement>;
      'github-card-selector': LocalJSX.GithubCardSelector & JSXBase.HTMLAttributes<HTMLGithubCardSelectorElement>;
    }
  }
}


