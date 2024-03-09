interface Props {
  className?: string;
}

export default function LoadingChart({
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="justify-center h-[150px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-[#e3e3e3] absolute rounded-[10px]" />
      <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
        <div className="flex flex-row justify-start items-center w-full gap-2.5">
          <p className="!text-gray-600 text-right">&nbsp;</p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-10 gap-2.5">
          <p className="!text-gray-600 text-right">&nbsp;</p>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-10 gap-2.5 max-w-[735px]">
          <p className="!text-gray-600 text-right">&nbsp;</p>
        </div>
        <div className="flex flex-row justify-between w-full mt-[5px] max-w-[733px]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}
