
Ext.define("Admin.view.yeucau.dsdmYeuCau", {
    extend: "Ext.grid.Panel",
    alias: "widget.dsdmyeucauu",
    //configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    //controller: "configs-dsdmyeucau",
    viewModel: {
        type: "configs-dsdmyeucau"
    },
    layout: "fit",
    bind: {
        selection: "{rSelected}",
        store: "{store}"
    },
    plugins: {
        gridfilters: true
    },
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
            return "<i class='fas fa-calendar-alt'></i>";
        },
        width: 25,
        listeners: {
            click:'onAdd'
        },
        // dataIndex: 'profile_pic',
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        renderer: function (value) {
            return "<i class='fas fa-wrench'></i>";
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
        reference:'state',
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
        dock:'top',
        items: [{
            xtype: 'fieldset',
            title: 'Tìm kiếm yêu cầu',
            height: 'auto',
            minHeight: 170,
            cls: 'searchbox',
            layout: {
                type: 'column',
                // align:'stretch',
            },
            columns: 3,
            items: [
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Ngày tiếp nhận',
                    combineErrors: true,
                    msgTarget: 'side',
                    reference:'formdate',
                    layout: 'hbox',
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [{
                        xtype: 'datefield',
                        name: 'startDate',
                        reference: 'startdate',
                        fieldLabel: 'Start',
                        format:'d/m/Y'
                    }, {
                        xtype: 'datefield',
                        name: 'endDate',
                        fieldLabel: 'End',
                        padding: '0 0 0 10',
                        //maxValue: sdate,
                        //minValue: sdate,
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
                    }]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Loại yêu cầu',
                    queryMode: 'remote',
                    addAllSelector: true,
                    triggerAction: "all",
                    forceSelection: false,
                    store: {
                        type: "sdmphannhom",
                        proxy: { url: 'api/loai' },
                    },
                    bind: {
                        value: "{record.maLoai}"
                    },
                    displayField: 'tenLoai',
                    valueField: 'maLoai',
                    msgTarget: 'side',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn tên loại";
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'admin',
                    fieldLabel: 'Người yêu cầu',
                    queryMode: 'remote',
                    addAllSelector: true,
                    triggerAction: "all",
                    forceSelection: false,
                    store: {
                        type: "sdmphannhom",
                        proxy: { url: 'api/khachhang' },
                    },
                    displayField: 'tenKH',
                    valueField: 'maKH',
                    bind: {
                        value: "{record.maKH}"
                    },
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Nhập tên khách hàng";
                    },
                    style: {
                        paddingRight: "20px"
                    },
                    msgTarget: 'side',
                }
                ,
                {
                    xtype: 'combobox',
                    fieldLabel: 'Trạng thái',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['maTrangThai', 'tenTrangThai'],
                        data: [
                            { "maTrangThai": "1", "tenTrangThai": "Đã xử lí" },
                            { "maTrangThai": "2", "tenTrangThai": "Chưa xử lí" },
                            { "maTrangThai": "3", "tenTrangThai": "Đang xử lí" },
                        ]
                    }),
                    bind: {
                        value: "{record.maTrangThai}"
                    },
                    style: {
                        marginTop: "5px",
                        paddingRight: "184px"
                    },
                    queryMode: "local",
                    displayField: 'tenTrangThai',
                    valueField: 'maTrangThai',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn trạng thái";
                    },
                    msgTarget:'side'
                },
                {
                    xtype: 'textfield',
                    emptyText: 'Nhập từ khóa tìm kiếm',
                    reference: 'loai',
                    fieldLabel: 'Từ khóa',
                    style: {
                        marginTop: "5px",
                    },
                    width: 320,
                    cls: 'key-search'
                },
                
                {
                    iconCls: "fas fa-sync-alt",
                    xtype: 'button',
                    text: 'Tìm mới',
                    style: {
                        borderTop: "solid 1px #d0d0d0 !important",
                            
                        marginTop:"5px"
                    },
                    cls: 'btn-s-new btn-orange',
                    
                },
                {
                    xtype: 'button',
                    text: 'Tìm ',
                    style: {
                        borderTop: "solid 1px #d0d0d0 !important",
                        marginLeft: "10px",
                        marginTop: "5px"
                    },
                    cls: 'btn-search',
                    handler:'onSearch'
                }

                ]
        }]
    }, {
        xtype: "toolbar",
        dock: "bottom",
        items: [{
            xtype: "button",
            text: "Thêm",
            iconCls: "fa fa-plus",
            reference: "btnAdd",
            tooltip: "addtooltip",
            handler: "onAdd"
        }, {
            xtype: "button",
            iconCls: "fas fa-pencil-alt",
            reference: "btnUpdate",
            bind: { disabled: "{!rSelected}" },
            text: "Sửa",
            tooltip: "edittooltip",
            handler: "onUpdate"
        }, {
            xtype: "button",
            iconCls: "fa fa-minus",
            reference: "btnDelete",
            bind: { disabled: "{!rSelected}" },
            text: "Xóa",
            tooltip: "deletetooltip",
            handler: "onDelete"
        },
        {
        xtype: "button",
        iconCls: "fas fa-retweet",
        reference: "btnRetweet",
        bind: { disabled: "{!rSelected}" },
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
            reference:'daxuli',
            width: 20,
            height: 20,
            listeners:{
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
            dock:'bottom right',
            displayInfo: true,
            pageSize: 5,
            beforePageText: "Trang",
            //afterPageText: "của {}",
            displayMsg:"{0} - {1} của {2}" ,
            bind: {
                store: "{store}"
            },
            
        }]
    }],
});