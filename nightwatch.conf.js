module.exports = {
  src_folders: ["tests"],

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
