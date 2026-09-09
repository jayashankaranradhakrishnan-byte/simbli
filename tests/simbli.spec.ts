import { test } from "../base/simbli_testbase";
import { uivalidator } from "../pages/uivalidator";
import { landingPage } from "../pages/landing_pom";
import { PricingPage } from "../pages/pricing_pom";
import { AboutUsPage } from "../pages/aboutus_pom";
import { ContactPage } from "../pages/contact_pom";
import { Loginpage } from "../pages/login_pom";
//import { setup, teardown, getPage } from '../base/simbli_testBase';

test.describe("Simbli Test Suite", () => {


  test("Simbli landing page test", async ({ page, request }) => {

    test.setTimeout(120_000);

    const landing = new landingPage(page, request);
    const pricing = new PricingPage(page, request);
    const aboutus = new AboutUsPage(page, request);
    const contact = new ContactPage(page, request);

    console.log("➡️ Starting Landing Page");
    await landing.landing_page();
    console.log("✅ Landing Page completed");

    console.log("➡️ Starting Pricing Page");
    await pricing.pricing_page();
    console.log("✅ Pricing Page completed");

    console.log("➡️ Starting About Us Page");
    await aboutus.aboutus();
    console.log("✅ About Us completed");

    console.log("➡️ Starting Contact Page");
    await contact.contact_page();
    console.log("✅ Contact Page completed");
  });

  test("Simbli login page test", async ({ page, request }) => {

    test.setTimeout(120_000);

    const simbli = new uivalidator(page, request);
    const landing = new landingPage(page, request);
    const pricing = new PricingPage(page, request);
    const aboutus = new AboutUsPage(page, request);
    const contact = new ContactPage(page, request);
    const login = new Loginpage(page, request);

    await login.login_functionality();


  });
});
