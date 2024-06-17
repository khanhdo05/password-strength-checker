import Checker from './Checker.tsx';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

describe('Checker Component', () => {
    test('weak password, admin', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.type(screen.getByRole("textbox", { name: "Password" }), "278397635492!)0");
        await user.click(screen.getByRole("checkbox"));
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent("Weak :(")
    })

    test('strong password, non admin', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.type(screen.getByRole("textbox", { name: "Password" }), "alobabobo56m");
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent("Strong!")
    })

    test('Type nothing', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.click(screen.getByRole("checkbox"));
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent("Please enter your password")
    })

    test('Check then uncheck admin', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.click(screen.getByRole("checkbox"));
        await user.click(screen.getByRole("checkbox"));
        await user.type(screen.getByRole("textbox", { name: "Password" }), "27839763dd");
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent("Strong!")
    })
})


