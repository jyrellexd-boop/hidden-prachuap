import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import PlacePage from '@/pages/PlacePage';
import About from '@/pages/About';
import ScanExplore from '@/pages/ScanExplore';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/scan" element={<ScanExplore />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
