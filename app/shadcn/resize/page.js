"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function page() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel
        defaultSize={50}
        className=" border-double  border-sky-400"
      >
        <div className="flex h-[500px] items-center justify-center ">
          <img
            src="https://images.unsplash.com/photo-1521737995900-610f2171cac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTQ4NDg2MHx8ZW58MHx8fHx8"
            width={"100%"}
            alt="image"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={50}
        className=" border-double  border-sky-400"
      >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center ">
              {/* <span className="font-semibold">Two</span> */}
              <img
                src="https://images.unsplash.com/photo-1604651901258-822bd831b594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                width={"100%"}
                alt="img"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            defaultSize={75}
            className=" border-double  border-sky-400"
          >
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center ">
                  {/* <span className="font-semibold">Two</span> */}
                  <img
                    src="https://images.unsplash.com/photo-1597188447214-2257614e5533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTE0ODQ4NjB8fGVufDB8fHx8fA%3D%3D"
                    width={"100%"}
                    alt="imge3"
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel
                defaultSize={75}
                className=" border-double  border-sky-400"
              >
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center ">
                      {/* <span className="font-semibold">Two</span> */}
                      <img
                        src="https://images.unsplash.com/photo-1552748608-2c2c9675b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MTE0ODQ4NjB8fGVufDB8fHx8fA%3D%3D"
                        width={"100%"}
                        alt="image2"
                      />
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel
                    defaultSize={75}
                    className=" border-double  border-sky-400"
                  >
                    <ResizablePanelGroup direction="horizontal">
                      <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center ">
                          {/* <span className="font-semibold">Two</span> */}
                          <img
                            src="https://images.unsplash.com/photo-1597188447214-2257614e5533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTE0ODQ4NjB8fGVufDB8fHx8fA%3D%3D"
                            width={"100%"}
                            alt="imge3"
                          />
                        </div>
                      </ResizablePanel>
                      <ResizableHandle />
                      <ResizablePanel
                        defaultSize={75}
                        className=" border-double  border-sky-400"
                      >
                        <div className="flex h-full items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1541990202460-76a724b4a44f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTQ4NDg2MHx8ZW58MHx8fHx8"
                            width={"100%"}
                            alt="img"
                          />
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
