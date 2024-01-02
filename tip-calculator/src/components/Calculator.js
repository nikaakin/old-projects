import { useState } from "react";
import { InputSide } from "./InputSide";
import { DisplaySide } from "./DisplaySide";

export const Calculator = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [custom, setCustom] = useState("");

  return (
    <div className="flex justify-between p-4 gap-12 lil-screen--flex">
      <div className="basis-[50%]">
        <InputSide
          onSetTip={setTipAmount}
          onSetTotal={setTotal}
          onPeople={setPeople}
          onCustom={setCustom}
          onBill={setBill}
          people={people}
          bill={bill}
          custom={custom}
        />
      </div>
      <div className="basis-[50%]">
        <DisplaySide
          onTotal={setTotal}
          onTip={setTipAmount}
          onPeople={setPeople}
          onCustom={setCustom}
          onBill={setBill}
          total={total}
          tipAmount={tipAmount}
        />
      </div>
    </div>
  );
};
