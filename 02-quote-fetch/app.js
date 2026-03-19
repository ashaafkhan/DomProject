const loadQuotesBtnRef = document.getElementById("loadQuotesBtn");
const quoteListRef = document.getElementById("quoteList");
const statusTextRef = document.getElementById("statusText");

async function loadQuotes() {
    statusTextRef.textContent = "Loading quotes...";
    loadQuotesBtnRef.disabled = true;

    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/quotes", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch quotes.");
        }

        const data = await response.json();
        const quoteItems = data?.data?.data ?? [];

        quoteListRef.innerHTML = "";

        for (const obj of quoteItems.slice(0, 15)) {
            const li = document.createElement("li");
            li.innerText = obj.content;
            quoteListRef.appendChild(li);
        }

        statusTextRef.textContent = `Loaded ${Math.min(15, quoteItems.length)} quotes.`;
    } catch (error) {
        statusTextRef.textContent = "Could not load quotes. Please try again.";
    } finally {
        loadQuotesBtnRef.disabled = false;
    }
}

loadQuotesBtnRef.addEventListener("click", loadQuotes);
