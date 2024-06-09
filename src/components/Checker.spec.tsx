import Checker from './Checker.tsx';
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

describe('Checker Component', () => {
    test('convert roman numeral to integer', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.type(screen.getByRole("textbox", { name: "Roman numeral" }), "I")
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("textbox", { name: "Integer" })).toHaveValue("1")
    })

    test('convert integer to roman numeral', async () => {
        const user = userEvent.setup();

        render(<Checker />);

        await user.type(screen.getByRole("textbox", { name: "Integer" }), "1")
        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("textbox", { name: "Roman numeral" })).toHaveValue("I")
    })
})
