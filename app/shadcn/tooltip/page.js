"use client";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import axios from "axios";
import React from "react";
import Chatbot from "react-chatbot-kit";

// import config from "./configs/chatbotConfig";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";

const config = {
  initialMessages: [
    {
      text: "Hi, I am ChatGPT!",
      sender: "ChatGPT",
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  botName: "ChatGPT",
};

const actionProvider = {
  async processAction(payload, chatbotState, setChatbotState) {
    const { text } = payload;

    if (text === "hello") {
      setChatbotState({
        messages: [
          ...chatbotState.messages,
          { text: "Hi, friend.", sender: "ChatGPT" },
        ],
      });
    } else {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "Explain all concept like a Professor in Biochemistry",
              },
              ...chatbotState.messages,
              { role: "user", content: text },
            ],
          },
          {
            headers: {
              Authorization: `Bearer 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`,
              "Content-Type": "application/json",
            },
          }
        );

        setChatbotState({
          messages: [
            ...chatbotState.messages,
            {
              text: response.data.choices[0].message.content,
              sender: "ChatGPT",
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
};

function page() {
  const [chatbotState, setChatbotState] = useState(config);

  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={chatbotState} actionProvider={actionProvider} />
      </header>
    </div>
  );
}

export default page;
