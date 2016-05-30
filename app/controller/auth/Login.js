Ext.define('TestMVC.controller.auth.Login', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      loginButton: 'button[action=login]',
      loginForm: 'loginform'
    },
    control: {
      loginButton: {
        tap: 'doLogin'
      }
    }
  },

  doLogin: function() {
    // called whenever the Login button is tapped
    console.log('doLogin called');
    var form   = this.getLoginForm(), values = form.getValues();
    console.log('values', values);

    // TODO submit form ...
  },

  launch: function() {
    console.log('load the Login controller');
  }

});
