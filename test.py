import tkinter as tk
from tkinter import scrolledtext

class ChatBot:
    def __init__(self, master):
        self.master = master
        master.title("Simple Chatbot")

        self.chat_history = ""

        self.label = tk.Label(master, text="Welcome to Simple Chatbot!")
        self.label.pack()

        self.text_area = scrolledtext.ScrolledText(master, width=50, height=10, wrap=tk.WORD)
        self.text_area.pack()

        self.send_button = tk.Button(master, text="Send", command=self.send_message)
        self.send_button.pack()

        self.chat_display = scrolledtext.ScrolledText(master, width=50, height=20, wrap=tk.WORD)
        self.chat_display.pack()

    def send_message(self):
        message = self.text_area.get("1.0", tk.END).strip()
        self.text_area.delete("1.0", tk.END)
        self.display_message("You: " + message)
        response = "Bot: " + message  
        self.display_message(response)

    def display_message(self, message):
        self.chat_history += message + "\n"
        self.chat_display.config(state=tk.NORMAL)
        self.chat_display.insert(tk.END, message + "\n")
        self.chat_display.config(state=tk.DISABLED)

def main():
    root = tk.Tk()
    chatbot = ChatBot(root)
    root.mainloop()

if __name__ == "__main__":
    main()
