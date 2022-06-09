import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import App from 'src/App';


describe('App', () => {
  it('Lel', async () => {
    const {findByText, debug} = render(<App />);

    debug();
    const btn = await findByText('Example');

    expect(btn).toBeInTheDocument();
  });
});

