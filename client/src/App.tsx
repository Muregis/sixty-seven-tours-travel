// Design note: Field Notes Modernism — every route shares one calm editorial shell and one primary action: Request a quote.

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteShell } from "./components/SiteShell";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Ngo from "./pages/Ngo";
import SafariCoast from "./pages/SafariCoast";
import HowWeWork from "./pages/HowWeWork";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Insights from "./pages/Insights";
import FAQ from "./pages/FAQ";
import DestinationNairobi from "./pages/destinations/Nairobi";
import DestinationMaasaiMara from "./pages/destinations/MaasaiMara";
import DestinationAmboseli from "./pages/destinations/Amboseli";
import DestinationCoast from "./pages/destinations/Coast";
import DestinationNaivashaNakuru from "./pages/destinations/NaivashaNakuru";
import DestinationNorthernKenya from "./pages/destinations/NorthernKenya";
import DestinationKakamega from "./pages/destinations/Kakamega";

function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/ngo" component={Ngo} />
        <Route path="/safari-coast" component={SafariCoast} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/insights" component={Insights} />
        <Route path="/how-we-work" component={HowWeWork} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/destinations/nairobi" component={DestinationNairobi} />
        <Route path="/destinations/maasai-mara" component={DestinationMaasaiMara} />
        <Route path="/destinations/amboseli" component={DestinationAmboseli} />
        <Route path="/destinations/coast-watamu" component={DestinationCoast} />
        <Route path="/destinations/naivasha-nakuru" component={DestinationNaivashaNakuru} />
        <Route path="/destinations/northern-kenya" component={DestinationNorthernKenya} />
        <Route path="/destinations/kakamega" component={DestinationKakamega} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
