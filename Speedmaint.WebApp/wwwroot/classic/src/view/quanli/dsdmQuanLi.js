Ext.define("Admin.view.quanli.dsDMQuanLiModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmquanli",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmquanli" }
    }
});

Ext.define("Admin.view.quanli.dsDMQuanLiODModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmquanliod",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmquanliod" }
    }
});


Ext.define("Admin.view.quanli.dsdmQuanLi", {
    extend: "Ext.container.Container",
    alias: "widget.dsdmquanli",
   // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "quanli-dsdmquanli",
    layout: {
        type: 'hbox',
        overflow: 'scroller'
    },
    bodyPadding: 5,
    ui: "light",
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
                type: "configs-dsdmquanli"
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
                    renderer: function (value) {
                        return "<i class='x-fa fa-calendar-alt'></i>";
                    },
                    width: 25,
                    listeners: {
                        click:'onAdd'
                    },
                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'maVatTu',
                    text: 'Mã vật tư',
                    flex: 1
                },{
                    xtype: 'gridcolumn',
                    renderer: function (value) {
                        return "<i class='x-fa fa-calendar-alt'></i>";
                    },
                    width: 25,
                    listeners: {
                        click:'onAdd'
                    },
                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'tenVatTu',
                    text: 'Tên vật tư',
                    flex: 2

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'khoDeXuat',
                    text: 'Kho đề xuất',
                    flex: 2

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'donViTinh',
                    text: 'Đơn vị tính',
                    flex: 1

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'soLuong',
                    text: 'Số lượng',
                    flex: 1

                },{
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'dinhMucTon',
                    text: 'Định mức tồn',
                    flex: 1

                }
            ],   
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems: [{
                xtype: "toolbar",
                border: false,
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                dock:'top',
                items: [{
                    xtype: 'fieldcontainer',
                    height: 'auto',
                    minHeight: 65,
                    cls: 'searchbox',
                    defaults: {
                        labelWidth:100
                    },
                    layout: {
                        type: 'vbox',
                        align:'stretch',
                    },
                    columns: 3,
                    items: [
                        {
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
                                xtype: 'combobox',
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
                                width:'60%'
                            }, {
                            
                                fieldLabel:'Số lượng',
                                labelStyle: 'width:65px',
                                labelWidth:60,
                                xtype: 'combobox',
                                emptyText:'Công thức',
                                padding:'0 2 2 0',
                                flex: 2, 
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['maCt', 'tenCt'],
                                    data: [
                                        { "maCt": "1", "tenCt": ">" },
                                        { "maCt": "2", "tenCt": ">=" },
                                        { "maCt": "3", "tenCt": "<" },
                                        { "maCt": "4", "tenCt": "<=" },
                                        { "maCt": "5", "tenCt": "=" },
                                    ]
                                }),
                                queryMode: "local",
                                displayField: 'tenCt',
                                valueField: 'maCt',
                                validator: function (val) {
                                    return (val.trim().length > 0) ? true : "Chọn ct";
                                },
                                msgTarget: 'side',
                            },
                            {
                                xtype: 'numberfield',
                                emptyText:'Số lượng',
                                anchor: '100%',
                                maxValue: 99,
                                minValue: -99
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            reference:'formdate',
                            layout: 'hbox',
                            defaults: {
                                flex: 1,    
                            },
                            items: [{
                                xtype: 'textfield',
                                emptyText: 'Nhập mã vật tư',
                                fieldLabel: 'Mã vật tư',
                                padding:'0 20 0 0',
                                flex:3,
                                cls: 'key-search'
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Nhập tên vật tư',
                                fieldLabel: 'Tên vật tư',
                                padding:'0 10 0 0',
                                flex:3,
                                cls: 'key-search'
                            },
                            {
                                iconCls: "x-fa fa-refresh",
                                xtype: 'button',
                                text: 'Tìm mới',
                                border:false,
                                style: {
                                    backgroundColor:'#ffc900',
                                    borderRadius:'5px',
                                    borderTop: "solid 1px #d0d0d0 !important",
                                },
                                flex:1,
                                cls: 'btn-s-new btn-orange',
                                
                            },
                            {
                                xtype: 'button',
                                iconCls: "x-fa fa-search",
                                text: 'Tìm ',
                                style: {
                                    borderRadius:'5px',
                                    borderTop: "solid 1px #d0d0d0 !important",
                                    marginLeft: "10px",
                                },
                                flex:1,
                                cls: 'btn-search',
                                handler:'onSearch'
                            }]
                        },
                        
        
                        ]
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
                        {text: 'Quản lí định mức',iconCls:'fa fa-recycle line',handler:'onQuanli'},
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
        
    ],////item 
    
});

Ext.define("Ek.view.quanli.dsDMQuanLiController", {
    extend: "Ext.app.ViewController",
    alias: "controller.quanli-dsdmquanli",
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

    onSearch: function () {
        var me = this;
        var store = me.storeInfo.store;
        var url = 'api/yeucau' ;
        store.proxy.api.read = url;
        store.load({
            params: {
               /* skipCount: 0,
                maxResultCount: store.pageSize,*/
            },
            scope: this,
            callback: function (records, operation, success) {
                if (records == null) {
                    store.removeAll();
                }
            }
        });
    },
    onAdd2:function(){
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.quanli.cnDMThemVatTu", {
            title: 'Quản lí tồn kho',
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                    
                }
            }
        }).show();
    },
    onQuanli:function(){
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.quanli.cnDMDinhMuc", {
            title: 'Quản lí định mức cho vật tư trong kho',
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                    
                }
            }
        }).show();
    },
    onAdd: function () {
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.quanli.cnDMTonKho", {
            title: 'Quản lí tồn kho',
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                    
                }
            }
        }).show();
    },


    onUpdate: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.configs.cnDMYeuCau", {
            title:"Cập nhật",
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },
    onTrans: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.quanli.cnDMChuyenTT", {
            title: "Chuyển trạng thái",
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },
    onCheckState: function () {
        var me = this;
        var view = me.getView();
        var form = view.getReferences('state').state;
        console.log(this.reference);
        form.filter.setValue('Chưa')
    }
    ,

    onDelete: function () {
        var me = this;
        var record = this.getViewModel().get("rSelected");
        Ext.MessageBox.confirm(
            'Xác nhận xóa', 'Bạn có muốn xóa?',function (btn) {
                if (btn == 'yes') {
                    me.fnDELETEAjax();
                    me.onSearch();
                }
        })
        
        
    },

    fnDELETEAjax: function (url, fnSauKhiSave) {
        var record = this.getViewModel().get("rSelected");
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
    
                $.ajax({
                    type: 'DELETE',
                    dataType: 'json',
                    async: false,
                    url: 'api/yeucau/' + record.get('maYeuCau'),
                    success: function (responseData) {
                        Ext.Msg.alert('Thông báo', 'Xóa thành công ');
                        if (fnSauKhiSave) fnSauKhiSave(responseData);
                    },
                    complete: function () {
                        console.log("Delete successfully");
                        if (fnSauKhiSave) fnSauKhiSave();
                        Ext.Msg.alert('Thông báo', 'Xóa thành công !');
                    },
                    error: function (exx) {
                        console.log(exx);
                    }
                });
    },
});
