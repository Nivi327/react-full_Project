import { useState } from "react";
import "./CallToClean.css";
import Card from "../../UI/Card";
import Services from "./../../assets/services";

let service_options = Services.map((service, idx) => {
  return <option key={idx}>{service.service}</option>;
});

const CallToClean = () => {
  const [options, setOptions] = useState(service_options);

  const changeOptions = () => {
    let value = document.querySelector("#select").value;

    if (value === "") {
      setOptions(service_options);
      return;
    }
    for (let serve of Services) {
      if (value === serve.service && serve.values.length !== 0) {
        let new_options = serve.values.map((sub_serve, idx) => {
          return <option key={idx}>{sub_serve}</option>;
        });
        setOptions(new_options);
      }
    }
  };

  return (
    <Card>
      <form>
        <div className="select_mate" data-mate-select="active">
          <select id="select" onChange={changeOptions}>
            <option value="">Select Pest Control-Options</option>
            {options}
          </select>
        </div>
        <div className="name-phone">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="pincode-address">
          <input type="text" placeholder="PinCode or Address" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
        <p>Average call back time : 12 min (Last update 5 mins ago)</p>
      </form>
    </Card>
  );
};

export default CallToClean;
