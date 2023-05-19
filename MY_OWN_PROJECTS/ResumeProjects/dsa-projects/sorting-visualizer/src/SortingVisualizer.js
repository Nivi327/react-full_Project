import { useEffect, useState } from "react";
import './SortingVisualizer.css';
import { getMergeSort } from "./SortingMethods/MergeSort";
import { BubbleSortAlgo } from "./SortingMethods/BubbleSort";
import { InsertionSortAlgo } from "./SortingMethods/InsertionSort";
import { selectionSortAlgo } from "./SortingMethods/SelectionSort";
import Complexities from './SortingMethods/TimeComplexities.json';

const SortingVisualizer = () => {
    const [newArray, setNewArray] = useState([]);
    const [noOfBars, setNoOfBars] = useState(52);
    const [barSpeed, setBarSpeed] = useState(10);
    const [complexity, setComplexity] = useState({SortAlgo:"Merge Sort", Best: "N*logN", Average: "N*logN", Worst: "N*logN", Space: "N" });

    const randomInt = (a, b) => {
        return Math.floor(Math.random() * (a - b + 1) + b)
    }

    const changeSpeed = (e) => {
        setBarSpeed(150 - (+e.target.value))
    }

    const changeBars = (e) => {
        setNoOfBars(e.target.value);
    }

    const resetArray = () => {
        let arr = [];
        const arrayBars = document.getElementsByClassName('div-bar');
        for (let i = 0; i < noOfBars; i++) {
            arr.push(randomInt(5, 600));
            if (arrayBars.length > i) {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = 'rgba(0, 157, 255, 0.8)';
            }
        }
        setNewArray(arr);
    }

    useEffect(() => {
        resetArray();
    }, [noOfBars]);

    let content = "";

    const mergeSort = () => {
        const animations = getMergeSort(newArray);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2
            const arrayBars = document.getElementsByClassName('div-bar');
            if (isColorChange === true) {
                const color = (i % 3 === 0) ? 'red' : 'turquoise';
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * barSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * barSpeed);
            }
        }
        const {Best, Average, Worst, Space} = Complexities.MergeSort;
        setComplexity(prevValues => {return {SortAlgo: "Merge Sort", Best, Average, Worst, Space}})
    }

    const BubbleSort = () => {
        const [animations, random] = BubbleSortAlgo(newArray);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 === 0) || (i % 4 === 1)
            const arrayBars = document.getElementsByClassName('div-bar');
            if (isColorChange === true) {
                const color = (i % 4 === 0) ? 'red' : 'turquoise';
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * barSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                if (barIdx === -1) {
                    continue
                }
                const barStyle = arrayBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * barSpeed);
            }
        }
        const {Best, Average, Worst, Space} = Complexities.BubbleSort;
        setComplexity(prevValues => {return {SortAlgo: "Bubble Sort", Best, Average, Worst, Space}})
    }

    const InsertionSort = () => {
        const animations = InsertionSortAlgo(newArray);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2"
            const arrayBars = document.getElementsByClassName('div-bar');
            if (isColorChange === true) {
                const color = animations[i][0] === "comparision1" ? 'red' : 'turquoise';
                const [s, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * barSpeed);
            } else {
                const [s, barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * barSpeed);
            }
        }
        const {Best, Average, Worst, Space} = Complexities.InsertionSort;
        setComplexity(prevValues => {return {SortAlgo: "Insertion Sort", Best, Average, Worst, Space}})
    }

    const SelectionSort = () => {
        const animations = selectionSortAlgo(newArray);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName("div-bar");
            if (isColorChange === true) {
                const color = animations[i][0] === "comparision1" ? 'red' : 'turquoise';
                const [s, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * barSpeed);
            } else {
                if (animations[i][0] === "index_change") {
                    const [s, barOneIdx, barTwoIdx] = animations[i];
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barTwoStyle.color = 'black';
                    }, i * barSpeed);
                } else {
                    const [s, barIdx, newHeight] = animations[i];
                    const barStyle = arrayBars[barIdx].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * barSpeed);
                }
            }
        }
        const {Best, Average, Worst, Space} = Complexities.SelectionSort;
        setComplexity(prevValues => {return {SortAlgo: "Selection Sort", Best, Average, Worst, Space}})
    }

    return (<>
        <div className="btns">
            <button onClick={resetArray}>Change Array</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={BubbleSort}>Bubble Sort</button>
            <button onClick={InsertionSort}>Insertion Sort</button>
            <button onClick={SelectionSort}>Selection Sort</button>
        </div>
        <div className="bars">
            <div className="noofbars">
                <label htmlFor="noofbars">Elements</label>
                <input type="range" name="noofbars" min="4" max="200" defaultValue="52" onChange={changeBars} />
            </div>
            <div className="barspeed">
                <label htmlFor="noofbars">Play Speed</label>
                <input type="range" name="noofbars" min="0" max="150" step="10" defaultValue="10" onChange={changeSpeed} />
            </div>
        </div>
        <div className="div-container">
            {newArray.map((val, idx) => {
                return <div key={idx} className="div-bar" id={idx + 1} style={{ height: `${val}px` }}></div>
            })}
        </div>
        <div className="div-table">
            <h2>{complexity.SortAlgo} Algorithm Complexity</h2>
            <table className="table">
                <tr>
                    <th>Best Case</th>
                    <td>O({complexity.Best})</td>
                </tr>
                <tr>
                    <th>Average Case</th>
                    <td>O({complexity.Average})</td>
                </tr>
                <tr>
                    <th>Worst Case</th>
                    <td>O({complexity.Worst})</td>
                </tr>
                <tr>
                    <th>Space</th>
                    <td>O({complexity.Space})</td>
                </tr>
            </table>
        </div>
    </>
    )
};

export default SortingVisualizer;