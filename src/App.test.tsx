import {expect, test} from 'vitest'
import { render, screen } from './test/utils'
import App from './App';

test('renders text about clicking links to React and Vite', () => {
    render(<App />);
    const linkElement = screen.getByText("Click on the Vite and React logos to learn more");
    expect(linkElement).toBeInTheDocument();
});

test('renders workshop homepage', () => {
    render(<App/>);
    expect(screen.getByText("Counter")).toBeInTheDocument();
});
