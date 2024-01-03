import AllListings from "../tabs/AllListings";
import PendingListing from "../tabs/PendingListing";
import DeclinedListing from "../tabs/DeclinedListing";
import ApprovedListing from "../tabs/ApprovedListing";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PaginationComponent from "@/components/pagination/pagination.component";
import React from "react";

const ListingsSection = () => {
  return (
    <React.Fragment>
      <section className="w-full flex flex-col gap-[2.5rem]">
        <Tabs isLazy variant={"unstyled"}>
          <TabList
            borderBottomWidth={"1px"}
            fontWeight={"medium"}
            className="!hidden md:!flex text-gray-three"
            fontSize={"16px"}
            width={"fit-content"}
            mx={"auto"}
          >
            {listingTab.map((item, i) => (
              <Tab
                px={"2.5rem"}
                pb={"3"}
                fontSize={"14px"}
                textTransform={"capitalize"}
                key={i}
                _selected={{ color: "#FF5626" }}
              >
                {item}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt={"-1px"}
            color={"#FF5626"}
            height="1px"
            bg="#FF5626"
            borderRadius="1px"
            className="!hidden md:!block"
          />
          <TabPanels>
            <TabPanel>
              <AllListings />
            </TabPanel>
            <TabPanel>
              <DeclinedListing />
            </TabPanel>
            <TabPanel>
              <ApprovedListing />
            </TabPanel>
            <TabPanel>
              <PendingListing />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
      <section className="w-full flex flex-col gap-[2.5rem] mt-2 md:mt-20">
        <PaginationComponent />
      </section>
    </React.Fragment>
  );
};

export default ListingsSection;

const listingTab = ["all", "declined", "approved", "pending"];
