//ViewModel
Ext.define("Admin.view.yeucau.dsDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmyeucau",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmyeucau" }
    }
});
//View
Ext.define("Admin.view.yeucau.dsdmYeuCau", {
    extend: "Ext.Container",
    alias: "widget.dsdmyeucau",
    controller: "configs-dsdmyeucau",

    requires: [
        'Admin.view.yeucau.cnDMYeuCau'
    ],
    viewModel: {
        type: "configs-dsdmyeucau"
    },
    layout: 'vbox',
    items: [{
        xtype: 'button',
        iconCls: 'x-fa fa-plus',
        ui: 'bright-blue round',
        userCls: 'pop-out',
        cls: 'btn-add',
        bind: {
            hidden: '{hidd}'
        },
        width: 50,
        height: 50,

        // These cause the button to be floated / absolute positioned
        bottom: 10,
        right: 10,

        handler: 'onPlusButtonTap',
        listeners: {
            scope: 'controller',
            element: 'element',
            longpress: 'onLongPressCompose'
        }
    }, {
        xtype: 'dataview',
        bind: {
            hidden: '{hidd}'
        },
        store: {
            type: "sdmyeucau",
        },
        flex: 1,
        itemTpl: [
            '<div class="wrap">' +
            '<div class="img">' +
            '<img src="https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg" alt="" width="50px" height="50px">' +
            '</div>' +
            '<div class="content">' +
            '<div class="title">{noidung}</div>' +
            '<div class="content-child">{moTa}</div>' +
            '<div class="date">{[Ext.Date.format(values.ngayTiepNhan, "d/m/Y")]}</div>' +
            '</div>' +
            '<div class="more">' +
            '<i class="x-fa fa-ellipsis-h"></i>' +
            '</div>' +
            '</div>'
        ],
        listeners: {
            scope: 'controller',
            element: 'element',
            click: function () {
                var view = this.getView(),
                    record = view.items.items[1].selected.items[0].data;
                var me = this,
                    yeucau = me.yeucau,
                    view = me.getView(),
                    viewModel = me.getViewModel();

                if (!yeucau) {
                    me.yeucau = yeucau = view.add({
                        xtype: 'yeucau',
                        viewModel: {
                            data: {
                                record: record,
                            }
                        },
                        flex: 1,
                    });
                    viewModel.set('hidd', true);
                }
            }
        }
    }]//items

});
//ViewController
Ext.define("Admin.view.yeucau.dsDMYeuCauController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-dsdmyeucau",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onPlusButtonTap: function () {
        var me = this,
            yeucau = me.yeucau,
            view = me.getView(),
            viewModel = me.getViewModel();

        console.log(view);
        if (!yeucau) {
            me.yeucau = yeucau = view.add({
                xtype: 'yeucau',
                flex: 1,
            });
            viewModel.set('hidd', true);
        }
    },

    onCloseRequire: function () {
        var me = this,
            yeucau = me.yeucau,
            view = me.getView(),
            viewModel = me.getViewModel();

        if (yeucau) {
            view.remove(yeucau);
            me.yeucau = null;
            viewModel.set('hidd', false);
        }


    },

    onGetR: function () {
        console.log('log')
    }
});