Ext.define('TestMVC.view.LoginForm', {
    extend: 'Ext.Panel',

    xtype: 'loginpanel',

    config: {
        scrollable: 'vertical',
        styleHtmlContent: true,

        items:[{
            xtype: 'titlebar',
            title: 'Login',
            docked: 'top'
        }, {
          xtype: 'textfield',
          id: 'userId',
          label: 'user id'
        }, {
          xtype: 'passwordfield',
          id: 'pwd',
          label: 'password'
        }, {
            xtype: 'button',
            ui: "action",
            text: "Login"
        }, {
            html: [
                '<p>Built with Sencha Touch V' + Ext.getVersion('touch') + '</p>'
            ].join('')
        }]

    }

});
