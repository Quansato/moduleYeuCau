Ext.define("Admin.view.yeucau.cnDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.yeucau-cndmyeucau",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});

Ext.define("Admin.view.yeucau.cnDMYeuCau", {
    extend: "Ext.form.Panel",
    xtype: 'yeucau',
    /*viewModel: {
        type: "yeucau-cndmyeucau"
    },*/
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.field.Select',
    ],
    title: 'Thông tin yêu cầu',
    layout: 'vbox',
    items: [{
        xtype: 'fieldset',
        style:'margin:5px',
        defaults: {
            labelWidth: '35%',
            labelAlign: 'top',
        },
        items: [{
            xtype: 'selectfield',
            name: 'require',
            label: 'Loại yêu cầu',
            bind: {
                value: "{record.maLoai}"
            },
            options: [
                {
                    text: 'Loại 1',
                    value: 1
                },
                {
                    text: 'Loại 2',
                    value: 2
                },
                {
                    text: 'Loại 3',
                    value: 3
                }
            ]
        }, {
            xtype: 'datepickerfield',
            destroyPickerOnHide: true,
            name: 'date',
            label: 'Ngày yêu cầu',
            value: new Date(),
            bind: {
                value: "{record.ngayTiepNhan}"
            },
            picker: {
                yearFrom: 1990
            }
        }, {
            xtype: 'selectfield',
            name: 'require',
            label: 'Mức độ',
            bind: {
                value: "{record.maMucDo}"
            },
            options: [
                {
                    text: 'Mức 1',
                    value: 1
                },
                {
                    text: 'Mức 2',
                    value: 2
                },
                {
                    text: 'Mức 3',
                    value: 3
                }
            ]
        }, {
            xtype: 'textareafield',
            name: 'content',
            label: 'Nội dung',
            bind: {
                value: "{record.noidung}"
            },
        }, {
            xtype: 'textfield',
            label: 'Địa điểm',
            placehoder: 'Nhập địa điểm...',
            bind: {
                value: "{record.diaDiem}"
            },
        }, {
            xtype: 'selectfield',
            name: 'employee',
            label: 'Người xử lí',
            bind: {
                value: "{record.maNV}"
            },
            options: [
                {
                    text: 'Nguyễn A',
                    value: 1
                },
                {
                    text: 'Nguyễn B',
                    value: 2
                }
            ]
        }, {
            xtype: 'selectfield',
            name: 'employee',
            label: 'Trạng thái',
            bind: {
                value: "{record.maTrangThai}"
            },
            options: [
                {
                    text: 'Chưa xử lí',
                    value: 1
                },
                {
                    text: 'Đang xử lí',
                    value: 2
                }
            ]
        }],
    }, {
        xtype: 'container',
        defaults: {
            xtype: 'button',
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

