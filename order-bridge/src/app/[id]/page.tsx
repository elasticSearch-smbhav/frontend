import { Breadcrumb } from "flowbite-react";

const Page = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="rounded-lg bg-app-bg-primary p-2 text-app">
            Home
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Page;
