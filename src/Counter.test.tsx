import {describe, expect, it} from 'vitest'
import {fireEvent, getByText, render} from './test/utils'
import Counter from './Counter';

describe("<Counter />", () => {

    it('Click the button', () => {
        const wrapper = render(<Counter title={"test"} initialCount={0}/>)
        const headingWithCount = wrapper.container.querySelector(
            '#display-count'
        ) as HTMLHeadingElement;

        const button = wrapper.container.querySelector(
            'button'
        ) as HTMLButtonElement;

        // button mounts with count set to 0
        expect(headingWithCount.textContent).toBe('0')

        fireEvent(
            getByText(button, '+'),
            new MouseEvent('click', {
                bubbles: true
            }),
        )

        // The counter is working
        expect(headingWithCount.textContent).toBe('1')
    })
})
