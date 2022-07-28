import React from 'react';
import { render, screen } from '@testing-library/react';

import App, {calcularNovoSaldo} from './app'

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco,', () =>{
        test('O nome é exibido', () => {
            render(<App/>);

            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
        it('Mostrar saldo', () => {
        render(<App/>);

        expect(screen.getByText('Saldo:')).toBeInTheDocument()
        });

        it('O botão de transição é exibido', () =>{
        render(<App/>);
        expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        });    
    })
    describe('Quando eu realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () =>{
            const novoSaldo = calcularNovoSaldo()

            expect(novoSaldo).toBe(100)
        })
    })
})