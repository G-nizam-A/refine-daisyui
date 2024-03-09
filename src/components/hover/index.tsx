import { HoverData } from "../../data/data"

function Hover() {
  return (
    <div className="absolute flex flex-row justify-between items-start w-[202px] right-1 bg-white z-10 rounded-lg">
      <div className="flex flex-col items-center justify-start w-full gap-[5px] p-[5px] bg-white shadow-xs rounded-[10px] ">
        {HoverData.map((item: any, index: any) => (
          <div
          onMouseEnter={(e: any) => e.currentTarget.querySelector('.second-image').classList.add('opacity-100')}
          onMouseLeave={(e: any) => e.currentTarget.querySelector('.second-image').classList.remove('opacity-100')} 
          key={index} className={`group  flex flex-row justify-start items-center w-full gap-2.5 p-1  ${(item.id === 2) ? 'bg-gray-100 disabled' : ' hover:bg-gray-100'}  rounded`}>
            <img src="images/stock.svg" alt="trend" className="h-[10px] w-[10px] ml-[5px]" />
            <p className="text-[10px] font-normal !text-gray-900">
              {item.title}
            </p>
            <img src="images/question.svg" alt="trend" className={` h-auto w-[10px] ml-auto second-image ${(item.id === 2) ? 'opacity-100' : 'opacity-0'}`}/>
          </div>
        ))}
      </div>
     
    </div>

  )
}

export default Hover