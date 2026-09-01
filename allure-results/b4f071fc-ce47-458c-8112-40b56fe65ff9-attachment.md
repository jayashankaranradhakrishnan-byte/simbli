# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: simbli.spec.ts >> Simbli Test Suite >> Simbli landing page test
- Location: tests\simbli.spec.ts:10:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('div.alfred-header-container').getByText('About Us', { exact: true })
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div.alfred-header-container').getByText('About Us', { exact: true })

```

# Test source

```ts
  247 |             padding: '6px 18px',
  248 |             margin: '0px',
  249 | 
  250 |             boxShadow: 'none',
  251 | 
  252 |             opacity: '1',
  253 | 
  254 |             cursor: 'pointer',
  255 |             pointerEvents: 'auto',
  256 | 
  257 |             disabled: false,
  258 | 
  259 |             ariaLabel: null,
  260 |             role: null,
  261 | 
  262 |             transition: '0.3s',
  263 |         };
  264 | 
  265 |         const expectedFooterCss = {
  266 |             width: '1280px',
  267 |             height: '128.297px',
  268 | 
  269 |             x: 0,
  270 |             y: 583.703125,
  271 | 
  272 |             position: 'static',
  273 |             top: 'auto',
  274 |             right: 'auto',
  275 |             bottom: 'auto',
  276 |             left: 'auto',
  277 | 
  278 |             display: 'flex',
  279 | 
  280 |             flexDirection: 'column',
  281 |             flexWrap: 'nowrap',
  282 |             justifyContent: 'space-between',
  283 |             alignItems: 'center',
  284 |             alignContent: 'normal',
  285 | 
  286 |             gap: '8px',
  287 |             rowGap: '8px',
  288 |             columnGap: '8px',
  289 | 
  290 |             gridTemplateColumns: 'none',
  291 |             gridTemplateRows: 'none',
  292 | 
  293 |             margin: '0px',
  294 |             padding: '0px 16px',
  295 | 
  296 |             backgroundColor: 'rgba(0, 0, 0, 0)',
  297 |             backgroundImage: 'none',
  298 | 
  299 |             border: '0px none rgb(33, 37, 41)',
  300 |             borderRadius: '0px',
  301 | 
  302 |             boxShadow: 'none',
  303 | 
  304 |             overflow: 'visible',
  305 |             overflowX: 'visible',
  306 |             overflowY: 'visible',
  307 | 
  308 |             visibility: 'visible',
  309 |             opacity: '1',
  310 | 
  311 |             zIndex: 'auto'
  312 |         };
  313 | 
  314 |         const links = [
  315 |             {
  316 |                 name: 'Feedback',
  317 |                 href: 'https://docs.google.com/forms/d/e/1FAIpQLSf5w6VjQ8R8EJNn-1LQEkwsehw0P9npFxbmVyjgIUbb4fL3Cw/viewform'
  318 |             },
  319 |             {
  320 |                 name: 'Privacy Policy',
  321 |                 href: '/privacy-policy.html'
  322 |             },
  323 |             {
  324 |                 name: 'Terms and Conditions',
  325 |                 href: '/terms-and-conditions.html'
  326 |             },
  327 |             {
  328 |                 name: 'Refund Policy',
  329 |                 href: '/refund-policy.html'
  330 |             }
  331 |         ];
  332 | 
  333 |         await validator.validateContainerCss(
  334 |             this.landingPageHeaderContainer,
  335 |             expectedLandingPageHeadercontainerCss
  336 |         );
  337 | 
  338 |         await validator.validateImageCss(
  339 |             this.logo,
  340 |             expectedLogoCss
  341 |         );
  342 | 
  343 | 
  344 |         await expect(this.pricing).toBeVisible();
  345 |         await expect(this.pricing).toBeEnabled();
  346 | 
> 347 |         await expect(this.aboutus).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
  348 |         await expect(this.aboutus).toBeEnabled();
  349 | 
  350 |         await expect(this.team).toBeVisible();
  351 |         await expect(this.team).toBeEnabled();
  352 | 
  353 |         await expect(this.contact).toBeVisible();
  354 |         await expect(this.contact).toBeEnabled();
  355 | 
  356 |         await validator.validateButtonCss(
  357 |             this.nav_getstart_btn,
  358 |             expectedGetStartedButtonCss
  359 |         );
  360 | 
  361 |         await expect(this.nav_getstart_btn).toBeVisible();
  362 |         await expect(this.nav_getstart_btn).toBeEnabled();
  363 | 
  364 |         await validator.validateVisibility(
  365 |             this.meetYourAiAgentTeam,
  366 |             true
  367 |         );
  368 | 
  369 |         await validator.validateVisibility(
  370 |             this.heroHeading,
  371 |             true
  372 |         );
  373 | 
  374 |         await validator.validateVisibility(
  375 |             this.heroDescription,
  376 |             true
  377 |         );
  378 | 
  379 |         await validator.validateVisibility(
  380 |             this.learnMoreButton,
  381 |             true
  382 |         );
  383 | 
  384 |         await validator.validateVisibility(
  385 |             this.builtForNote,
  386 |             true
  387 |         );
  388 | 
  389 |         await validator.validateVisibility(
  390 |             this.subscribeNewsletterLink,
  391 |             true
  392 |         );
  393 | 
  394 |         const privacyLink = this.page.getByRole('link', {
  395 |             name: 'Privacy Policy'
  396 |         });
  397 | 
  398 |         await this.validateLink(
  399 |             privacyLink,
  400 |             '/privacy-policy.html'
  401 |         );
  402 | 
  403 |         await this.validateLink(
  404 |             this.page.getByRole('link', { name: 'Feedback' }),
  405 |             'https://docs.google.com/forms/d/e/1FAIpQLSf5w6VjQ8R8EJNn-1LQEkwsehw0P9npFxbmVyjgIUbb4fL3Cw/viewform'
  406 |         );
  407 | 
  408 |         for (const link of links) {
  409 |             await this.validateLink(
  410 |                 this.page.getByRole('link', {
  411 |                     name: link.name,
  412 |                     exact: true
  413 |                 }),
  414 |                 link.href
  415 |             );
  416 |         }
  417 | 
  418 |         const socialLinks = [
  419 |             'https://www.youtube.com/@Simbli-ai',
  420 |             'https://x.com/Simbli_ai',
  421 |             'https://www.instagram.com/simbli.ai/',
  422 |             'https://www.facebook.com/SimbliAi/',
  423 |             'https://www.linkedin.com/company/simbliai',
  424 |         ];
  425 | 
  426 |         for (const href of socialLinks) {
  427 |             const link = this.page.locator(`a[href="${href}"]`);
  428 | 
  429 |             await expect(link).toHaveCount(1);
  430 |             await expect(link).toBeVisible();
  431 |             await expect(link).toHaveAttribute('href', href);
  432 |         }
  433 | 
  434 |         const footer = await validator.getContainerCss(
  435 |             this.footer_landingpage
  436 |         );
  437 | 
  438 |         await validator.validateContainerCss(
  439 |             this.footer_landingpage,
  440 |             expectedFooterCss
  441 |         );
  442 | 
  443 | 
  444 |         const teamList = this.page.locator('.team-list-wrap');
  445 | 
  446 |         await expect(teamList).toBeVisible();
  447 | 
```