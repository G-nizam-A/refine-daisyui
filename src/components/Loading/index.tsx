import LoadingChart from "../LoadingChart";
import LoadingMetric from "../LoadingMetric";

export default function Loading() {
  return (
    <>
      <div className="flex flex-row justify-start w-full p-[22px] bg-gray-">
        <div className="flex flex-col items-center justify-start w-full mt-2  gap-2.5 p-2.5 bg-white shadow-xs rounded-[10px]">
          <header className="flex flex-row justify-center items-center w-full gap-1">
            <div className="flex flex-row w-full gap-1 mx-auto">
              <LoadingMetric className="flex flex-col items-center justify-start w-[25%] gap-[5px] p-[5px] bg-[#f1f1f1] rounded-[10px]" />
              <LoadingMetric className="flex flex-col items-center justify-start w-[25%] gap-1 p-[5px] bg-[#f1f1f1] rounded-[10px]" />
              <LoadingMetric className="flex flex-col items-center justify-start w-[25%] gap-1 p-[5px] bg-[#f1f1f1] rounded-[10px]" />
              <LoadingMetric className="flex flex-col items-center justify-start w-[25%] gap-1 p-[5px] bg-[#f1f1f1] rounded-[10px]" />
            </div>
            <img src="images/frame.svg" alt="image" className="h-[17px]" />
          </header>
          <LoadingChart className="h-[151px] w-full mb-[5px] relative" />
        </div>
      </div>
    </>
  );
}
