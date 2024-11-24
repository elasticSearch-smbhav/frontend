"use client";

import { useChatbot } from "@/context/chatbotContext";
import { Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const { messages, addMessage } = useChatbot();

  const [prompt, setPrompt] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendPrompt = async () => {
    addMessage(prompt);
    addMessage("I am a chatbot. I don't have the answer to that yet.");
    setPrompt("");
    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full gap-2 p-2 flex flex-col justify-start overflow-y-auto rounded-xl rounded-b-none">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 px-4 rounded-lg break-words max-w-[60%] ${
              index % 2 === 0
                ? "bg-app ml-auto text-white"
                : "bg-gray-200 mr-auto text-black"
            }`}
          >
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full border-2 border-app flex justify-between items-center gap-2 p-4 rounded-xl mt-auto">
        <TextInput
          className="w-full"
          color="primary"
          placeholder="Get answer to your queries..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button onClick={sendPrompt} color="purple" className="w-32">
          Ask Chatbot
        </Button>
      </div>
    </div>
  );
};

export default Page;
