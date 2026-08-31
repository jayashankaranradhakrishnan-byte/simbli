import { test } from '../base/simbli_testbase';
import { uivalidator } from '../pages/uivalidator';
import { landingPage } from '../pages/landing_pom';
//import { setup, teardown, getPage } from '../base/simbli_testBase';

test.describe('Simbli Test Suite', () => {

    test('Simbli landing page test', async ({ page, request }) => {
        const simbli = new uivalidator(page, request);
        const landing = new landingPage(page, request);

        await landing.landing_page()

    });



});

