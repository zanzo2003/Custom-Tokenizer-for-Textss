# Shashwath's Tokenizer

A simple, modern web app to tokenize and detokenize text using a custom logic.  
Convert text to a unique array of tokens and back, with a beautiful and intuitive interface.

**Live Demo:** [https://zanzo2003.github.io/Custom-Tokenizer-for-Textss/](https://zanzo2003.github.io/Custom-Tokenizer-for-Textss/)  
**GitHub:** [https://github.com/zanzo2003/Custom-Tokenizer-for-Textss](https://github.com/zanzo2003/Custom-Tokenizer-for-Textss)

---

## ✨ Features

- **Tokenize:** Convert any text into a custom array of tokens (character codes grouped by word, with spaces as separate tokens).
- **Detokenize:** Paste an array of tokens (e.g. `["72 101 108 108 111","32","119 111 114 108 100"]`) to instantly get back the original text.
- **Modern UI:** Clean, responsive design with tabbed navigation for a smooth user experience.

---

## 🧩 Tokenization Logic

- **Tokenize:**  
  - Each word is converted to a string of space-separated character codes (using `charCodeAt`).
  - Spaces between words are represented by the token `"32"` (the ASCII code for space).
  - Example:  
    Input:  
    ```
    Hello world!
    ```
    Output:  
    ```
    ["72 101 108 108 111","32","119 111 114 108 100 33"]
    ```

- **Detokenize:**  
  - Each token is split into numbers and converted back to characters using `fromCharCode`.
  - The `"32"` token is converted to a space.
  - Example:  
    Input:  
    ```
    ["72 101 108 108 111","32","119 111 114 108 100 33"]
    ```
    Output:  
    ```
    Hello world!
    ```

---

## 🚀 How to Use

1. **Tokenize Tab:**  
   - Enter your text in the textarea and click **Tokenize** to get the token array.

2. **Detokenize Tab:**  
   - Paste your token array (e.g. `["72 101 108 108 111","32","119 111 114 108 100"]`) and click **Detokenize** to get back the original text.

---

## 📦 Deployment

This project is deployed on GitHub Pages:  
[https://zanzo2003.github.io/Custom-Tokenizer-for-Textss/](https://zanzo2003.github.io/Custom-Tokenizer-for-Textss/)

---

## 🛠️ Project Structure

```
index.html
index.js
style.css
```

---

## 📄 License

MIT License

---

Made with ❤️
