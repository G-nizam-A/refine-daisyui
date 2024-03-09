interface Props {
  className?: string;
}

export default function LoadingMetric({
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full ">
        <div className="flex flex-col items-start justify-start w-[77%] gap-px bg-[#d9d9d9] rounded-sm">
          <div className="flex flex-row justify-start">
            <p className="!text-gray-900 !font-medium ">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="h-[22px] w-full relative">
        <div className="flex flex-row justify-start w-[94%] h-max left-0 bottom-0 top-0 m-auto absolute">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="h-[20px] w-full z-[1] bg-[#d9d9d9] rounded-sm" />
            <h1 className="mt-[-17px]">&nbsp;</h1>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-[12%] h-max gap-px left-[40%] bottom-0 top-0 m-auto absolute">
          <div className="flex flex-col items-center justify-start w-[28%]">
            <img src="images/img_trend_gray_700_01.svg" alt="loading_one" className="h-[8px]" />
          </div>
          <p className="h-[10px] !text-gray-700">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}
