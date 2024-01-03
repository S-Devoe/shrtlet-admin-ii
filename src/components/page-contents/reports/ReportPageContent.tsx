import { Fragment } from "react";
import FilterDropdown from "../../dropdown/FilterDropdown";
import PendingReports from "./tabs/PendingReports";
import ResolvedReports from "./tabs/ResolvedReports";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Button from "@/components/buttons/button";
import PaginationComponent from "@/components/pagination/pagination.component";

const ReportPageContent = () => {
  return (
    <Fragment>
      <section className="w-full flex flex-col gap-5">
        <Tabs isLazy variant={"unstyled"}>
          <TabList
            borderBottomWidth={"1px"}
            fontWeight={"medium"}
            className="text-gray-three"
            fontSize={"16px"}
            width={"100%"}
            maxWidth="50rem"
            display="flex"
            alignItems="start"
          >
            {reportTab.map((item, i) => (
              <Tab
                px={{ base: "2rem", md: "5rem" }}
                pb={"3"}
                fontSize={"1rem"}
                textTransform={"capitalize"}
                key={`tab-${i + 1}`}
                _selected={{ color: "#FF5626" }}
                className="!whitespace-nowrap"
                display={"flex"}
                justifyContent={"center"}
                width='100%'
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt={"-1px"}
            color={"#FF5626"}
            height="1px"
            bg="#FF5626"
            borderRadius="1px"
          />

          <div className="mb-2 mt-4 flex flex-col md:flex-row items-center gap-4 justify-between">
            <FilterDropdown intialValue="Guests" />
            <div className="w-full flex items-center gap-4">
              <FilterDropdown intialValue="Month" />
              <FilterDropdown intialValue="Year" />
            </div>
            <Button className="w-full !py-4 !rounded-2xl" text="Filter" />
          </div>
          <TabPanels>
            {reportTab.map((item, i) => (
              <TabPanel px="0" key={`panel-${i + 1}`}>
                {item.component}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </section>
      <section className="w-full flex flex-col gap-[2.5rem] mt-2 md:mt-20">
        <PaginationComponent />
      </section>
    </Fragment>
  );
};

export default ReportPageContent;

export const reportTab = [
  {
    label: "Pending Reports",
    value: "pending",
    component: <PendingReports />,
  },
  {
    label: "Resolved Reports",
    value: "resolved",
    component: <ResolvedReports />,
  },
];
