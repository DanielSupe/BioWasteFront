import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrefijoContacto, NumberContacto } from '../common/contants';
import ContactoFooter from '../pages/Home/components/ContactoFooter';

describe('ContactoFooter', () => {
    test('renders correctly', () => {
      render(<ContactoFooter />);
  
      const numeroContacto = screen.getByText(`${PrefijoContacto}-${NumberContacto}`);
      expect(numeroContacto).toBeInTheDocument();

      const Contacto = screen.getByText(`Contacto`);
      expect(Contacto).toBeInTheDocument();
  
    });
  });