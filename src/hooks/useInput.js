import { useState } from "react";

export const useInput = (init = {}) => {
    const [inputs,setInputs] = useState(init)

    const handleInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
    }

    return {
        inputs,
        handleInput
    }
}