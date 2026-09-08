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
    return this.page.getByText('Email is required');
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




  async login_functionality() {
    const LandingPage = new landingPage(this.page, this.request);

    this.get_start_btn.click();

    await expect(this.simbli_logo).toBeVisible();

    await expect(this.meet_your_ai_team_heading).toHaveText(
      "Meet Your AI Team",
    );

    await expect(this.ai_team_tagline).toHaveText(
      "Your custom AI workforce to create, automate, and grow.",
    );

    // Email is required 

    await this.submitButton.click();

    await expect(this.emailrequired).toBeVisible();


    // email is not register 

    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill("iamprya2112004@gmail.com");

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill("Test@123");

    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();

    // invalid password

    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill("iampriya2112004@gmail.com");

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill("Test@123");

    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();

    try {
      await this.acceptCookiesButton.waitFor({
        state: "visible",
        timeout: 5000,
      });
      await this.acceptCookiesButton.click();
    } catch { }
  }
}
