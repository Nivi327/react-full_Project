import { memo } from "react";

const Nums = ({ nums, addRandom }) => {
    // const [numbers, setNumbers] = useState([]);
    console.log("Nums rerendered");

    return <div>
        <ul>
            {
                nums.map((val, idx) => {
                    return <li key={idx}>{val}</li>
                })
            }
        </ul>
        <button onClick={addRandom}>+</button>
    </div>
};

export default memo(Nums);