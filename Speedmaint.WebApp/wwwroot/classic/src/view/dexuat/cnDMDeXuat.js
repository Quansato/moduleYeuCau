Ext.define("Admin.view.dexuat.cnDMDeXuatModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-cndmdexuat",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});

Ext.define("Admin.view.dexuat.dsDMDeXuatODModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmdexuatod",
    // data: {
    //     rSelected: null
    // },
    stores: {
        store: { type: "sdmdexuatod" }
    }
});

Ext.define("Admin.view.dexuat.cnDMDeXuat", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.yeucau.cnDMYeuCauController", "Admin.view.yeucau.cnDMYeuCauModel"],
    controller: "yeucau-cndmyeucau",
    
    width: '70%',
    height:600,
    modal: true,
    items:[{
        xtype:'panel',
        height:'50%',
        layout:{
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype:'fieldcontainer',
            layout:{
                type:'vbox',
                align:'stretch'
            },
            margin:'5 5 0 5',
            width:'72%',
            columns:2,
            items:[{
                xtype:'fieldcontainer',
                layout:'hbox',
                items:[{
                    xtype: 'combobox',
                    width: 350,
                    fieldLabel: 'Kho đề xuất',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['maKho', 'tenKho'],
                        data: [
                            { "maKho": "1", "tenKho": "Kho chính" },
                            { "maKho": "2", "tenKho": "Kho hàng " },
                            { "maKho": "3", "tenKho": "Kho tồn" },
                            { "maKho": "4", "tenKho": "Kho vật phẩm" },
                        ]
                    }),
                    queryMode: "local",
                    displayField: 'tenKho',
                    valueField: 'maMucDo',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn kho";
                    },
                    msgTarget: 'side',
                },{
                    xtype:'textfield',
                    width:325,
                    fieldLabel:'Số phiếu',
                    padding:'0 5 0 1'
                },{
                    xtype:'button',
                    text:'Lấy số'
                }]
            },{
                xtype:'fieldcontainer',
                layout:'hbox',
                items:[{
                    xtype:'datefield',
                    width:350,
                    fieldLabel:'Ngày đề xuất',
                },{
                    xtype:'textfield',
                    width:350,
                    fieldLabel:'Người đề xuất',
                    padding:'0 5 0 1'
                },{
                    xtype:'button',
                    text:'...'
                }]
            },{
                xtype:'fieldcontainer',
                layout:'hbox',
                items:[{
                    xtype:'combobox',
                    width:350,
                    fieldLabel:'Người duyệt'
                }]
            },{
                xtype:'fieldcontainer',
                layout:'hbox',
                items:[{
                    xtype:'textareafield',
                    width:750,
                    height:121,
                    fieldLabel:'Lý do'
                }]
            }]

        },{
            xtype:'fieldset',
            title:'Tìm kiếm vật tư',
            width:'28%',
            padding:'5 15 0 10 ',
                defaults: { anchor: '100%' },
                layout: 'anchor',
            top: 11,
            style:{
                //padding:'0px 10px 0px 5px !important',
                margin: '0px 5px 0px 0px !important',
            },
            items:[{
                xtype:'component',
                html:'<p style="margin:0">Mã phiếu(Đồng bộ mã phiếu trên di động<br> để nhập vật tư):</p>'
            },{
                xtype:'component',
                style:{
                    margin:'0px 0px -10px 0px !important',
                },
                html:'<img src="https://miro.medium.com/max/330/1*SDa8rAqN7JZ7cJfChoS5aw.png" alt="" width="80" height="80" style="text-align:center;margin-left: 80px;">'
            },{
                xtype:'component',
                html:'<p style="margin-top:0">Nhập QR code để tìm:</p>'
            },{
                xtype:'fieldcontainer',
                margin:'0 0 20 0',
                style:{
                    margin:'0px 0px 10px 0px !important',
                },
                layout:'hbox',
                items:[{
                    xtype:'textfield',  
                    width:200,
                    pading:'0 2 0 0'
                },{
                    xtype:'button',
                    iconCls:'fa fa-search'
                }]
            }]
        }]
    },{
        xtype: 'gridpanel',
        viewModel: {
            type: "configs-dsdmdexuatod"
        },
        bind: {
            selection: "{rSelected}",
            store: { type: "sdmdexuatod" }
        },
        plugins: {
            ptype: 'cellediting',
            clicksToEdit: 1
        },
        features: [{
            ftype: 'summary',
            dock:'bottom',
        }],
        tools:[{
            xtype:'button',
            text:'Lịch sử trạng thái',
            style: {
                borderRadius:'3px',
                marginRight:'2px'
            },
            iconCls:'fa fa-arrows-alt-h'
        },{
            xtype:'button',
            text:'Thêm vật tư',
            style: {
                borderRadius:'3px',
            },
            iconCls:'fa fa-plus'
        }],
        height:'50%',
        ui:'light',
        title: 'Danh sách vật tư',
        iconCls:'x-fa fa-puzzle-piece',
        columns: [
            {
                xtype: 'rownumberer',
                text: '#',
                width: 40,
                align: 'center',
                sortable: false
            }, {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'maVatTu',
                text: 'Mã-tên',
                flex: 3,
                summaryType: 'count',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return Ext.String.format('({0} Vật tư)', value, value !== 1 ? 's' : '');
                }
            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'donViTinh',
                text: 'Đơn vị tính',
                flex: 1

            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                text: 'Số lượng',
                flex: 2,
                columns:[{
                    text:'Đề xuất',
                    dataIndex: 'deXuat',
                    summaryType: 'sum'
                },{
                    dataIndex: 'pheDuyet',
                    text:'Phê duyệt',
                    summaryType: 'sum',
                    editor: {
                        allowBlank: false
                    }
                }]

            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'donGia',
                text: 'Đơn giá(vnđ)',
                flex: 1

            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'thanhTien',
                summaryType: 'sum',
                text: 'Thành tiền(vnđ)',
                flex: 1

            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'ghiChu',
                text: 'Ghi chú',
                flex: 2

            }
        ],

    }],////items
    buttons:[{
        text: 'Lưu thông tin',
        iconCls:'fa fa-save',
        style: {
            borderRadius:'3px',
        },
    },{
        text: 'Hủy bỏ',
        ui:'soft-red',
        iconCls:'fa fa-times',
        style: {
            borderRadius:'3px',
        },
    }]


});

