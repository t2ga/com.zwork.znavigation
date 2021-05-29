# SAP tutorial navigation
- [download zip with the project part 1](https://openui5.hana.ondemand.com/entity/sap.ui.core.tutorial.navigation)
- ``` git init ```
- ``` remove ui5.yaml ```
- ``` ui5 init ```
- ``` ui5 use SAPUI5@1.76.0 ```
- ``` ui5 add sap.ui.core sap.m sap.ui.layout themelib_sap_fiori_3```
- [install middleware](https://blogs.sap.com/2019/09/10/utilize-ui5-toolings-extension-capabilities-for-an-improved-development-experience/)
    - ``` npm install ui5-middleware-livereload --save-dev```
    - add lines in the ui5.yaml
    ```
    server:
    customMiddleware:
        - name: ui5-middleware-livereload
        afterMiddleware: compression
        configuration:
            port: 35729
            path: uimodule/webapp
    ```
    - add lines in the package.json
    ``` 
    {
    // ...
    "ui5": {
            "dependencies": [
                "ui5-middleware-livereload"
            ]
        }
    }
    ```
- ``` npm install ```
- change bootstrap location to https://sapui5.hana.ondemand.com/resources/sap-ui-core.js
- change namespase from `sap.ui.demo.nav` to `com.zwork.znavigation`
- change pathes in files from `sap/ui/demo/nav/` to `com/zwork/znavigation/`
- [create and add favicon](https://favicon.io/emoji-favicons/) 
- ``` ui5 serve -o index.html ```
- [App is opened in a browser](http://localhost:8080/index.html)
