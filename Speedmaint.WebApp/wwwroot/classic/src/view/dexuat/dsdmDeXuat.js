Ext.define("Admin.view.dexuat.dsDMDeXuatModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmdexuat",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmdexuat" }
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



Ext.define("Admin.view.dexuat.dsdmDeXuat", {
    extend: "Ext.container.Container",
    alias: "widget.dsdmdexuat",
   // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "dexuat-dsdmdexuat",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin:'0 0 0 5',
    bodyPadding: 5,
    ui: "light",
    session: true,
    items: [
        {
            xtype: 'gridpanel',
            bodyPadding: 5,
            viewModel: {
                type: "configs-dsdmdexuat"
            },
            style:{
                borderBottom:'1px solid #d0d0d0'
            },
            height:'50%',
            bind: {
                selection: "{rSelected}",
                store: "{store}"
             },
            ui:'light',
            title: 'Phiếu đề xuất vật tư',
            iconCls: "fa fa-th-list",
            columns: [
                {
                    xtype: 'rownumberer',
                    text: '#',
                    flex:0.5, 
                    align: 'center',
                    sortable: false
                },{
                        
                    xtype: 'gridcolumn',
                    renderer: function (value) {
                        return "<i class='x-fa fa-calendar-alt'></i>";
                    },
                    width: 25,
                    listeners: {
                        click:'onAdd'
                    },
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'ngayDeXuat',
                    text: 'Ngày đề xuất',
                    format:'m/d/Y',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'soPhieu',
                    text: 'Số phiếu',
                    flex: 1
                },{
                    xtype:'gridcolumn',
                    dataIndex: 'nguoiDeXuat',
                    cls:'content-column',
                    text:'Người đề xuất',
                    flex:1
                },{
                    xtype:'gridcolumn',
                    cls:'content-column',
                    dataIndex: 'nguoiDuyet',
                    text:'Người duyệt',
                    flex:1
                },{
                    xtype:'gridcolumn',
                    cls:'content-column',
                    dataIndex: 'lyDo',
                    text:'Lí do',
                    flex:3
                },{
                    xtype:'gridcolumn',
                    cls:'content-column',
                    dataIndex: 'trangThai',
                    text:'Trạng thái',
                    renderer: function (value, metaData, opData) {
                        if (value === "Chờ duyệt") {
                            metaData.style = "background-color:#606060;color:white;border-radius:10px";
                        } else if (value === "Đã duyệt") {
                            metaData.style = "background-color:#00c292;color:white;border-radius:10px";
                        }else if (value === "Từ chối") {
                            metaData.style = "background-color:#fb9678;color:white;border-radius:10px";
                        }else {
                            metaData.style = "background-color:red;color:white;border-radius:10px";
                        }
                        return value;
                    },
                    flex:1
                }
            ],
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems:[{
                xtype: "toolbar",
                layout: 'hbox',
                dock:'top',
                defaults: {
                    labelWidth:100
                },
                items:[{
                    xtype:'combobox',
                    padding: 5,
                    fieldLabel:'Kho đề xuất',
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
                    flex: 5
                },{
                    xtype:'textfield',
                    fieldLabel:'Số phiếu',
                    labelStyle: 'width:65px',
                    labelWidth:60,
                    flex: 5
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Trạng thái',
                    addAllSelector: true,
                    triggerAction: "all",
                    store: Ext.create('Ext.data.Store', {
                        fields: ['maTrangThai', 'tenTrangThai'],
                        data: [
                            { "maTrangThai": "1", "tenTrangThai": "Tất cả" },
                            { "maTrangThai": "2", "tenTrangThai": "Chờ duyệt" },
                            { "maTrangThai": "3", "tenTrangThai": "Đã duyệt" },
                            { "maTrangThai": "4", "tenTrangThai": "Từ chối" },
                        ]
                    }),
                    queryMode: "local",
                    displayField: 'tenTrangThai',
                    valueField: 'maMucDo',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn trạng thái";
                    },
                    msgTarget: 'side',
                    labelStyle: 'width:70px',
                    labelWidth:65,
                },{
                    xtype:'component',
                    html:'<div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 200px;height:30px">'+
                        '<i class="fa fa-calendar"></i>&nbsp;'+
                        '<span></span>'+
                        '</div>',
                    listeners:{
                        afterRender:'onJQ'
                    }
                },{
                    xtype: 'button',
                    iconCls: "x-fa fa-search",
                    ui:'soft-blue',
                    text: 'Tìm ',
                    style: {
                        borderRadius:'3px',
                        marginLeft: "5px",
                    },
                    flex:1,
                    cls: 'btn-search',
                    //handler:'onSearch'
                }
            ]


            }],
            listeners: {
                afterRender: "onAfterrender"
            }
        },
        {
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
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
        dockedItems: [{
            xtype: "toolbar",
            dock: "bottom",
            style:{
                borderTop:'1px solid #d0d0d0'
            },
            items: [{
                xtype: "button",
                iconCls: "fa fa-plus",
                ui: "soft-red",
                reference: "btnAdd",
                bind: { disabled: "{!rSelected}" },
                text: "Thêm",
                tooltip: "Add",
                style: {
                    borderRadius:'3px',
                },
                handler:'onAdd'
            },{
                xtype: "button",
                iconCls: "fa fa-edit",
                ui: "soft-blue",
                reference: "btnEdit",
                //bind: { disabled: "{!rSelected}" },
                text: "Sửa",
                tooltip: "edittooltip",
                style: {
                    borderRadius:'3px',
                },
            },{
                xtype: "button",
                iconCls: "fa fa-minus",
                ui: "soft-red",
                reference: "btnDelete",
                //bind: { disabled: "{!rSelected}" },
                text: "Xóa",
                tooltip: "deletetooltip",
                handler: "onDelete",
                style: {
                    borderRadius:'3px',
                },
            },{
                xtype: "button",
                iconCls:'x-fa fa-puzzle-piece',
                reference: "btnTool",
                ui: "blue",
                text: "Tiện ích",
                tooltip: "edittooltip",
                arrowAlign: 'right',
                menu: [
                    {
                    text: 'Chuyển trạng thái',
                    iconCls:'x-fa fa-plus ',
                    handler:'onTrans'
                    },
                    {
                        text: 'Phiếu xuất kho',
                        iconCls:'fa fa-check-circle-o line',
                    },
                    {
                        text: 'In phiếu',
                        iconCls:'x-fa fa-print '
                    },
                    {
                        text: 'Tìm phiếu đóng',
                        iconCls:'x-fa fa-search'
                    },
                    ],
                style: {
                    borderRadius:'3px',
                },
            }, 
            {
                xtype: "button",
                style: {
                    backgroundColor: '#606060',
                    marginLeft: "20px",
                    marginBottom: "20px"
                },
                reference:'choduyet',
                width: 20,
                height: 20,
            },
            {
                xxtype: "button",
                style: {
                    backgroundColor: '#00c292',
                    marginBottom: "15px"
                },
                reference: 'daduyet',
                width: 20,
                height: 20,
            },
            {
                xtype: "button",
                style: {
                    backgroundColor: '#fb9678',
                    marginBottom: "15px"
                },
                reference: 'dangxuli',
                width: 20,
                height: 20,
            },{
                xtype: "button",
                style: {
                    backgroundColor: 'red',
                    marginBottom: "15px"
                },
                reference: 'dangxuli',
                width: 20,
                height: 20,
            },"->", {
                xtype: "pagingtoolbar",
                displayInfo: true,
                bind: {
                    store: { type: "sdmdexuat" }
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
    ]////item ,
    
});

Ext.define("Admin.view.dexuat.dsDMDeXuatController", {
    extend: "Ext.app.ViewController",
    alias: "controller.dexuat-dsdmdexuat",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        // var me = this;
        // me.refs = me.getReferences();
        // me.storeInfo = me.getViewModel().storeInfo;
        // me.onSearch();

        ///
        
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
        console.log(this.getView().getReferences('formdate').startdate.getSubmitValue())
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

    onAdd: function () {
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.dexuat.cnDMDeXuat", {
            title: 'Sửa phiếu đề xuất',
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
    onJQ:function(){
        $(function() {
    
            var start = moment().subtract(29, "days");
            var end = moment();
        
            function cb(start, end) {
                $("#reportrange span").html(start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY"));
            }
        
            $("#reportrange").daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                   "Hôm nay": [moment(), moment()],
                   "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                   "7 ngày trước": [moment().subtract(6, "days"), moment()],
                   "30 ngày trước": [moment().subtract(29, "days"), moment()],
                   "Tháng này": [moment().startOf("month"), moment().endOf("month")],
                   "Tháng trước": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                }
            }, cb);
        
            cb(start, end);
        
        });
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
        Ext.create("Admin.view.dexuat.cnDMChuyenTT", {
            title: "Thay đổi trạng thái phiếu",
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
