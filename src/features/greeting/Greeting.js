import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreetings } from "./greetingSlice";


export default function Greeting() {
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting.value)
    
    useEffect(() => {
        dispatch(fetchGreetings())
    } , [dispatch]);

    return(<div>
        <h2>
            {greeting}
        </h2>
    </div>)
}