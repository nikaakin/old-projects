export const DisplaySide = ({
  tipAmount,
  total,
  onPeople,
  onCustom,
  onBill,
  onTip,
  onTotal,
}) => {
  const resetStuff = () => {
    onPeople("");
    onBill("");
    onCustom("");

    onTip("0.00");
    onTotal("0.00");
  };

  return (
    <div className=" bg-[#00474B] rounded-lg h-full py-10 px-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-6 ">
          <div className="flex flex-col">
            <span className="text-white">Tip Amount</span>
            <span className="text-[#7F9D9F] text-xs">/ person</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#26C2AE] text-3xl">${tipAmount}</span>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-white">Total</span>
            <span className="text-[#7F9D9F] text-xs">/ person</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#26C2AE] text-3xl">${total}</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={(e) => {
            resetStuff(e);
          }}
          className="w-full py-2 text-[#00474B] bg-[#0D686D] hover:text-white hover:bg-[#26C2AE]"
        >
          RESET
        </button>
      </div>
    </div>
  );
};
