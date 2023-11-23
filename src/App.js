// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Celebrity from "./Component/pages/Celebrity";
// import Home from "./Component/pages/Home";
// import Movies from "./Component/pages/Movies";
// import NotFound from "./Component/pages/NotFound";
// import TV from "./Component/pages/TV";
// import Header from "./Component/Header";
// import Ad from "./Component/Ad";

// function App() {
//   return (
//     <div className="root-wrap">
//       <BrowserRouter>
//       <Header />
//       <Ad />
				
//         <Routes>
//           <Route path="/" element={Home()} />
//           <Route path="/celebrity" element={Celebrity()} />
//           <Route path="/movies" element={Movies()} />
//           <Route path="/notfound" element={NotFound} />
//           <Route path="/tv" element={TV()} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;