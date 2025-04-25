import {FC, useState} from "react";

interface Props {
    title: string;
    initialCount: number;
}

const Counter: FC<Props> = ({title, initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const add = (factor = 1) => {
        setCount(count + factor);
    }
    return (
        <div>
            <h1>{title}</h1>
            <h2 id={"display-count"}>{count}</h2>
            <button onClick={() => add()}>+</button>
        </div>
    );
}

export default Counter;