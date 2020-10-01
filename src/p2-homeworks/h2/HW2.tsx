import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low';
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;
export type DefaultAffairsTypes = Array<AffairType>

// constants
let defaultAffairs: DefaultAffairsTypes = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: DefaultAffairsTypes, filter: string): any => { // need to fix any

    if (filter === "all")
        return affairs;
    else if (filter === 'high')
         return affairs.filter(a => a.priority === filter)
    else if(filter === 'middle')
        return affairs.filter(a => a.priority === filter)
    else if (filter === 'low')
        return affairs.filter(a => a.priority === filter); // need to fix
}
export const deleteAffair = (affairs: DefaultAffairsTypes, _id: number): DefaultAffairsTypes => { // need to fix any
        affairs = affairs.filter(a => a._id !== _id)
    return affairs;
}

function HW2() {
    const [affairs, setAffairs] = useState <DefaultAffairsTypes>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    function setFilterFunction (value: FilterType) {
        setFilter(value)
    }

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilterFunction}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
