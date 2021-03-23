Ext.define('Admin.view.phone.email.EmailController', {
    extend: 'Admin.view.email.EmailController',

    alias: 'controller.email-phone',

    closeComposer: function () {
        var me = this,
            composer = me.composer,
            view = me.getView(),
            viewModel = me.getViewModel();

        console.log(view);
        if (composer) {
            view.remove(composer);
            me.composer = null;

            viewModel.set('composing', false);
        }
    },

    onPlusButtonTap: function() {
        if (!this.actionsVisible) {
            this.doCompose('messi');
        }
    },

    doCompose: function (to) {
        var me = this,
            composer = me.composer,
            view = me.getView(),
            viewModel = me.getViewModel(),
            toField;

        me.hideActions();
        console.log(view);
        if (!composer) {
            me.composer = composer = view.add({
                xtype: 'compose',
                flex: 1
            });

            if (to) {
                toField = me.lookupReference('toField');
                toField.setValue(to);
            }

            viewModel.set('composing', true);

        }
    },

    onChangeFilter: function (sender) {
        this.hideActions();
        this.callParent(arguments);
    },

    onCloseMessage: function () {
        this.closeComposer();
    },

    onLongPressCompose: function (e) {
        this.showActions();
    },

    onSendMessage: function () {
        this.closeComposer();
    },

    onSwipe: function (event) {
        if (event.direction === 'left') {
            this.showActions();
        }
    }
});
