import Demo from "../demo";
import { Data } from "../../data/data";
import { ResponsiveAreaChart } from "./ResponsiveAreaChart";
import { ResponsiveBarChart } from "./ResponsiveBarChart";
import { useEffect, useMemo, useRef, useState } from "react";
import { IChartDatum, TTab } from "../../interfaces";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { TabView } from "./TabView";
import Loading from "../Loading";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];
const NewStats = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };


  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);


  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveAreaChart
          kpi="Daily revenue"
          data={memoizedRevenueData}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 2,
      label: "Daily Orders",
      content: (
        <ResponsiveBarChart
          kpi="Daily orders"
          data={memoizedOrdersData}
          colors={{
            stroke: "rgb(255, 159, 64)",
            fill: "rgba(255, 159, 64, 0.7)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "New Customers",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data={memoizedNewCustomersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  const tabViewRef = useRef(null);

  const toggleTabView = () => {
    const tabView: any = tabViewRef.current;
    const image: any = document.getElementById('toggle-image');
    if (tabView.style.display === 'none') {
      tabView.style.display = 'block';
      image.classList.remove('rotate-180');
    } else {
      tabView.style.display = 'none';
      image.classList.add('rotate-180');
    }
  };
  if(!tabs){
    
  }


  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 1000); 
  }, []);

  return (
    <>
      {!dataLoaded ? (
        <Loading />
      ) : (
  // return (
    <>
      <header className="flex flex-col justify-center items-center mx-auto mt-2 gap-1 p-2.5 bg-white shadow-xs rounded-t-lg md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col w-full gap-1 md:flex-row ">
          {Data.map((item: any, index) => (
            <Demo key={item.id} title={item.title} value={item.value} rate={item.rate} isFirst={index === 0} className="flex flex-col justify-start w-full md:w-1/4 gap-1 p-2 rounded-lg ease-in duration-300" />
          ))}
        </div>
        <img src="images/frame_black.svg" id="toggle-image" alt="image" className="h-4 cursor-pointer rotate-180" onClick={toggleTabView} />
      </header>
      <div ref={tabViewRef} style={{ display: 'block' }}>
        <TabView tabs={tabs} />
      </div>
    </>
    )}
    </>
  );
};

export default NewStats;
