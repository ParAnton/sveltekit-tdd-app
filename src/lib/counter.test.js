import '@testing-library/jest-dom';
import { render, findAllByText } from '@testing-library/svelte';
import Counter from './counter.svelte';

describe('<Counter Component', () => {
  it('should no images in the counter and init with number zero' , async () => {
    const { container } = render(Counter);
    expect(container).not.toContainHTML("<img />");
    await findAllByText(container,'0');
  }) 
});