Ext.define("Admin.view.dexuat.cnDMChuyenTT", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.configs.cnDMYeuCauController", "Admin.view.configs.cnDMYeuCauModel"],
    //controller: "configs-cndmyeucau",
    viewModel: {
        type: "configs-cndmdexuat"
    },
    width: 700,
    modal: true,
    items: [{
        xtype: "form",
        padding: 5,
        reference: "frmChuyenTT",
        layout: {
            type: "vbox",
            align: "stretch"
        },
        defaults: {
            flex: 1,
            labelAlign: "right",
            labelWidth: 100
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Thông tin người yêu cầu',
                cls: 'infor',
                height: 'auto',
                layout: {
                    type: "vbox",
                    align: "stretch"
                }, 
                width: 650,
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'custom-input',
                        fieldLabel: 'Người thực hiện',
                        editable:false,
                        // bind: {
                        //     value: '{record.maYeuCau}'
                        // }
                    },
                    {
                        xtype: 'textfield',
                        cls: 'custom-input',
                        fieldLabel: 'Trạng thái cũ',
                        // bind: {
                        //     value: '{record.noidung}'
                        // }
                    },
                ]
            }, {
                items: [
                    {
                        width: 670,
                        xtype: 'combobox',
                        fieldLabel: 'Trạng thái mới :',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['maTrangThai', 'tenTrangThai'],
                            data: [
                                { "maTrangThai": "1", "tenTrangThai": "Đã xử lí" },
                                { "maTrangThai": "2", "tenTrangThai": "Chưa xử lí" },
                                { "maTrangThai": "3", "tenTrangThai": "Đang xử lí" },
                            ]
                        }),
                        // bind: {
                        //     value: "{record.maTrangThai}"
                        // },
                        queryMode: "local",
                        displayField: 'tenTrangThai',
                        valueField: 'maTrangThai',

                    },
                    {
                        width: 670,
                        xtype: 'textarea',
                        fieldLabel: 'Mô tả :',
                        // bind: {
                        //     value: "{record.moTa}"
                        // },
                    }
                ]
            }
        ],///items
        buttons: [
            // buttonAlign: 'end',
            {
                text: 'Lưu thông tin',
                iconCls: 'fas fa-save',
                handler: 'onSaveTT'
            }, {
                text: 'Đóng',
                iconCls: 'fas fa-times',
                cls: 'btn-danger',
                handler: function () { Ext.Msg.alert('Đóng', 'Đã đóng'); }
            }]
    }],
                // listeners: {
                //     afterRender: "onAfterrender",
                //     close: "onClose"
                // }
});


