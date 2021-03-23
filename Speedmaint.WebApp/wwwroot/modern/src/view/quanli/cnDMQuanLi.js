/*Ext.define("Admin.view.yeucau.cnDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.yeucau-cndmyeucau",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});*/

Ext.define("Admin.view.quanli.cnDMQuanLi", {
    extend: "Ext.form.Panel",
    xtype: 'quanli',
    /*viewModel: {
        type: "yeucau-cndmyeucau"
    },*/
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.field.Select',
    ],
    title: 'Thông tin kho',
    layout: 'vbox',
    items: [{
        xtype: 'fieldset',
        style: 'margin:5px',
        defaults: {
            labelWidth: '35%',
            labelAlign: 'top',
        },
        items: [{
            xtype: 'textfield',
            name: 'content',
            label: 'Tên vật tư',
            bind: {
                value: "{record.tenVatTu}"
            },
        }, {
            xtype: 'textfield',
            name: 'content',
            label: 'Kho đề xuất',
            bind: {
                value: "{record.khoDeXuat}"
            },
        }, {
            xtype: 'textfield',
            name: 'content',
            label: 'Số lượng',
            bind: {
                value: "{record.soLuong}"
            },
        }, {
            xtype: 'textfield',
            name: 'content',
            label: 'Định mức tồn',
            bind: {
                value: "{record.dinhMucTon}"
            },
        }],
    }, {
        xtype: 'container',
        defaults: {
            xtype: 'button',
            dock:'bottom',
            style: 'margin: 1em',
            flex: 1
        },
        layout: {
            type: 'hbox'
        },
        items: [
            {
                text: 'Quay lại',
                ui: 'action',
                hasDisabled: false,
                handler: 'onCloseRequire',
            },
            {
                text: 'Lưu',
                ui: 'action',
                handler: function () {
                    Ext.getCmp('basicform').reset();
                }
            }
        ]
    }]


});

