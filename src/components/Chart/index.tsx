interface Props {
  p40k?: string;
  p20k?: string;
  zero?: string;
  octcounter?: string;
  deccounter?: string;
  febcounter?: string;
  aprcounter?: string;
  juncounter?: string;
  augcounter?: string;
  octcounter1?: string;
  deccounter1?: string;
  oct12022feb?: string;
  oct12022febone?: string;
}


export default function Chart({
  p40k = "40K",
  p20k = "20K",
  zero = "0",
  octcounter = "Oct 2022",
  deccounter = "Dec 2022",
  febcounter = "Feb 2023",
  aprcounter = "Apr 2023",
  juncounter = "Jun 2023",
  augcounter = "Aug 2023",
  octcounter1 = "Oct 2023",
  deccounter1 = "Dec 2023",
  oct12022feb = "Oct 1, 2022 - Feb 21, 2024",
  oct12022febone = "Oct 1, 2022 - Feb 21, 2024",
  ...props
}: Props) {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-2 max-w-[773px]">
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-row justify-center w-full p-[5px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start items-center w-full gap-2.5">
              <p className="ml-px !text-gray-600 text-right">
                {p40k}
              </p>
              <div className="h-px w-[96%] bg-gray-100_01" />
            </div>
            <div className="h-[69px] w-full mt-5 relative">
              <img
                src="images/img_vector_1.png"
                alt="vectorone_one"
                className="justify-center h-[69px] w-[96%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <img
                src="images/img_vector_2.png"
                alt="vectortwo_one"
                className="justify-center h-[41px] w-[96%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-start items-center w-full gap-2.5 top-[29%] right-0 left-0 m-auto absolute">
                <p className="!text-gray-600 text-right">
                  {p20k}
                </p>
                <div className="h-px w-[96%] bg-gray-100_01" />
              </div>
            </div>
            <div className="flex flex-row justify-end items-center w-full mt-[5px] gap-2.5">
              <p className="!text-gray-600 text-right">
                {zero}
              </p>
              <div className="h-px w-[96%] bg-gray-100_01" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="ml-[19px]">
            {octcounter}
          </p>
          <p>{deccounter}</p>
          <p>{febcounter}</p>
          <p>{aprcounter}</p>
          <p>{juncounter}</p>
          <p>{augcounter}</p>
          <p>{octcounter1}</p>
          <p className="mr-[19px]">
            {deccounter1}
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-end w-full gap-2.5 py-[5px]">
      <div className="flex flex-row justify-start items-end w-[25%] gap-2.5 p-[3px] bg-gray-100 rounded-sm">
        <img src="images/img_line_3.png" alt="linethree_one" className="w-[6%] mb-[5px] ml-1.5 object-cover" />
        <p className="mt-0.5 !text-gray-600 text-[10px] font-normal ">
          {oct12022feb}
        </p>
      </div>
      <div className="flex flex-row justify-start items-end w-[25%] gap-2.5 p-[3px] bg-gray-100 rounded-sm">
        <img
          src="images/img_line_3_2x10.png"
          alt="linethree_three"
          className="w-[6%] mb-[5px] ml-1.5 object-cover"
        />
        <p className="mt-0.5 !text-gray-600 text-[10px] font-normal ">
          {oct12022febone}
        </p>
      </div>
    </div>
  </div>
  )
};