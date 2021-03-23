Ext.define("Admin.view.quanli.cnDMQuanLiModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-cndmquanli",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});

Ext.define("Admin.view.quanli.cnDMTonKho", {
    extend: "Ext.window.Window",
    //configss: ["Admin.view.yeucau.cnDMYeuCauController", "Admin.view.yeucau.cnDMYeuCauModel"],
    //controller: "yeucau-cndmyeucau",
    viewModel: {
        type: "yeucau-cndmyeucau"
    },
    width: '80%',
    height:600,
    modal: true,

    items:[
        {
            xtype: 'grid',
            height:560,
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
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems:[{
                xtype: "toolbar",
                layout: 'hbox',
                dock:'top',
                    items: [{
                        xtype: 'combobox',
                        fieldLabel: 'Chọn kỳ',
                        height:30,
                        width:'30%'
                        //flex:5.5
                    }, {
                    
                        fieldLabel:'Nhập mã, tên kho',
                        xtype: 'textfield',
                        emptyText:'Nhập mã tên kho',
                        width:'60%',
                        padding:'0 2 2 0',
                    },'->',{
                        xtype:'button',
                        ui:'soft-blue',
                        style: {
                            borderRadius:'3px',
                        },
                        text:'Tìm',
                        iconCls:'fa fa-search',
                        height: 30,
                    }]
            },{
                xtype:'toolbar',
                dock:'bottom',
                items:[{
                    xtype:'button',
                    text:'Chốt tồn đầu kì',
                    style: {
                        borderRadius:'3px',
                    },
                    ui:'soft-blue',
                    iconCls:'fa fa-plus'
                },{
                    xtype:'button',
                    ui:'soft-blue',
                    style: {
                        borderRadius:'3px',
                    },
                    text:'Nhập vật tư từ excel',
                    iconCls:'fa fa-plus'
                },'->',{
                    xtype:'pagingtoolbar'
                },{
                    xtype:'button',
                    text:'Hủy bỏ',
                    style: {
                        borderRadius:'3px',
                    },
                    ui: "soft-red",
                    iconCls:'fa fa-times'
                }]
               
            }],

        }
    ]
    
});

