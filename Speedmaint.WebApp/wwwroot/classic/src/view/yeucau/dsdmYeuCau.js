Ext.define("Admin.view.yeucau.dsDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmyeucau",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmyeucau" },
        storeKH: { type: "skhachhang" },
        storeNV: { type: "snhanvien" },
        storePhanNhom: {type:"sdmphannhom"}
    }
});


Ext.define("Admin.view.yeucau.dsdmYeuCau", {
    extend: "Ext.grid.Panel",
    alias: "widget.dsdmyeucau",
    // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "configs-dsdmyeucau",
    viewModel: {
        type: "configs-dsdmyeucau"
    },
    layout: "fit",
    bind: {
        selection: "{rSelected}",
        store: "{store}"
    },
    // plugins: {
    //     gridfilters: true
    // },
    ui: "light",
    session: true,
    columns: [{
        xtype: 'rownumberer',
        text: '#',
        width: 40,
        align: 'center',
        sortable: false
    }, {

        xtype: 'gridcolumn',
        renderer: function (value) {
            return "<i class='x-fa fa-calendar'></i>";
        },
        width: 25,
        listeners: {
            click: 'onAdd'
        },
        // dataIndex: 'profile_pic',
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        renderer: function (value) {
            return "<i class='x-fa fa-wrench'></i>";
        },
        width: 25,
        listeners: {
            click: 'onUpdate'
        },
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        renderer: function (value) {
            return "<img src='https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg' width=50 height=50/>";
        },
        width: 60,
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'ngayTiepNhan',
        text: 'Ngày yêu cầu',
        format: 'd/m/Y',
        flex: 1
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'noidung',
        text: 'Nội dung',
        flex: 2
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenKH',
        text: 'Người Yêu cầu',
        flex: 2
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenLoai',
        text: 'Loại yêu cầu',
        flex: 1
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenTrangThai',
        reference: 'state',
        text: 'Trạng thái',
        filter: {
            type: 'string',

        },
        renderer: function (value, metaData, opData) {
            if (value === "Đã xử lí") {
                metaData.style = "background-color:#EAA8A8;color:white;border-radius:10px";
            } else if (value === "Chưa xử lí") {
                metaData.style = "background-color:#daef2c;color:white;border-radius:10px";
            } else {
                metaData.style = "background-color:green;color:white;border-radius:10px";
            }
            return value;
        },
        flex: 1
    }],
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
        dock: 'top',

        items: [{
            xtype: 'fieldset',
            title: 'Tìm kiếm yêu cầu',
            height: 'auto',
            minHeight: 130,
            cls: 'searchbox',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [{
                xtype: 'fieldcontainer',
                height: 'auto',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                },
                defaults: {
                    labelWidth: 100
                },
                items: [{
                    xtype: 'datefield',
                    name: 'startDate',
                    reference: 'startdate',
                    fieldLabel: 'Ngày tiếp nhận',
                    format: 'd/m/Y'
                }, {
                    xtype: 'datefield',
                    name: 'endtDate',
                    reference: 'enddate',
                    format: 'd/m/Y',
                    style: {
                        paddingLeft: "20px"
                    },
                    listeners: {
                        'change': function (me) {
                            var sdate = this.up('fieldcontainer').getRefItems()[0].getSubmitValue();
                            var edate = me.getSubmitValue();
                            if (edate < sdate) {
                                // this.setValue('')
                                Ext.toast('Ngày kết thúc phải lớn hơn ngày bắt đầu!!Vui lòng nhập lại', 'Lỗi nhập')
                            }

                        }
                    }
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Loại yêu cầu',
                    flex: 2,
                    queryMode: 'remote',
                    addAllSelector: true,
                    triggerAction: "all",
                    forceSelection: false,
                    store: {
                        type: "sdmyeucau",
                        proxy: { url: 'api/loai' },
                    },
                    /*listeners: {
                        blur: "blurMa"
                    },*/
                    displayField: 'tenLoai',
                    valueField: 'maLoai',
                    reference: 'txtLoai',
                    msgTarget: 'side',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn tên loại";
                    }
                }, {
                    xtype: 'combobox',
                    emptyText: 'admin',
                    fieldLabel: 'Người yêu cầu',
                    flex: 2,
                    queryMode: 'remote',
                    addAllSelector: true,
                    triggerAction: "all",
                    forceSelection: false,
                    store: {
                        type: "sdmyeucau",
                        proxy: { url: 'api/khachhang' },
                    },
                    displayField: 'tenKH',
                    valueField: 'maKH',
                    reference: 'txtKH',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Nhập tên khách hàng";
                    },
                    style: {
                        paddingRight: "20px"
                    },
                    msgTarget: 'side',
                }]


            }, {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                },
                defaults: {
                    labelWidth: 100
                },
                items: [{
                    xtype: 'combobox',
                    emptyText: 'Trạng thái',
                    fieldLabel: 'Trạng thái',
                    height: 30,
                    flex: 2,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['maTrangThai', 'tenTrangThai'],
                        data: [
                            { "maTrangThai": "1", "tenTrangThai": "Đang xử lí" },
                            { "maTrangThai": "2", "tenTrangThai": "Đã xử lí" },
                            { "maTrangThai": "3", "tenTrangThai": "Chưa xử lí" },
                        ]
                    }),
                    queryMode: "local",
                    displayField: 'tenTrangThai',
                    valueField: 'maTrangThai',
                    reference: 'txtTrangThai',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn trạng thái";
                    },
                    msgTarget: 'side',
                }, {
                    xtype: 'textfield',
                    emptyText: 'Nhập từ khóa tìm kiếm',
                    flex: 3,
                    labelWidth: 70,
                    fieldLabel: 'Từ khóa',
                    listeners: {
                        specialkey: 'specialkey'
                    },
                    reference: 'txtSearch',
                    cls: 'key-search'
                }, {
                    iconCls: "x-fa fa-refresh",
                    xtype: 'button',
                    text: 'Tìm mới',
                    reference: "reset",
                    border: false,
                    style: {
                        backgroundColor: '#ffc900',
                        borderRadius: '5px',
                        borderTop: "solid 1px #d0d0d0 !important",
                    },
                    flex: 0.5,
                    cls: 'btn-s-new btn-orange',
                    handler: "onReset"
                },
                {
                    xtype: 'button',
                    iconCls: "x-fa fa-search",
                    text: 'Tìm ',
                    style: {
                        borderRadius: '5px',
                        borderTop: "solid 1px #d0d0d0 !important",
                        marginLeft: "10px",
                    },
                    flex: 0.5,
                    cls: 'btn-search',
                    handler: 'onSearch'
                }]
            }]

        }]
    }, {
        xtype: "toolbar",
        dock: "bottom",
        items: [{
            xtype: "button",
            text: "Thêm",
            iconCls: "x-fa fa-plus",
            reference: "btnAdd",
            ui: 'blue',
            style: {
                borderRadius: '5px',
            },
            tooltip: "addtooltip",
            handler: "onAdd"
        }, {
            xtype: "button",
            iconCls: "x-fa fa-pencil",
            ui: 'blue',
            reference: "btnUpdate",
            bind: { disabled: "{!rSelected}" },
            style: {
                borderRadius: '5px',
            },
            text: "Sửa",
            tooltip: "edittooltip",
            handler: "onUpdate"
        }, {
            xtype: "button",
            iconCls: "x-fa fa-minus",
            ui: 'soft-red',
            reference: "btnDelete",
            bind: { disabled: "{!rSelected}" },
            style: {
                borderRadius: '5px',
            },
            text: "Xóa",
            tooltip: "deletetooltip",
            handler: "onDelete"
        },
        {
            xtype: "button",
            iconCls: "x-fa fa-retweet",
            ui: 'blue',
            reference: "btnRetweet",
            bind: { disabled: "{!rSelected}" },
            style: {
                borderRadius: '5px',
            },
            text: "Chuyển đổi",
            tooltip: "transfertooltip",
            handler: "onTrans"
        }, {
            xtype: "button",
            style: {
                backgroundColor: '#EAA8A8',
                marginLeft: "70px",
                marginBottom: "20px"
            },
            tooltip: "Đã xử lí",
            reference: 'daxuli',
            width: 20,
            height: 20,
            listeners: {
                click: function () {
                    var view = this.up('gridpanel');
                    var form = view.getReferences('state').state;
                    form.filter.setValue('Đã xử lí')
                }
            }
        },
        {
            xtype: "button",
            style: {
                backgroundColor: '#daef2c',
                marginBottom: "15px"
            },
            tooltip: "Chưa xử lí",
            reference: 'chuaxuli',
            listeners: {
                click: function () {
                    var view = this.up('gridpanel');
                    var form = view.getReferences('state').state;
                    form.filter.setValue('Chưa xử lí')
                }
            },
            width: 20,
            height: 20,
        },
        {
            xtype: "button",
            style: {
                backgroundColor: 'green',
                marginBottom: "15px"
            },
            tooltip: "Đang xử lí",
            reference: 'dangxuli',
            width: 20,
            height: 20,
            listeners: {
                click: function () {
                    var view = this.up('gridpanel');
                    var form = view.getReferences('state').state;
                    form.filter.setValue('Đang xử lí')
                }
            }
        },
            "->", {
            xtype: "pagingtoolbar",
            dock: 'bottom right',
            displayInfo: true,
            beforePageText: "Trang",
            //afterPageText: "của {}",
            displayMsg: "{0} - {1} của {2}",
            bind: {
                store: "{store}"
            },

        }]
    }],
    listeners: {
        afterRender: "onAfterrender"
    }
});

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

    onSearch: function () {
        var me = this;
        var store = me.storeInfo.store;
        var noidung = me.refs.txtSearch.getValue();
        var KH = me.refs.txtKH.getValue();
        var Loai = me.refs.txtLoai.getValue();
        var TrangThai = me.refs.txtTrangThai.getValue();
        var Sdate = me.getView().refs.startdate.getSubmitValue();
        var Edate = me.getView().refs.enddate.getSubmitValue();
        if (Loai == null) {
            Loai = '';
        };
        if (TrangThai == null) {
            TrangThai = '';
        };
        if (KH == null) {
            KH = '';
        };
        //console.log(this.getView().getReferences('formdate').startdate.getSubmitValue())
        var url = "/api/yeucau?" + '&noidung=' + noidung + '&tenKH=' + KH + '&maloai=' + Loai + '&matrangthai=' + TrangThai + '&ngaybatdau=' + Sdate + '&ngayketthuc=' + Edate;
        store.proxy.api.read = url;
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                console.log(records);
                if (records == null) {
                    store.removeAll();
                }
            }
        });
    },
    onReset: function () {
        //this.getView().setLoading(true);
        this.onSearch();
    },
    onAdd: function () {
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.yeucau.cnDMYeuCau", {
            title: 'Thêm mới',
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
        Ext.create("Admin.view.yeucau.cnDMYeuCau", {
            title: "Cập nhật",
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
        Ext.create("Admin.view.configs.cnDMChuyenTT", {
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
            'Xác nhận xóa', 'Bạn có muốn xóa?', function (btn) {
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
