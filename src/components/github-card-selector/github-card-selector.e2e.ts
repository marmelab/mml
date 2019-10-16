import { newE2EPage } from '@stencil/core/testing';

describe('github-card-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<github-card-selector></github-card-selector>');

    const element = await page.find('github-card-selector');
    expect(element).toHaveClass('hydrated');
  });
});
