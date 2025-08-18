import React from "react";

function StatContainer({prop}) {
  return (
    <div className="bg-[#999999] flex justify-start items-start h-[70px] w-[150px] px-[20px] py-[10px] rounded-[10px] text-lg font-bold">
      {prop.value}
    </div>
  );
}

export default StatContainer;
