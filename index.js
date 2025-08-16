// Tokenizer logic from customTokenizer.js
		function tokenize(inputText) {
			let tokens = [];
			const words = inputText.split(" ");
			words.forEach((word) => {
				let wordTokens = '';
				for (let char of word) {
					wordTokens += char.charCodeAt(0) + ' ';
				}
				tokens.push(wordTokens.trim());
				tokens.push(' '.charCodeAt(0).toString());
			});
			tokens.pop();
			return tokens;
		}
		function detokenize(tokens) {
			let result = "";
			tokens.forEach((token) => {
				if (token === "32") {
					result += " ";
				} else {
					let chars = token.split(" ").map(num => String.fromCharCode(parseInt(num)));
					result += chars.join("");
				}
			});
			return result;
		}
		// Tab switching logic
		const tabTokenize = document.getElementById('tab-tokenize');
		const tabDetokenize = document.getElementById('tab-detokenize');
		const contentTokenize = document.getElementById('content-tokenize');
		const contentDetokenize = document.getElementById('content-detokenize');
		tabTokenize.addEventListener('click', () => {
			tabTokenize.classList.add('active');
			tabDetokenize.classList.remove('active');
			contentTokenize.classList.add('active');
			contentDetokenize.classList.remove('active');
		});
		tabDetokenize.addEventListener('click', () => {
			tabDetokenize.classList.add('active');
			tabTokenize.classList.remove('active');
			contentDetokenize.classList.add('active');
			contentTokenize.classList.remove('active');
		});
		// Tokenize button logic
		document.getElementById('tokenize-btn').addEventListener('click', () => {
			const input = document.getElementById('tokenize-input').value.trim();
			const resultDiv = document.getElementById('tokenize-result');
			if (!input) {
				resultDiv.textContent = 'Please enter some text.';
				return;
			}
			const tokens = tokenize(input);
			resultDiv.textContent = JSON.stringify(tokens);
		});
		// Detokenize button logic
		document.getElementById('detokenize-btn').addEventListener('click', () => {
			const input = document.getElementById('detokenize-input').value.trim();
			const resultDiv = document.getElementById('detokenize-result');
			if (!input) {
				resultDiv.textContent = 'Please enter tokens.';
				return;
			}
			let tokens = [];
			try {
				// Try to parse as JSON array (e.g., ["72 101 108", "32", ...])
				if (input.startsWith('[')) {
					tokens = JSON.parse(input);
				} else {
					// fallback: comma or space separated
					tokens = input.split(',').map(t => t.trim()).filter(Boolean);
					if (tokens.length === 1) {
						tokens = input.split(/\s+/).filter(Boolean);
					}
				}
			} catch (e) {
				resultDiv.textContent = 'Invalid input format.';
				return;
			}
			// Flatten the array of string tokens into a single array of numbers (as strings)
			let flatTokens = [];
			tokens.forEach(token => {
				if (typeof token === 'string') {
					token.split(/\s+/).forEach(num => {
						if (num) flatTokens.push(num);
					});
				}
			});
			// Now detokenize using the flat array
			const text = detokenize(flatTokens);
			resultDiv.textContent = text;
		});