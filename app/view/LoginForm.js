Ext.define('TestMVC.view.LoginForm', {
  extend: 'Ext.form.Panel',

  xtype: 'loginform',

  config: {
    scrollable: 'vertical',
    styleHtmlContent: true,
    listeners: {
      '> field': {
        change: function(field, newValue, oldValue) {
          ed.set(field.getName(), newValue);
        }
      }
    },
    items:[{
      xtype: 'titlebar',
      title: 'Login',
      docked: 'top'
    }, {
      xtype: 'textfield',
      placeHolder: 'Username',
      name: 'userId',
      label: 'user id'
    }, {
      xtype: 'passwordfield',
      placeHolder: 'Password',
      name: 'pwd',
      label: 'password'
    }, {
      xtype: 'button',
      ui: "action",
      text: "Login",
      action: 'login'
    }, {
      html: [
        '<p>Built with Sencha Touch V' + Ext.getVersion('touch') + '</p>'
      ].join('')
    }]

  }

});