Ext.define("Admin.view.quanli.cnDMThemVatTu", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.configs.cnDMYeuCauController", "Admin.view.configs.cnDMYeuCauModel"],
    //controller: "configs-cndmyeucau",
    viewModel: {
        type: "configs-cndmyeucau"
    },
    width: 700,
    height:500,
    modal: true,
    items:[
        {
            xtype: 'grid',
            height:422,
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
                    dataIndex: 'donViTinh',
                    text: 'Mã vật tư',
                    flex: 1

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'donGia',
                    text: 'Tên vật tư',
                    flex: 3

                }
            ],
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems:[{
                xtype: "toolbar",
                layout: 'hbox',
                dock:'top',
                    items: [{
                        xtype: 'combobox',
                        fieldLabel: 'Nhóm vật tư',
                        height:30,
                        width:'40%'
                        //flex:5.5
                    }, {
                    
                        fieldLabel:'Tìm',
                        xtype: 'textfield',
                        emptyText:'Nhập mã tên vật tư',
                        width:'50%',
                        padding:'0 2 2 0',
                    },{
                        xtype:'button',
                        ui:'soft-blue',
                        text:'Tìm',
                        iconCls:'fa fa-search',
                        height: 30,
                        style: {
                            borderRadius:'3px',
                        },
                    }]
            },{
                xtype:'toolbar',
                dock:'bottom',
                items:[{
                    xtype:'pagingtoolbar',
                }]
               
            }],

        }
    ],
    buttons: [{
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

Ext.define("Admin.view.quanli.cnDMDinhMuc", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.configs.cnDMYeuCauController", "Admin.view.configs.cnDMYeuCauModel"],
    //controller: "configs-cndmyeucau",
    viewModel: {
        type: "configs-cndmyeucau"
    },
    layout:'hbox',
    width: '80%',
    height:600,
    modal: true,
    items: [
        {
            xtype: 'grid',
            viewModel: {
                type: "configs-dsdmquanliod"
            },
            flex: 2,
            height:'100%',
            padding:'0 5 2 5',
            reference: 'nhomvattuGrid',
            bind: {
                selection: "{rSelected}",
                store: "{store}"
             },
            ui:'light',
            title: 'Nhóm vật tư',
            iconCls: "x-fa fa-object-group",
            columns: [
                {
                    xtype: 'rownumberer',
                    text: '#',
                    flex:0.5,
                    align: 'center',
                    sortable: false
                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'id',
                    text: 'Mã',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'tenNhom',
                    text: 'Tên nhóm',
                    flex: 1
                }
            ],
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems:[{
                xtype: "toolbar",
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                dock:'top',
                items:[{
                    xtype:'textfield',
                    emptyText:'Nhập tên,mã nhóm vật tư'
                }]


            },{
                xtype:'toolbar',
                dock:'bottom',
                items:[{
                    xtype: "pagingtoolbar",
                    displayInfo: true,
                    bind: {
                        store: '{store}'
                    },
                    style: "padding: 0px !important",
                    lastText:"ExtLastText",
                    prevText:"ExtPrevText",
                    firstText:"ExtFirstText",
                    nextText:"ExtNextText",
                    refreshText:"ExtRefreshText",
                    beforePageText:"Trang",
                    afterPageText:"của {0}",
                    displayMsg:"{0} - {1} của {2}" ,
                    emptyMsg:"ExtEmptyMsg", 
            }]
            }],
            
        },
        {
            xtype: 'gridpanel',
            height:'100%',
            session: true,
            viewModel: {
               // type: "configs-dsdmquanli"
            },
            bind: {
                selection: "{rSelected}",
                store: "{store}"
            },
            flex: 5,
            ui:'light',
            title: 'Danh sách vật tư trong kho',
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
                    //dataIndex: 'maVatTu',
                    text: 'Mã vật tư',
                    flex: 3,
                    summaryType: 'count',
                    summaryRenderer: function(value, summaryData, dataIndex) {
                        return Ext.String.format('({0} Vật tư)', value, value !== 1 ? 's' : '');
                    }
                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                   // dataIndex: 'maVatTu',
                    text: 'Tên',
                    flex: 1,
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                   // dataIndex: 'donViTinh',
                    text: 'Đơn vị tính',
                    flex: 2

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                   // dataIndex: 'donViTinh',
                    text: 'Số lượng',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    text: 'Định mức tồn',
                    flex: 2,
                    columns:[{
                        text:'Tồn min',
                        dataIndex: 'deXuat',
                        summaryType: 'sum'
                    },{
                        dataIndex: 'pheDuyet',
                        text:'Tồn max',
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
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems: [{
                xtype: "toolbar",
                border: false,
                layout: 'anchor',
                padding:'0 0 10 0',
                defaults: {
                    anchor: '100%'
                },
                dock:'top',
                                //labelStyle: 'width:70px; white-space: nowrap;',
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            reference:'formdate',
                            layout: {
                                type: 'hbox',
                                align:'stretch',
                            },
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: 'Mã',
                                width:'40%'
                                //flex:5.5
                            }, {
                            
                                fieldLabel:'Tên',
                                labelStyle: 'width:65px',
                                labelWidth:60,
                                xtype: 'textfield',
                                padding:'0 2 2 0',
                                width:'40%',
                                flex:2
                            },
                            {
                                xtype: 'button',
                                text:'Tìm',
                                iconCls:'fa fa-search'
                            }]
            }, {
                xtype: "toolbar",
                dock: "bottom",
                items: [{
                    xtype: "button",
                    iconCls:'x-fa fa-puzzle-piece',
                    reference: "btnTool",
                    ui: "blue",
                    text: "Tiện ích",
                    tooltip: "Tiện ích",
                    arrowAlign: 'right',
                    style: {
                        borderRadius:'3px',
                    },
                    menu      : [
                        {text: 'Thêm vật tư vào kho',iconCls:'fa fa-plus-square line',handler:'onAdd2'},
                        {text: 'Quản lí tồn kho',iconCls:'fa fa-cog line',handler:'onAdd'},
                        {text: 'Quản lí định mức',iconCls:'fa fa-recycle line'},
                        ],
                   
                }, {
                    xtype: "button",
                    iconCls: "fa fa-minus",
                    ui: "soft-red",
                    reference: "btnDelete",
                    bind: { disabled: "{!rSelected}" },
                    style: {
                        borderRadius:'3px',
                    },
                    text: "Xóa",
                    tooltip: "deletetooltip",
                    handler: "onDelete"
                },
                {
                    xtype: "button",
                    border:false,
                    iconCls:'fa fa-exclamation-triangle dangerIcon',    
                    style: {
                        backgroundColor: '#f6f6f6',
                        marginLeft: "10px",
                        marginBottom: "6px"
                    },
                    reference:'daxuli',
                    width: 20,
                    height: 30,
                },
            {
                xtype: "button",
                border:false,
                iconCls:'fa fa-exclamation-triangle danger2Icon',
                style: {
                    backgroundColor: '#f6f6f6',
                    Color:'#ff0000',
                    marginBottom: "6px"
                },
                width: 20,
                height: 30,
            },
            {
                xtype: "button",
                border:false,
                iconCls:'fa fa-check-circle-o successIcon',
                style: {
                    backgroundColor: '#f6f6f6',
                    marginBottom: "6px"
                },
                width: 20,
                height: 30,
            },"->", {
                xtype: "pagingtoolbar",
                displayInfo: true,
                // bind: {
                //     store: '{store}'
                // },
                style: "padding: 0px !important",
                lastText:"ExtLastText",
                prevText:"ExtPrevText",
                firstText:"ExtFirstText",
                nextText:"ExtNextText",
                refreshText:"ExtRefreshText",
                beforePageText:"Trang",
                afterPageText:"của {0}",
                displayMsg:"{0} - {1} của {2}" ,
                emptyMsg:"ExtEmptyMsg",
                    
                }]
            }],


        },
        
    ],////item 
    buttons: [{
        text: 'Hủy bỏ',
        ui:'soft-red',
        iconCls:'fa fa-times'
    }]
   
    
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
