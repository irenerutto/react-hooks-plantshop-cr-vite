🌱 Plantsy

A React single-page application (SPA) for managing a plant shop inventory. Users can view plants, add new plants, search through the inventory, and mark plants as out of stock. The project uses a local JSON server as a backend API.

---
📌 Features
View all available plants on page load
Add new plants using a form (POST request to backend)
Search plants by name (real-time filtering)
Mark plants as “In Stock” or “Out of Stock” (UI state only)
Dynamic rendering using React state and props

---
🛠️ Built With
React (Vite or Create React App depending on setup)
JavaScript (ES6+)
JSON Server (mock backend API)
HTML & CSS

---
⚙️ How It Works
🔹 Fetching Plants

Plants are fetched from the JSON server using useEffect when the app loads.

🔹 Adding Plants

A form submits new plant data using a POST request and updates state immediately.

🔹 Searching

The search bar filters plants using:

plant.name.toLowerCase().includes(search.toLowerCase())
🔹 Stock Status

Each plant card has a local state toggle to mark it as:

In Stock
Out of Stock

(No backend persistence required)

---

🔮 Future Improvements
Persist stock status to backend
Add plant deletion feature
Add edit/update plant functionality
Improve UI styling and responsiveness
Add categories or plant types

---
👩‍💻 Author

Created as part of a React + API integration lab project.

