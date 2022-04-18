module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page-objects"],  

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [ ]        
  },

  test_settings: {
    default: {
      desiredCapabilities : {
        browserName: "chrome"
      }
    }
  }
};
