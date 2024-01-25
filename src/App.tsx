import { useState } from "react";
import Input from "./components/input";
import Tabs from "./components/taps";
import Button from "./components/button";
import CardPrimary from "./components/card-primary";
import CardSecondary from "./components/card-secondary";
import Accordion from "./components/accordion";

function App() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("Today");
  const tabsArray = ["Today", "Tomorrow"];
  return (
    <main className="bg-zinc-20 px-5 py-10 flex flex-col gap-6">
      <form action="" className="max-w-7xl mx-auto flex gap-3">
        <Input placeholder="New York" setValue={setValue} value={value} />
        <Button onClick={() => {}}>Send</Button>
      </form>
      <CardPrimary city="New York" temp="24" icon="f" weather="Sunny" />
      <CardSecondary temp="20C - 22c" wind="8" humidity="50%" />
      <div className="max-w-7xl flex flex-col gap-3">
        <Tabs
          tabsArray={tabsArray}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full mx-auto border-2 border-black bg-white font-bold">
          {activeTab === "Today" && (
            <div className="h-32 px-3 flex gap-2 justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Tomorrow" && (
            <div className="h-32 px-3 flex gap-2 justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>time</span>
                <div className="flex flex-col items-center">
                  <img src="icon" alt="icon" />
                  <span>26ª</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl flex flex-col gap-3">
        <Accordion
          question="What is the name of the app style?"
          answer="The style is Neobrutalism"
        />
        <Accordion
          question="What technology is used?"
          answer="React, Typescript and TailwindCSS"
        />
        <Accordion
          question="What is weather"
          answer="The state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover"
        />
        <Accordion
          question="How many climates exist?"
          answer="Divides the world's climates into five main groups: tropical, dry, temperate, continental and polar."
        />
        <Accordion
          question="What is the purpose of this app?"
          answer="Provides the current weather status."
        />
      </div>
    </main>
  );
}

export default App;
