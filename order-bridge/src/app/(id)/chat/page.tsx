"use client";

import { useChatbot } from "@/context/chatbotContext";
import WithAuth from "@/hoc/withAuth";
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
    addMessage(prompt); // Add user's prompt to the chat
    setPrompt(""); // Clear the input field

    // Scroll to the bottom to show the new messages
    scrollToBottom();

    try {
      // Send the prompt to the backend API
      const response = await fetch("http://127.0.0.1:8080/getChatResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        
        // Extract the answer from the API response and add it to the chat
        addMessage(data.answer);
      } else {
        addMessage("Sorry, I couldn't fetch an answer at the moment.");
      }
    } catch (error) {
      // In case of an error (e.g., network failure)
      addMessage("Error: Unable to contact the server.");
    }

    // Scroll to the bottom to show the response
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

export default WithAuth(Page);
