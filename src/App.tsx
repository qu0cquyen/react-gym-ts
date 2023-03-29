import { useEffect, useState } from "react";
import Benefits from "./scenes/benefits";
import Home from "./scenes/home";
import OurClasses from "./scenes/ourclasses"; 
import ContactUs from "./scenes/contactus"; 
import Footer from "./scenes/footer"; 
import NavBar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 


  /// Sticky Nav Bar 
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true); 
        setSelectedPage(SelectedPage.Home)
      }

      if(window.scrollY !== 0) setIsTopOfPage(false); 
    }

    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-gray-20">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} /> 
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
    </div>
  );
}

export default App;
