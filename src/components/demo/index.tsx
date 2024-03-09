import { useEffect, useRef } from "react";
import Hover from "../hover";

interface Props {
  className?: string;
  title?: string;
  value?: string;
  rate?: string;
  isFirst?: any;

}

export default function Demo({
  title,
  value,
  rate,
  isFirst,
  className,
  ...props
}: Props) {

  const hoverRef: any = useRef(null);

  const onHandleMouseEnter = (event: any) => {
    const img = event.currentTarget;
    const imgElement = img.querySelector('#image');
    if (imgElement) {
      imgElement.classList.add('opacity-100');
    }
    event.currentTarget.classList.add("bg-[#F1F1F1]");
  };

  const onHandleMouseLeave = (event: any) => {
    const img = event.currentTarget;
    const imgElement = img.querySelector('#image');
    if (imgElement) {
      imgElement.classList.remove('opacity-100');
    }
    if(!isFirst){
      event.currentTarget.classList.remove("bg-[#F1F1F1]");
    }
  };


  function handleMouseEnter(e: any) {
    const sibling = e.currentTarget.nextElementSibling;
    if (sibling) {
      sibling.classList.add('opacity-100');
    }
  }

  function handleMouseLeave(e: any) {
    const sibling = e.currentTarget.nextElementSibling;
    if (sibling) {
      sibling.classList.remove('opacity-100');
    }
  }

  const handleClickOutside = (event: any) => {
    if (hoverRef.current && !hoverRef.current.contains(event.target)) {
      hoverRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    
  }, []);

  const handleImageClick = () => {
  if (hoverRef.current.style.display === 'none') {
      hoverRef.current.style.display = 'block';
  } else {
    hoverRef.current.style.display = 'none';
  }

  };
  return (
    <div
      {...props}      
      onMouseEnter={onHandleMouseEnter}
      onMouseLeave={onHandleMouseLeave}
      className={`${className} ${(isFirst) ? 'bg-[#F1F1F1]' : ''} `}
    >
      <div className="flex flex-row justify-between items-center w-full gap-4 max-w-full">
        <div className="flex flex-row justify-start w-3/4">
          <p className="!text-gray-700 text-xs font-normal border-b-2 border-black-gray border-dashed cursor-default"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}  >
            {title}
          </p>
          <div className="absolute opacity-0 mt-4 flex flex-col items-start justify-center mb-1 gap-[11px] p-2.5 bg-white shadow-xs rounded-[10px]">
            <h2 className="mt-[5px] !text-black text-sm font-semibold">
              Online store sessions
            </h2>
            <p className="mb-[5px] !text-black text-[13px] font-normal">
              Your online store’s traffic volume, shown in sessions.
            </p>
          </div>

        </div>
        <div className="relative">
          <img src="images/status.svg" alt="image" id="image" onClick={handleImageClick}
            className={`h-6 w-6 re rounded-md hover:bg-black hover:bg-opacity-50 cursor-pointer ease-in duration-300 ${isFirst ? "opacity-100" : "opacity-0"}`}
            />
           <div ref={hoverRef} className="hidden">
            <Hover />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-2 max-w-full">
        <h1 className="text-black text-base font-semibold">
          {value}
        </h1>
        <div className="flex flex-row justify-start items-center w-[15%] gap-0.5">
          <img src="images/trend_gray.svg" alt="image_one" className="h-4 w-2" />
          <p className="!text-gray-700  text-xs font-normal ">
            {rate}
          </p>
        </div>
      </div>
    </div>
  );
}
