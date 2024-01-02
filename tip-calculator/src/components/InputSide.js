import img from "../image/Group_8.png";

export const InputSide = ({
  onSetTip,
  onSetTotal,
  onPeople,
  onCustom,
  onBill,
  people,
  bill,
  custom,
}) => {
  const tipValues = [5, 10, 15, 25, 50];

  const inputDesign = (el, src) => {
    return (
      <div className=" text-[#9EBBBD] text-2xl flex bg-[#F3F9FA] ">
        <div className="relative w-10 h-5 ">
          {el !== 0 ? (
            <span className="absolute top-1 left-4 text-2xl ">{el}</span>
          ) : (
            <img className="absolute top-3 left-4 " src={src} />
          )}
        </div>
        <div className="w-full  flex justify-end">
          <input
            onChange={(e) => {
              el !== 0 ? onBill(e.target.value) : onPeople(e.target.value);
            }}
            value={el !== 0 ? bill : people}
            className="text-right bg-[#F3F9FA] focus:outline-0 px-2 py-1 min-w-[100%] "
            type="number"
            placeholder="0"
          />
        </div>
      </div>
    );
  };

  const onClickOrSubmit = (e) => {
    e.preventDefault();
    if (people == false) return;

    onBill(bill);
    onCustom(custom);
    onPeople(people);

    const total =
      parseFloat(bill) +
      (bill / 100) * parseFloat(e.target.innerText || custom);

    onSetTip((total / parseInt(people)).toFixed(2));
    onSetTotal(total.toFixed(2));
  };

  return (
    <div>
      <div className=" mb-10">
        <label className="text-[#5E7A7D] text-base">
          Bill
          {inputDesign("$", "")}
        </label>
      </div>
      <div className=" mb-10">
        <span className="text-base text-[#5E7A7D]">Select Tip %</span>
        <div className="grid grid-cols-3 gap-3.5 text-white lil-screen--grid">
          {tipValues.map((tipValue, i) => {
            return (
              <button
                key={i}
                className="px-3.5 py-1.5 bg-[#00474B] text-center rounded hover:bg-[#26C2AE]"
                onClick={(e) => {
                  onClickOrSubmit(e);
                }}
              >
                {tipValue}%
              </button>
            );
          })}
          <form
            className=""
            onSubmit={(e) => {
              onClickOrSubmit(e);
            }}
          >
            <input
              onChange={(e) => onCustom(e.target.value)}
              value={custom}
              className="w-full h-full text-center text-[#547878] focus:outline-0 text-lg bg-[#F3F9FA] rounded"
              name="Custom"
              type="number"
              placeholder="Custom"
            />
          </form>
        </div>
      </div>
      <div>
        <label className="text-[#5E7A7D] text-base">
          <div className="flex justify-between">
            <span> Number of People</span>
            <span className="text-red-800">
              {people == false ? "Can't be zero" : ""}
            </span>
          </div>
          {inputDesign(0, img)}
        </label>
      </div>
    </div>
  );
};
