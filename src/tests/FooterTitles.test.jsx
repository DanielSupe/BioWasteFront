import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterTitles from '../common/components/FooterTitles';


describe('FooterTitles component', () => {
  test('renders FooterTitles component with correct content', () => {
    render(<FooterTitles />);

    // Verifica que el texto "Privacidad" esté presente
    expect(screen.getByText("Privacidad")).toBeInTheDocument();

    // Verifica que el texto "Terminos de uso" esté presente
    expect(screen.getByText("Terminos de uso")).toBeInTheDocument();

    // Verifica que el texto "Preferencias sobre cookies" esté presente
    expect(screen.getByText("Preferencias sobre cookies")).toBeInTheDocument();
  });
});
