//ViewModel
Ext.define("Admin.view.quanli.dsDMquanliModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmquanli",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmquanli" }
    }
});
//View
Ext.define("Admin.view.quanli.dsdmQuanLi", {
    extend: "Ext.Container",
    alias: "widget.dsdmquanli",
    controller: "configs-dsdmquanli",
    layout: 'fit',
    viewModel: {
        type: "configs-dsdmquanli"
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
            type: "sdmquanli",
        },
        flex: 1,
        itemTpl: [
            '<div class="wrap">' +
            '<div class="img">' +
            '<img src="https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg" alt="" width="50px" height="50px">' +
            '</div>' +
            '<div class="content">' +
            '<div class="title">{tenVatTu}</div>' +
            '<div class="content-child">Tồn: {soLuong}</div>' +
            '<div class="date">{khoDeXuat}</div>' +
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
                    kho = me.kho,
                    view = me.getView(),
                    viewModel = me.getViewModel();

                if (!kho) {
                    me.kho = kho = view.add({
                        xtype: 'quanli',
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
Ext.define("Admin.view.quanli.dsDMquanliController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-dsdmquanli",
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
            kho = me.kho,
            view = me.getView(),
            viewModel = me.getViewModel();

        console.log(view);
        if (!kho) {
            me.kho = kho = view.add({
                xtype: 'quanli',
                flex: 1,
            });
            viewModel.set('hidd', true);
        }
    },

    onCloseRequire: function () {
        var me = this,
            kho = me.kho,
            view = me.getView(),
            viewModel = me.getViewModel();

        if (kho) {
            view.remove(kho);
            me.kho = null;
            viewModel.set('hidd', false);
        }


    },

    onGetR: function () {
        console.log('log')
    }
});