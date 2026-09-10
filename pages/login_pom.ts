import {
  Page,
  expect,
  Locator,
  APIRequestContext,
  APIResponse,
} from "@playwright/test";
import { uivalidator } from "../pages/uivalidator";
import { FooterPage } from "../pages/footer_pom";
import { landingPage } from "./landing_pom";

export class Loginpage {
  readonly page: Page;

  readonly request: APIRequestContext;

  constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
  }

  get get_start_btn(): Locator {
    return this.page.locator(".chat-area button.button-sends-1");
  }

  get emailInput(): Locator {
    return this.page.locator('input[name="email"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('input[name="password"]');
  }

  get submitButton(): Locator {
    return this.page.locator("button.login-submit-btn");
  }

  get acceptCookiesButton(): Locator {
    return this.page.getByRole("button", { name: /accept all/i });
  }

  get simbli_logo(): Locator {
    return this.page.locator(".login-logo-image");
  }

  get meet_your_ai_team_heading(): Locator {
    return this.page.getByRole("heading", { name: "Meet Your AI Team" });
  }

  get ai_team_tagline(): Locator {
    return this.page.getByText(
      "Your custom AI workforce to create, automate, and grow.",
    );
  }

  get emailrequired(): Locator {
    return this.page
      .locator("span")
      .filter({ hasText: /^Email is required$/ });
  }

  get emailnotregister(): Locator {
    return this.page.getByText('Email is not registered.');
  }

  get invalidpassword(): Locator {
    return this.page.getByText('Invalid password.');
  }

  get loginsuccess(): Locator {
    return this.page.getByText('Logged in successfully!');
  }

  // after login inner login 

  get alfredHeaderContainer(): Locator {
    return this.page.locator(".alfred-header-container");
  }

  get alfredLogo(): Locator {
    return this.page.locator(".alfred-header-container .alfred-logo");
  }

  get dashboardLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(0);
  }

  get billingLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(1);
  }

  get pricingLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(2);
  }

  get aboutUsLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(3);
  }

  get teamLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(4);
  }

  get contactLink(): Locator {
    return this.page.locator(".alfred-land-menus p").nth(5);
  }

  get desktopMenu(): Locator {
    return this.page.locator(".alfred-land-menus");
  }

  get desktopAvatar(): Locator {
    return this.page.locator(
      ".alfred-header-container .d-none.d-lg-flex .MuiAvatar-root"
    );
  }

  get mobileMenuButton(): Locator {
    return this.page.getByRole("button", {
      name: "Toggle mobile menu",
    });
  }

  get mobileAvatar(): Locator {
    return this.page.locator(
      ".alfred-header-container .d-lg-none .MuiAvatar-root"
    );
  }

  get dashboardHero(): Locator {
    return this.page.locator(".dashboard-hero");
  }

  get dashboardWelcomeTitle(): Locator {
    return this.page.locator(".dashboard-welcome-title");
  }

  get dashboardWelcomeSubtitle(): Locator {
    return this.page.locator(".dashboard-welcome-subtitle");
  }

  get agentTeamSectionTitle(): Locator {
    return this.page.locator(".dashboard-section-title");
  }

  get agentTeamSectionSubtitle(): Locator {
    return this.page.locator(".dashboard-section-subtitle");
  }

  get agentCards(): Locator {
    return this.page.locator(".agent-card");
  }

  async getContainerCss(locator: Locator) {
    return await locator.evaluate((el) => {
      const css = getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      return {
        width: css.width,
        height: css.height,

        x: rect.x,
        y: rect.y,

        position: css.position,
        top: css.top,
        right: css.right,
        bottom: css.bottom,
        left: css.left,

        display: css.display,

        // Border
        border: css.border,
        borderRadius: css.borderRadius,

        borderTopColor: css.borderTopColor,
        borderTopStyle: css.borderTopStyle,
        borderTopWidth: css.borderTopWidth,

        borderTopLeftRadius: css.borderTopLeftRadius,
        borderTopRightRadius: css.borderTopRightRadius,

        borderBottomColor: css.borderBottomColor,
        borderBottomStyle: css.borderBottomStyle,
        borderBottomWidth: css.borderBottomWidth,

        borderBottomLeftRadius: css.borderBottomLeftRadius,
        borderBottomRightRadius: css.borderBottomRightRadius,

        borderLeftColor: css.borderLeftColor,
        borderLeftStyle: css.borderLeftStyle,
        borderLeftWidth: css.borderLeftWidth,

        borderRightColor: css.borderRightColor,
        borderRightStyle: css.borderRightStyle,
        borderRightWidth: css.borderRightWidth,

        // Box
        boxSizing: css.boxSizing,

        // Effects
        backdropFilter: css.backdropFilter,

        // Layout
        flexDirection: css.flexDirection,
        flexWrap: css.flexWrap,
        justifyContent: css.justifyContent,
        alignItems: css.alignItems,

        // Other
        backgroundColor: css.backgroundColor,
        boxShadow: css.boxShadow,
        opacity: css.opacity,
        zIndex: css.zIndex,
      };
    });
  }

  async validateLoginHeaderContainerCss() {
    const validator = new uivalidator(this.page, this.request);

    const expectedHeaderCss = {
      borderBottomColor: "rgba(55, 190, 91, 0.55)",
      borderLeftColor: "rgba(55, 190, 91, 0.55)",
      borderRightColor: "rgba(55, 190, 91, 0.55)",
      borderTopColor: "rgba(55, 190, 91, 0.55)",

      borderTopLeftRadius: "40px",
      borderTopRightRadius: "40px",
      borderBottomLeftRadius: "40px",
      borderBottomRightRadius: "40px",

      borderTopStyle: "solid",
      borderRightStyle: "solid",
      borderBottomStyle: "solid",
      borderLeftStyle: "solid",

      borderTopWidth: "1px",
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      borderLeftWidth: "1px",

      boxSizing: "border-box",
    };

    await validator.validateContainerCss(
      this.alfredHeaderContainer,
      expectedHeaderCss
    );

    console.log("✅ Login header container CSS validation completed");
  }

  async validateloginHeaderLinks() {
    await expect(this.desktopMenu).toBeVisible();

    await expect(this.dashboardLink).toBeVisible();
    await expect(this.dashboardLink).toHaveText("Dashboard");

    await expect(this.billingLink).toBeVisible();
    await expect(this.billingLink).toHaveText("Billing");

    await expect(this.pricingLink).toBeVisible();
    await expect(this.pricingLink).toHaveText("Pricing");

    await expect(this.aboutUsLink).toBeVisible();
    await expect(this.aboutUsLink).toHaveText("About Us");

    await expect(this.teamLink).toBeVisible();
    await expect(this.teamLink).toHaveText("Team");

    await expect(this.contactLink).toBeVisible();
    await expect(this.contactLink).toHaveText("Contact");

    console.log("✅ login header menu validation completed");
  }

  async validateLoginHeaderLogo() {
    await expect(this.alfredLogo).toBeVisible();

    await expect(this.alfredLogo).toHaveAttribute(
      "alt",
      "logo"
    );

    await expect(this.alfredLogo).toHaveAttribute(
      "src",
      /logo-simbli/
    );

    await expect(this.alfredLogo).toHaveCSS(
      "cursor",
      "pointer"
    );

    console.log("✅ Alfred logo validation completed");
  }

  async validateActiveDashboard() {
    await expect(this.dashboardLink).toHaveClass(/active/);

    console.log("✅ Dashboard active state validated");
  }

  async validateMobileHeader() {
    await expect(this.mobileMenuButton).toHaveAttribute(
      "aria-label",
      "Toggle mobile menu"
    );

    await expect(this.mobileMenuButton).toBeVisible();

    await expect(this.mobileAvatar).toBeVisible();

    console.log("✅ Mobile header validation completed");
  }

  async validateDashboardHero(): Promise<void> {
    await expect(this.dashboardHero).toBeVisible();

    await expect(this.dashboardWelcomeTitle).toBeVisible();
    await expect(this.dashboardWelcomeTitle).toContainText("Welcome back,");

    await expect(this.dashboardWelcomeSubtitle).toBeVisible();
    await expect(this.dashboardWelcomeSubtitle).toHaveText(
      "Your AI team is ready to help you create, automate, and grow."
    );

    console.log("✅ Dashboard Hero validation completed");
  }

  async validateAgentTeamSection(): Promise<void> {
    // Section title
    await expect(this.agentTeamSectionTitle).toBeVisible();
    await expect(this.agentTeamSectionTitle).toHaveText(
      "Your AI Agent Team"
    );

    // Section subtitle
    await expect(this.agentTeamSectionSubtitle).toBeVisible();
    await expect(this.agentTeamSectionSubtitle).toHaveText(
      "Select an agent to start working on your tasks."
    );

    // Validate 4 agent cards
    await expect(this.agentCards).toHaveCount(4);

    const agents = await this.agentCards.evaluateAll((cards) =>
      cards.map((card) => ({
        name:
          card.querySelector(".agent-name")?.textContent?.trim() ?? "",

        role:
          card.querySelector(".agent-role")?.textContent?.trim() ?? "",

        description:
          card.querySelector(".agent-desc")?.textContent?.trim() ?? "",

        button:
          card.querySelector(".btn-launch-agent")?.textContent?.trim() ?? "",

        href:
          card.querySelector(".btn-launch-agent")?.getAttribute("href") ?? "",

        imageAlt:
          card.querySelector(".agent-avatar")?.getAttribute("alt") ?? "",
      }))
    );

    console.log("\n🤖 AI AGENT TEAM");
    console.log("==============================");

    agents.forEach((agent, index) => {
      console.log(`\n========== Agent ${index + 1} ==========`);
      console.log(`Name        : ${agent.name}`);
      console.log(`Role        : ${agent.role}`);
      console.log(`Description : ${agent.description}`);
      console.log(`Button      : ${agent.button}`);
      console.log(`Image Alt   : ${agent.imageAlt}`);
      console.log(`URL         : ${agent.href}`);
    });

    console.log("\n✅ AI Agent Team validation completed");
  }





  async login_functionality() {
    const LandingPage = new landingPage(this.page, this.request);
    const footerPage = new FooterPage(this.page, this.request);

    await LandingPage.nav_getstart_btn.click();

    await expect(this.simbli_logo).toBeVisible();

    await expect(this.meet_your_ai_team_heading).toHaveText(
      "Meet Your AI Team",
    );

    await expect(this.ai_team_tagline).toHaveText(
      "Your custom AI workforce to create, automate, and grow.",
    );

    // Email is required 

    await this.submitButton.click();

    await expect(this.emailrequired).toBeVisible({
      timeout: 10000,
    });


    // email is not register 

    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill("iamprya2112004@gmail.com");

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill("Test@123");

    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();
    await expect(this.emailnotregister).toBeVisible({
      timeout: 10000,
    });
    // invalid password

    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill("iampriya2112004@gmail.com");

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill("Test@123");

    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();

    await expect(this.invalidpassword).toBeVisible({
      timeout: 10000,
    });

    // // success passsword priya 

    // await expect(this.emailInput).toBeVisible();
    // await this.emailInput.fill("iampriya2112004@gmail.com");

    // await expect(this.passwordInput).toBeVisible();
    // await this.passwordInput.fill("Test@1234");

    // await expect(this.submitButton).toBeVisible();
    // await expect(this.submitButton).toBeEnabled();

    // await this.submitButton.click();

    // await expect(this.loginsuccess).toBeVisible();

    // await expect(this.alfredHeaderContainer).toBeVisible({
    //   timeout: 15000,
    // });


    // success passsword dinesh

    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill("dinesh.saravanan@dci.in");

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill("Test@123");

    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();

    await expect(this.loginsuccess).toBeVisible();

    await expect(this.alfredHeaderContainer).toBeVisible({
      timeout: 15000,
    });



    console.log("➡️ Starting login Header validation");

    await this.validateLoginHeaderLogo();
    await this.validateloginHeaderLinks();
    //await this.validateLoginHeaderContainerCss();
    await this.validateActiveDashboard();

    console.log("✅ Alfred Header validation completed");

    const metricCards = this.page.locator(".metric-card");

    const cards = await metricCards.evaluateAll((elements) =>
      elements.map((card) => {
        const info = card.querySelector(".metric-info");

        return {
          agent: info?.querySelector("div")?.textContent?.trim() ?? "",
          label: info?.querySelector(".metric-label")?.textContent?.trim() ?? "",
          value: info?.querySelector(".metric-value")?.textContent?.trim() ?? "",
          status: info?.querySelector(".metric-sub")?.textContent?.trim() ?? "",
        };
      }),
    );

    console.log("📊 Dashboard Metric Cards:");

    cards.forEach((card, index) => {
      console.log(`\n========== Card ${index + 1} ==========`);
      console.log(`Agent  : ${card.agent}`);
      console.log(`Label  : ${card.label}`);
      console.log(`Value  : ${card.value}`);
      console.log(`Status : ${card.status}`);
    });

    await this.validateDashboardHero();
    await this.validateAgentTeamSection();
    await footerPage.footer();


    try {
      await this.acceptCookiesButton.waitFor({
        state: "visible",
        timeout: 5000,
      });
      await this.acceptCookiesButton.click();
    } catch { }
  }
}
