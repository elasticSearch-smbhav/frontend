"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ChatbotContextType {
  messages: string[];
  addMessage: (message: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

interface ChatbotProviderProps {
  children: ReactNode;
}

export const ChatbotProvider: React.FC<ChatbotProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatbotContext.Provider
      value={{
        messages,
        addMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = (): ChatbotContextType => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error("useChatbot must be used within an ChatbotProvider");
  }
  return context;
};
