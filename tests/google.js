module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQueryInputSelector = 'input[name="as_q"]';
        const mainQuery = 'Elon Musk';
        
        const page = browser.page.googleAdvancedSearch();

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        
        const resultsPageLanguageSelector = '//*[@id="ow83"]/div[1]/div/div/div';
        // '//*[@id="ow83"]/*/*/*/div[normalize-space(text()="Buscar solo páginas en italiano")]'        
        const resultsPageLastUpdateSelector = '//*[@id="ow88"]/div[1]/div/div/div';

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();

       /* browser.url("https://www.google.com/advanced_search")
                .setValue(mainQueryInputSelector, mainQuery)
                .click(languageDropdownOpenerSelector)
                .click(languageDropdownValueSelector)
                .click(lastUpdateDropdownSelector)
                .click(lastUpdateDropdownValueSelector)    
                .click(submitButtonSelector)    */   
        browser.assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Muk')
               .assert.urlContains('lr=lang_it', 'Params: Language is italian')
               .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
//        browser.assert.textContains(resultsPageLanguageSelector, 'Buscar solo páginas en italiano', 'UI: Language is set to Italian');
//        browser.assert.textContains(resultsPageLastUpdateSelector, 'Último mes', 'UI: Last month is set');
        browser.saveScreenshot('tests_output/google.png')
    }
};