import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = React.memo((
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const handleChange = (event: ChangeEvent<{}>, newValue: any) => { //materialUi достает number | number[]
        //а я пока не умею делать проверку на if(newValue === [number, number]), поэтому any
        onChangeRange && onChangeRange(newValue)
    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider style={{width: '200px'}}
                    value={value}
                    onChange={handleChange}
            />
        </>
    );
})

export default SuperDoubleRange;
