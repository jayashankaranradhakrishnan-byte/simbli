import {
  Page,
  expect,
  Locator,
  APIRequestContext,
  APIResponse,
} from "@playwright/test";
import { uivalidator } from "../pages/uivalidator";
import { FooterPage } from "../pages/footer_pom";

export class ContactPage {
  readonly page: Page;

  readonly request: APIRequestContext;

  constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
  }

  get contactNav(): Locator {
    return this.page.getByText("Contact", { exact: true });
  }

  get contactImage(): Locator {
    return this.page.locator('img[alt="Contact"]');
  }

  get contactContainer(): Locator {
    return this.page.locator("div.contact-text-us").locator("..");
  }

  get contactTextContainer(): Locator {
    return this.page.locator("div.contact-text-us");
  }

  get contactHeading(): Locator {
    return this.contactTextContainer.locator("h6");
  }

  get contactDescription(): Locator {
    return this.contactTextContainer.locator("p.col-lg-10");
  }

  get contactForm(): Locator {
    return this.page.locator("form");
  }

  get nameInput(): Locator {
    return this.page.locator('input.contact-input[placeholder="Name"]');
  }

  get emailInput(): Locator {
    return this.page.locator('input.contact-input[placeholder="Email"]');
  }

  get phoneInput(): Locator {
    return this.page.locator('input.phone-input[placeholder="Phone Number"]');
  }

  get messageTextarea(): Locator {
    return this.page.locator(
      'textarea.contact-textarea[placeholder="Message"]',
    );
  }

  get sendMessageButton(): Locator {
    return this.page.locator("button.contact-submit-btn");
  }

  get validation(): Locator {
    return this.page.locator("//small[@class='text-danger']");
  }

  get contactHeading1(): Locator {
    return this.contactTextContainer.getByRole("heading", {
      name: "Contact Us",
      exact: true,
    });
  }

  get contactDescription1(): Locator {
    return this.page.getByText(
      "Your Satisfaction Is Our Top Priority, and We Are Committed to Providing Exceptional Service and Support",
      { exact: true },
    );
  }

  async contact_page() {
    await expect(this.contactNav).toBeVisible();
    await this.contactNav.click();

    await expect(this.contactHeading1).toBeVisible();

    await expect(this.nameInput).toBeVisible();
    await expect(this.nameInput).toBeEnabled();

    await expect(this.emailInput).toBeVisible();
    await expect(this.emailInput).toBeEnabled();

    await expect(this.phoneInput).toBeVisible();
    await expect(this.phoneInput).toBeEnabled();

    await expect(this.messageTextarea).toBeVisible();
    await expect(this.messageTextarea).toBeEnabled();

    await expect(this.sendMessageButton).toBeVisible();
    await expect(this.sendMessageButton).toBeEnabled();

    await expect(this.contactHeading1).toBeVisible();
    await expect(this.contactHeading1).toHaveText("Contact Us");
    await expect(this.contactDescription1).toBeVisible();

    const expectedErrors = [
      "Name is required",
      "Email is required",
      "Phone number is required",
      "Message is required",
    ];

    await this.sendMessageButton.click();

    const validationMessages = this.page.locator("small.text-danger");

    await expect(validationMessages).toHaveCount(expectedErrors.length);

    for (const message of expectedErrors) {
      await expect(this.page.getByText(message, { exact: true })).toBeVisible();
    }

    const footerPage = new FooterPage(this.page, this.request);

    await footerPage.footer();
    await footerPage.upperfooter();
  }
}
