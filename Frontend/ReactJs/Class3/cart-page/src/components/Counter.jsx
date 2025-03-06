import { use, useEffect, useState } from "react";

const Counter = ({ quantity, onUpdate, productId }) => {
    const [count, setCount] = useState(quantity);
    const [randomNumber, setRandomNumber] = useState(0);

    // Mount
    useEffect(() => {
        setInterval(() => {
            setRandomNumber(Math.random());
        }, 1000);
        console.log('Counter mounted'); // A
    }, []);

    // Update
    useEffect(() => {
        console.log('Counter updated - trigger only on count change'); // B
    }, [count]);

    useEffect(() => {
        console.log('Counter updated - Trigger on every rerender'); // C
    }); // Trigger on every rerender


    // Unmount
    useEffect(() => {
        return () => {
            console.log('Counter unmounted'); // D
        }
    }, []);




    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        onUpdate(productId, count);
    }, [count]);


    return (
        <div style={{ display: 'inline-block' }}>{randomNumber}
            <button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;