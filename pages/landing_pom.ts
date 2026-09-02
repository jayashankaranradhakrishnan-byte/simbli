import {
  Page,
  expect,
  Locator,
  APIRequestContext,
  APIResponse,
} from "@playwright/test";
import { uivalidator } from "../pages/uivalidator";
import { FooterPage } from "../pages/footer_pom";

export class landingPage {
  readonly page: Page;

  readonly request: APIRequestContext;

  constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
  }

  get landingPageHeaderContainer(): Locator {
    return this.page.locator("div.alfred-header-container");
  }

  get logo(): Locator {
    return this.page.getByRole("img", { name: "logo" });
  }

  get pricing(): Locator {
    return this.landingPageHeaderContainer.getByText("Pricing", {
      exact: true,
    });
  }

  get aboutus(): Locator {
    return this.landingPageHeaderContainer.getByText("About Us", {
      exact: true,
    });
  }

  get team(): Locator {
    return this.landingPageHeaderContainer.getByText("Team", { exact: true });
  }

  get contact(): Locator {
    return this.landingPageHeaderContainer.getByText("Contact", {
      exact: true,
    });
  }

  get nav_getstart_btn(): Locator {
    return this.landingPageHeaderContainer.getByRole("button", {
      name: "Get Started",
    });
  }

  get meetYourAiAgentTeam(): Locator {
    return this.page.getByText("Meet your AI agent team", { exact: true });
  }

  get heroHeading(): Locator {
    return this.page.getByRole("heading", {
      name: "Your AI-powered productivity partner",
      exact: true,
    });
  }

  get heroDescription(): Locator {
    return this.page.getByText(
      "Streamline your work and supercharge productivity with an AI team built to help creators, teams, and learners move faster.",
      { exact: true },
    );
  }

  get learnMoreButton(): Locator {
    return this.page.getByRole("button", {
      name: "Learn more",
      exact: true,
    });
  }

  get builtForNote(): Locator {
    return this.page.getByText(
      "Built for creators, teams, and learners who want to move faster with AI.",
      { exact: true },
    );
  }

  get subscribeNewsletterLink(): Locator {
    return this.page.locator("p.subscribe-newsletter-link");
  }

  get footer_landingpage(): Locator {
    return this.page.locator(
      "div.d-flex.flex-column.flex-lg-row.justify-content-between.align-items-center.px-3.year-copy-inner",
    );
  }

  async validateLink(locator: Locator, expectedHref: string | RegExp) {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveAttribute("href", expectedHref);
  }
  async validateVisible(locator: Locator, elementName: string) {
    await expect(locator, `${elementName} should be visible`).toBeVisible();

    console.log(`✅ ${elementName} is visible`);
  }

  async validateVisibility(locator: Locator, expected: boolean) {
    await expect(locator).toBeVisible();
  }

  async validateText(
    locator: Locator,
    expectedText: string,
    elementName: string,
  ) {
    await expect(locator, `${elementName} text mismatch`).toHaveText(
      expectedText,
    );

    console.log(`✅ ${elementName} text is correct`);
  }

  async landing_page() {
    const validator = new uivalidator(this.page, this.request);
    const landingPageHeaderCss = await validator.getContainerCss(
      this.landingPageHeaderContainer,
    );

    const expectedLandingPageHeadercontainerCss = {
    //   width: "1208px",
    //   height: "68px",

      position: "relative",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",

      display: "flex",

      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "normal",

      gap: "normal",
      rowGap: "normal",
      columnGap: "normal",

      gridTemplateColumns: "none",
      gridTemplateRows: "none",

      margin: "20px",
      padding: "12px 28px",

      backgroundColor: "rgba(255, 255, 255, 0.145)",
      backgroundImage: "none",

      border: "1px solid rgba(55, 190, 91, 0.55)",
      borderRadius: "40px",

      boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 20px 0px",

      overflow: "visible",
      overflowX: "visible",
      overflowY: "visible",

      visibility: "visible",
      opacity: "1",

      zIndex: "auto",
    };

    const expectedLogoCss = {
      src: "https://www.simbli.ai/assets/logo-simbli-C3O7l_VO.svg",
      alt: "logo",

    //   width: "135px",
    //   height: "33.5px",

    //   naturalWidth: 4383,
    //   naturalHeight: 1088,

    //   x: 65,
    //   y: 37.25,

      objectFit: "fill",
      objectPosition: "50% 50%",

      border: "0px none rgb(33, 37, 41)",
      borderRadius: "0px",

      opacity: "1",
      boxShadow: "none",

      display: "block",
      position: "static",

      backgroundColor: "rgba(0, 0, 0, 0)",
    };

    const expectedGetStartedButtonCss = {
      text: "Get Started",

      // width: '122.438px',
      // height: '36.5px',

      display: "block",
      position: "static",

      fontFamily:
        '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "22.5px",

      color: "rgb(255, 255, 255)",
      letterSpacing: "normal",

      backgroundColor: "rgb(34, 197, 94)",
      backgroundImage: "none",

      border: "1px solid rgb(34, 197, 94)",
      borderRadius: "20px",

      padding: "6px 18px",
      margin: "0px",

      boxShadow: "none",

      opacity: "1",

      cursor: "pointer",
      pointerEvents: "auto",

      disabled: false,

      ariaLabel: null,
      role: null,

      transition: "0.3s",
    };

    const expectedFooterCss = {
      // width: '1280px',
      // height: 128.297,
      // x: 0,
      // y: 583.703125,

      position: "static",
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",

      display: "flex",

      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "normal",

      gap: "8px",
      rowGap: "8px",
      columnGap: "8px",

      gridTemplateColumns: "none",
      gridTemplateRows: "none",

      margin: "0px",
      padding: "0px 16px",

      backgroundColor: "rgba(0, 0, 0, 0)",
      backgroundImage: "none",

      border: "0px none rgb(33, 37, 41)",
      borderRadius: "0px",

      boxShadow: "none",

      overflow: "visible",
      overflowX: "visible",
      overflowY: "visible",

      visibility: "visible",
      opacity: "1",

      zIndex: "auto",
    };

    const links = [
      {
        name: "Feedback",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSf5w6VjQ8R8EJNn-1LQEkwsehw0P9npFxbmVyjgIUbb4fL3Cw/viewform",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy.html",
      },
      {
        name: "Terms and Conditions",
        href: "/terms-and-conditions.html",
      },
      {
        name: "Refund Policy",
        href: "/refund-policy.html",
      },
    ];

    await validator.validateContainerCss(
      this.landingPageHeaderContainer,
      expectedLandingPageHeadercontainerCss,
    );

    await validator.validateImageCss(this.logo, expectedLogoCss);

    await expect(this.pricing).toBeVisible();
    await expect(this.pricing).toBeEnabled();

    await expect(this.aboutus).toBeVisible();
    await expect(this.aboutus).toBeEnabled();

    await expect(this.team).toBeVisible();
    await expect(this.team).toBeEnabled();

    await expect(this.contact).toBeVisible();
    await expect(this.contact).toBeEnabled();

    await validator.validateButtonCss(
      this.nav_getstart_btn,
      expectedGetStartedButtonCss,
    );

    await expect(this.nav_getstart_btn).toBeVisible();
    await expect(this.nav_getstart_btn).toBeEnabled();

    await validator.validateVisibility(this.meetYourAiAgentTeam, true);

    await validator.validateVisibility(this.heroHeading, true);

    await validator.validateVisibility(this.heroDescription, true);

    await validator.validateVisibility(this.learnMoreButton, true);

    await validator.validateVisibility(this.builtForNote, true);

    await validator.validateVisibility(this.subscribeNewsletterLink, true);

    const privacyLink = this.page.getByRole("link", {
      name: "Privacy Policy",
    });

    await this.validateLink(privacyLink, "/privacy-policy.html");

    await this.validateLink(
      this.page.getByRole("link", { name: "Feedback" }),
      "https://docs.google.com/forms/d/e/1FAIpQLSf5w6VjQ8R8EJNn-1LQEkwsehw0P9npFxbmVyjgIUbb4fL3Cw/viewform",
    );

    for (const link of links) {
      await this.validateLink(
        this.page.getByRole("link", {
          name: link.name,
          exact: true,
        }),
        link.href,
      );
    }

    const socialLinks = [
      "https://www.youtube.com/@Simbli-ai",
      "https://x.com/Simbli_ai",
      "https://www.instagram.com/simbli.ai/",
      "https://www.facebook.com/SimbliAi/",
      "https://www.linkedin.com/company/simbliai",
    ];

    for (const href of socialLinks) {
      const link = this.page.locator(`a[href="${href}"]`);

      await expect(link).toHaveCount(1);
      await expect(link).toBeVisible();
    }

    const footer = await validator.getContainerCss(this.footer_landingpage);

    await validator.validateContainerCss(
      this.footer_landingpage,
      expectedFooterCss,
    );

    // const teamList = this.page.locator('.team-list-wrap');

    // await expect(teamList).toBeVisible();

    // const teamCards = teamList.locator('.team-list-card');

    // await expect(teamCards).toHaveCount(4);

    // const expectedTeams = [
    //     {
    //         name: 'Alfred',
    //         role: 'Social Media Agent',
    //     },
    //     {
    //         name: 'Diya',
    //         role: 'Social Strategy Agent',
    //     },
    //     {
    //         name: 'Tara',
    //         role: 'Relationship Agent',
    //     },
    //     {
    //         name: 'Kayal',
    //         role: 'Roleplay Coach Agent',
    //     },
    // ];

    // for (let i = 0; i < expectedTeams.length; i++) {

    //     const card = teamCards.nth(i);

    //     await expect(card).toBeVisible();

    //     await expect(
    //         card.locator('.MuiAvatar-root')
    //     ).toBeVisible();

    //     await expect(
    //         card.locator('.MuiAvatar-img')
    //     ).toBeVisible();

    //     await expect(
    //         card.locator('.team-card-text h6')
    //     ).toHaveText(expectedTeams[i].name);

    //     await expect(
    //         card.locator('.team-card-text p')
    //     ).toHaveText(expectedTeams[i].role);

    //     await expect(
    //         card.locator('button.team-card-btn')
    //     ).toBeVisible();

    //     await expect(
    //         card.locator('button.team-card-btn')
    //     ).toHaveText('Get started');
    // }

    await expect(this.team).toBeVisible();
    await expect(this.team).toBeEnabled();

    //await this.team.click();

    const teamList = this.page.locator(".team-list-wrap");

    await expect(teamList).toBeVisible();

    const teamCards = teamList.locator(".team-list-card");

    await expect(teamCards).toHaveCount(4);

    const expectedTeams = [
      { name: "Alfred", role: "Social Media Agent" },
      { name: "Diya", role: "Social Strategy Agent" },
      { name: "Tara", role: "Relationship Agent" },
      { name: "Kayal", role: "Roleplay Coach Agent" },
    ];

    for (let i = 0; i < expectedTeams.length; i++) {
      const card = teamCards.nth(i);

      await expect(card).toBeVisible();

      await expect(card.locator(".MuiAvatar-root")).toBeVisible();
      await expect(card.locator(".MuiAvatar-img")).toBeVisible();

      await expect(card.locator(".team-card-text h6")).toHaveText(
        expectedTeams[i].name,
      );

      await expect(card.locator(".team-card-text p")).toHaveText(
        expectedTeams[i].role,
      );

      await expect(card.locator("button.team-card-btn")).toBeVisible();

      await expect(card.locator("button.team-card-btn")).toHaveText(
        "Get started",
      );
    }
  }
}
