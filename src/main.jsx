import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body_Title from "./Components/Body_Title";
import Body_Exp from "./Components/Body_Exp";
import FAQ from "./Components/FAQ";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Startup_list from "./Components/Startup_list";
import Dashboard from "./Components/Dashboard";
const scrollToFAQ = () => {
  const faqSection = document.getElementById("faq");
  faqSection.scrollIntoView({ behavior: "smooth" });
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Navbar scrollFunc={scrollToFAQ} />,
              <Body_Title
                btnClass={"enroll_button"}
                class={"Body_Title"}
                asWho={"as Startup"}
                text={"Accelerate Your Start-Up"}
                desc={
                  "Are you a young entrepreneur looking to take your startup to the next level? Our accelerator program can help you gain the skills, resources, and connections you need to succeed. Join our community and let us help you accelerate your journey to success."
                }
              />,
              <Body_Exp
                heading={"Why you should apply \n Ignite Lab"}
                text={
                  "Investors can provide the financial resources you need to grow your company, hire employees, and develop new products or services in an online space. By securing investment from respected investors, your startup can gain credibility with potential customers, partners, and employees, providing validation for your business."
                }
              />,
              <Body_Title
                btnClass={"enroll_button_Inv"}
                class={"Body_Title Body_Title_With_Inv"}
                asWho={"as Investor"}
                text={"Ignite an enterprising idea"}
                desc={
                  "Are you looking to invest in the next big thing? Look no further than IGNITE LAB- the premier platform for connecting startups and investors. We carefully match high-potential startups with like-minded investors who share their vision to drive success."
                }
              />,
              <Body_Exp
                heading={"Why you should invest a startup "}
                text={
                  "Investing in a successful startup can yield high returns on investment, which can benefit your company financially. Investing in a startup can also provide access to talented individuals who may be potential hires or collaborators for your company."
                }
              />,
              <FAQ />,
            ]}
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/startups" element={<Startup_list />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