Ext.define("Admin.view.yeucau.cnDMYeuCauController", {
    extend: "Ext.app.ViewController",
    alias: "controller.yeucau-cndmyeucau",
    refs: null,
    storeInfo: null,

    init: function () {
        var me = this;
        me.callParent(arguments);
    },

    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
    },
    onLoai: function () {
        
    },
    blurMa: function () {
        var me = this;
        var record = me.getViewModel().get("record");
    },

    onSave: function () {
        this.fnSave();
    },

    onSaveAndNew: function () {
        var me = this;
        me.fnSave();
        var newRecord = Ext.create("Admin.model.mDMYeuCau", { maYeuCau: 0 });
        me.getViewModel().set("record", newRecord);
    },

    fnSave: function () {
        var me = this;
        var view = me.getView();
        var fnSauKhiSave = me.getViewModel().get("fnSauKhiSave");
        var record = me.getViewModel().get("record");
        var form = view.getReferences('frmYeuCau').frmYeuCau;
        view.setLoading(false);
        if (form.isValid()) {
            if (record.data.maYeuCau != 0) {
                this.fnPUTAjax();
                console.log('Update successfully');
                view.setLoading(false);
            } else {
                me.fnPOSTAjax();
                console.log('Add successfully');
                view.setLoading(false);
            }
        } else {
            Ext.MessageBox.show({
                title: "Lỗi",
                msg: "Vui lòng điền đầy đủ thông tin",
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.WARNING
            });
        }
    },

    onSaveTT: function () {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'PUT',
            context: this,
            async: true,
            url: 'api/yeucau/' + record.get('maYeuCau') + '/'+ record.get('maTrangThai') +'/'+ record.get('moTa'),
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
            success: function (responseData) {
                // record.set('maLoai', responseData.maLoai);
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave();
                console.log("Update TT");
            },
            error: function (exx) {
                console.log(exx);
                //abp.notify.warn(exx);
            }
        });
    },

    onClose: function () {
        var record = this.getViewModel().get("record");
        if (record) record.reject();
    },

    fnPUTAjax: function (url, data, fnSauKhiSave) {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'PUT',
            context: this,
            async: true,
            url: 'api/yeucau',
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
            success: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                Ext.Msg.alert('Thông báo', 'Sửa thành công ');
                if (fnSauKhiSave) fnSauKhiSave();
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    },

    fnPOSTAjax: function (url, data, fnSauKhiSave) {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'POST',
            context: this,
            async: true,
            url: 'api/yeucau',
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
               // record.set('maLoai', responseData.maLoai);
                Ext.Msg.alert('Thông báo', 'Thêm thành công ');
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                
                if (fnSauKhiSave) fnSauKhiSave();
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    }

});
