// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Nav from "./components/Nav";
import "./App.css";

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages


// import products from './data/products.js';
import TopicsPage from "./pages/TopicsPage.js";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.js";
import OrderPage from "./pages/OrderPage.js";

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:

// If your schema requires SHORT data input, then use the TABLE design.
import LogPage from "./pages/bucketlistlogPage.js";
import CreatePage from "./pages/CreatePage.js";
import EditPage from "./pages/EditPage.js";
import ContactPage from "./pages/ContactPage.js";
import PeoplePage from "./pages/PeoplePage/PeoplePage.js"

// Define the function that renders the content in Routes, using State.
function App() {
  const [bucketList, setBucketList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Casey Morris</h1>
          <i>
            <img
              src="./android-chrome-192x192.png"
              className="App-logo"
              alt="Casey Morris Logo"
            />
          </i>
          <p>
            Demonstrating getting data from an API and a MongoDB Database, and a simple order form.
          </p>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>

              <Route path="/" element={<PeoplePage />} />
              <Route
                path="/bucketlistlog"
                element={
                  <LogPage
                    bucketList={bucketList}
                    setBucketList={setBucketList}
                  />
                }
              />
              <Route path="/add-bucketlist" element={<CreatePage />} />
              <Route
                path="/edit-bucketlist"
                exact
                element={<EditPage bucketList={bucketList} />}
              />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="orders" element={<OrderPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Casey Morris</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
