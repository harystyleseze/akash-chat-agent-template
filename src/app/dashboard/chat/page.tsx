"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardHeader } from "../../../components/dashboard/dashboard-header";
import { DashboardShell } from "../../../components/dashboard/dashboard-shell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AkashChat behavioral analysis assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(
    "Meta-Llama-3-1-70B-Instruct"
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on what you've shared, it sounds like this behavior might be maintained by negative reinforcement - the relief you feel afterward. Consider tracking when this happens in a journal to identify patterns.",
        "That's an interesting pattern. From a behavioral perspective, we might want to look at the antecedents (what happens before) and the consequences (what happens after) to better understand this behavior.",
        "I notice this behavior seems to occur in specific contexts. Have you considered implementing a replacement behavior that serves the same function but has more positive outcomes?",
        "From your description, I can see several behavioral principles at work. Let's analyze the pattern and develop some evidence-based habits to address it.",
      ];

      const aiMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Chat with AI"
        text="Discuss your behavioral patterns with your AI assistant"
      />

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-[1fr_300px]">
        <Card className="flex flex-col h-[calc(100vh-220px)] border border-border/40 shadow-md">
          <CardHeader className="pb-4 border-b">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <CardTitle>Behavioral Analysis Chat</CardTitle>
                <CardDescription>
                  Ask questions about your behaviors or get recommendations for
                  habit formation
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pb-0 px-4 md:px-6">
            <div className="space-y-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-full sm:max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar
                      className={`h-8 w-8 flex-shrink-0 ${
                        message.role === "assistant"
                          ? "ring-2 ring-primary/20"
                          : ""
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <>
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="AI"
                          />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            AI
                          </AvatarFallback>
                        </>
                      ) : (
                        <>
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="You"
                          />
                          <AvatarFallback className="bg-muted-foreground/10">
                            JD
                          </AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div className="overflow-hidden">
                      <div
                        className={`rounded-lg p-4 break-words ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-muted shadow-sm border border-border/30"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-full sm:max-w-[80%]">
                    <Avatar className="h-8 w-8 flex-shrink-0 ring-2 ring-primary/20">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="AI"
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="overflow-hidden">
                      <div className="rounded-lg bg-muted p-4 shadow-sm border border-border/30">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"></div>
                          <div
                            className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="pt-4 px-4 md:px-6 border-t bg-background/80 backdrop-blur-sm">
            <div className="flex w-full items-center space-x-2">
              <Textarea
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[60px] resize-none border-border/50 focus:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 shadow-sm"
                disabled={isLoading}
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 shadow-sm transition-all"
              >
                <Send className="h-4 w-4 text-primary-foreground" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card className="border border-border/40 shadow-md overflow-hidden">
            <CardHeader className="bg-muted/50 pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                Model Selection
              </CardTitle>
              <CardDescription>
                Choose the AI model for your chat
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full border-border/50 focus:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 shadow-sm">
                  <SelectValue
                    placeholder="Select a model"
                    className="truncate"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DeepSeek-R1">DeepSeek-R1</SelectItem>
                  <SelectItem
                    value="DeepSeek-R1-Distill-Llama-70B"
                    className="truncate"
                  >
                    DeepSeek-R1-Distill-Llama-70B
                  </SelectItem>
                  <SelectItem
                    value="Meta-Llama-3-1-8B-Instruct-FP8"
                    className="truncate"
                  >
                    Meta-Llama-3-1-8B-Instruct-FP8
                  </SelectItem>
                  <SelectItem
                    value="Meta-Llama-3-1-70B-Instruct"
                    className="truncate"
                  >
                    Meta-Llama-3-1-70B-Instruct
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="border border-border/40 shadow-md overflow-hidden">
            <CardHeader className="bg-muted/50 pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Suggested Topics
              </CardTitle>
              <CardDescription>Try asking about these topics</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal break-words border-border/50 hover:bg-muted/60 hover:border-primary/30 shadow-sm transition-colors"
                  onClick={() => {
                    setInput("How can I break my procrastination habit?");
                  }}
                >
                  How can I break my procrastination habit?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal break-words border-border/50 hover:bg-muted/60 hover:border-primary/30 shadow-sm transition-colors"
                  onClick={() => {
                    setInput(
                      "What are some techniques to reduce stress eating?"
                    );
                  }}
                >
                  What are some techniques to reduce stress eating?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal break-words border-border/50 hover:bg-muted/60 hover:border-primary/30 shadow-sm transition-colors"
                  onClick={() => {
                    setInput("How can I build a consistent exercise routine?");
                  }}
                >
                  How can I build a consistent exercise routine?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal break-words border-border/50 hover:bg-muted/60 hover:border-primary/30 shadow-sm transition-colors"
                  onClick={() => {
                    setInput("What's the science behind habit formation?");
                  }}
                >
                  What's the science behind habit formation?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
