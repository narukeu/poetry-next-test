"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface accItem {
  title: string;
  content: string;
}

const AccordionPanel: React.FC<{ accData: accItem[] }> = ({ accData }) => {
  const renderPanel = () => {
    return accData.map((item, index) => (
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between bg-blue-100 px-4 py-2 text-left text-xl font-medium text-black hover:bg-zinc-200 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75">
              <span>{item.title}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-zinc-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2 pb-3 text-base text-gray-500">
              {item.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ));
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full rounded-xl bg-white p-2">
        {renderPanel()}
      </div>
    </div>
  );
};

export default AccordionPanel;