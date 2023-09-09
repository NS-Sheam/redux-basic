
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, increntByValue } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const { count } = useSelector((state) => {
        console.log(state);
        return state.counter
    })
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Incremnt</button>
            <button onClick={() => dispatch(increntByValue(10))}>Incremnt by value</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;