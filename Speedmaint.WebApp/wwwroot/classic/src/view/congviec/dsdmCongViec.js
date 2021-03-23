Ext.define("Admin.view.congviec.dsDMCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmcongviec",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-trangthai" }
    }
});

Ext.define("Admin.view.quanli.dsDMLCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmloaicv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-loaicv" }
    }
});

Ext.define("Admin.view.quanli.dsDMNhomCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmnhomcv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-nhomcv" }
    }
});

Ext.define("Admin.view.quanli.dsDMDetailCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmdetailcv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-detailcv" }
    }
});

Ext.define("Admin.view.quanli.dsDMRCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmreportcv",
    /*data: {
        record: null,
        rSelected: null
    },*/
    stores: {
        store: { type: "sdmreportcv" }
    }
});

Ext.define("Admin.view.quanli.dsdmCongViec", {
    extend: "Ext.container.Container",
    alias: "widget.dsdmcongviec",
   // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "quanli-dsdmcongviec",
    layout: {
        type: 'hbox',
    },
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],
    bodyPadding: 5,
    ui: "light",
    items: [
        {
            xtype: 'panel',
            layout: 'accordion',
            viewModel: {
                type: 'tree-list'
            },
            //flex: 2,
            width:300,
            height: '100%',
            padding:'0 5 2 5',
            ui: 'light',
            defaults: {
                bodyPadding: 10
            },
            dockedItems: [{
                xtype: 'toolbar',
                padding: '5 0 0 5',
                items: [{
                    xtype: 'textfield',
                    width: '100%',
                    emptyText:'Tìm theo:Mã, tên, nội dung, địa chỉ công việc'
                }]
            }]
            ,
            items: [{
                title: {
                    text: 'Trạng thái',
                    cls:'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                height: 400,
                iconCls: 'x-fa fa-flag blue',
                items: [{
                    xtype: 'grid',
                    viewModel: {
                        type: "configs-dsdmcongviec"
                    },
                    
                    bind: {
                        selection: "{rSelected}",
                        store: "{store}"
                    },
                    columnLines: true,
                    selType: 'checkboxmodel',
                    columns: [{
                        flex: 1,
                        dataIndex: 'tenTT',
                    }]

                }]
                ,
                bodyPadding: 0
            }, {
                title: {
                    text: 'Đơn vị thực hiện',
                    cls: 'blue'
                },
                height:280,
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-th blue',
                items: [{
                    xtype: 'treelist',
                    reference: 'treelist',
                    bind: '{navItems}'
                }]
            }, {
                title: {
                    text: 'Người thực hiện',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-user blue',
                html: 'Empty'   
            }, {
                title: {
                    text: 'Loại công việc',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-list blue',
                items: [{
                    xtype: 'grid',
                    viewModel: {
                        type: "configs-dsdmloaicv"
                    },

                    bind: {
                        selection: "{rSelected}",
                        store: "{store}"
                    },
                    columnLines: true,
                    selType: 'checkboxmodel',
                    columns: [{
                        flex: 1,
                        dataIndex: 'tenCV',
                    }]

                }]
            }, {
                title: {
                    text: 'Nhóm công việc/Dự án',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-th-large blue',
                    items: [{
                        xtype: 'grid',
                        viewModel: {
                            type: "configs-dsdmnhomcv"
                        },

                        bind: {
                            selection: "{rSelected}",
                            store: "{store}"
                        },
                        columnLines: true,
                        columns: [{
                            flex: 1,
                            dataIndex: 'maNhom',
                        },{
                            flex: 5,
                            dataIndex: 'tenNhom',
                        }]

                    }]
            },
            {
                title: {
                    text: 'Người giao',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-user blue',
                html: 'Empty'
            }, 
            ],
        },
        {
            xtype: 'panel',
            layout:'card',
            height: '100%',
            session: true,
            padding:'1 0 0 0',
            id: 'main',
            flex: 6,
            width:'100%',
            ui: 'light',
            //defaultListenerScope: true,
            items: [{
                xtype: 'gridpanel',
                id: 'card-0',
                session: true,
                viewModel: {
                    type: "configs-dsdmdetailcv"
                },
                bind: {
                    selection: "{rSelected}",
                    store: "{store}"
                },
                padding: '1 0 0 0',
                //bodyPadding:10,
                flex: 6,
                width: '100%',
                ui: 'light',
                selType: 'checkboxmodel',
                columns: [{
                    flex: 1,
                    xtype: 'templatecolumn',
                    tpl: '<ul style="margin: 0;padding: 0;">' +
                            '<li style="display: flex;justify-content: space-between;max-height: 38px;">' +
                                '<div style=" max- width: 75 % ;font-size:13px ">' +
                                '<span style="font-weight:bold;color:purple">{title}</span>' +
                                ' giao cho {nguoithucHien} bởi {nguoiGiao} ' +
                                '<br><span style="font-style: italic;">{noiDung}</span></div>' +
                                '<div style="max- width: 25 %;margin-right:10px ">' +
                                    '<ul>' +
                                        '<li style="padding-bottom:1px">' +
                                         '<div style="background-color:purple;color: #FFF !important;line-height: 18px;padding: 3px 2px;font-size: 90%;border-radius: 3px;max-width: 105px;text-align: center;">Tiến độ: {tienDo}</div> '
                                     + '</li>' +
                                         '<li>' +
                                            '<span style="background-color: #8d9ea7;color: #FFF !important;line-height: 18px;padding: 4px 6px;font-size: 90%;border-radius: 3px;float: left;min-width: 105px;text-align: center;">Đã phân công</span> <i class="x-fa fa-comment-o fa-2" style="font-size:25px;padding-left:5px  "></i> <i class="x-fa fa-bell-o fa-2" style="font-size:25px"></i>' +
                                         '</li>' +
                                    '</ul>' +
                                '</div>' +
                            '</li>' +
                            '<li>' +
                                '<div style="font-size:11px">' +
                                'Từ <span style="background-color:#95a5a6;color: white;border-radius:2px;padding:1px">' +
                            '{[Ext.Date.format(values.ngaybatDau, "d/m/Y H:i")]}</span> đến <span style="background-color:#95a5a6;color: white;border-radius:2px;padding:1px">{[Ext.Date.format(values.ngayketThuc, "d/m/Y H:i")]}</span>' +
                                '</div>' +
                            '</li>' +
                        '</ul>',
                    format: 'd/m/Y',
                    submitFormat: 'd/m/Y',
                }],   
                viewConfig: {
                    emptyText: "Không có dữ liệu"
                },
                dockedItems: [{
                    xtype: "toolbar",
                    dock: "bottom",
                    items: [{
                        xtype: "button",
                        iconCls: "fa fa-plus",
                        ui: "blue",
                        style: {
                            borderRadius: '3px',
                        },
                        text: "Thêm",
                        tooltip: "Thêm mới",
                        handler: "onAdd"

                    }, {
                        xtype: "button",
                        iconCls: "x-fa fa-eye",
                        ui: "blue",
                        reference: "btnDelete",
                        bind: { disabled: "{!rSelected}" },
                        style: {
                            borderRadius: '3px',
                        },
                        text: "Xem",
                        tooltip: "deletetooltip",
                        handler: "onDelete"

                    }, {
                        xtype: "button",
                        iconCls: 'x-fa fa-puzzle-piece',
                        reference: "btnTool",
                        ui: "blue",
                        text: "Tiện ích",
                        tooltip: "Tiện ích",
                        arrowAlign: 'right',
                        style: {
                            borderRadius: '3px',
                        },
                        menu: [
                            { text: 'Thêm vật tư vào kho', iconCls: 'fa fa-plus-square line', handler: 'onAdd2' },
                            { text: 'Quản lí tồn kho', iconCls: 'fa fa-cog line', handler: 'onAdd' },
                            { text: 'Quản lí định mức', iconCls: 'fa fa-recycle line', handler: 'onQuanli' },
                        ],
                    },
                        "->", {
                        xtype: "pagingtoolbar",
                        displayInfo: true,
                        bind: {
                            store: '{store}'
                        },
                        style: "padding: 0px !important",
                        lastText: "ExtLastText",
                        prevText: "ExtPrevText",
                        firstText: "ExtFirstText",
                        nextText: "ExtNextText",
                        refreshText: "ExtRefreshText",
                        beforePageText: "Trang",
                        afterPageText: "của {0}",
                        displayMsg: "{0} - {1} của {2}",
                        emptyMsg: "ExtEmptyMsg",

                    }]
                }],
            }, {
                xtype: 'panel',
                layout:'fit',
                id: 'card-1',
                items: [{
                    xtype: 'component',
                    height:580,
                    width:1600,
                    html: '<div id="myKanban"></div>',
                    listeners: {
                        afterRender: 'onKanban'
                    }
                }],
                dockedItems: [{
                    xtype: "toolbar",
                    dock: "bottom",
                    items: [{
                        xtype: "button",
                        iconCls: "fa fa-plus",
                        ui: "blue",
                        style: {
                            borderRadius: '3px',
                        },
                        text: "Thêm",
                        tooltip: "Thêm mới",
                        handler: "onAdd"    

                        }]
                    }],
            }, {
                xtype: 'panel',
                layout: 'fit',
                id: 'card-2',
                items: [{
                    xtype: 'component',
                    height: 580,
                    width: 1600,
                    html: '<div id="menu">'+
                        '<span class="dropdown">' +
                        '<button id="dropdownMenu-calendarType" class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '<i id="calendarTypeIcon" class="calendar-icon ic_view_month" style="margin-right: 4px;"></i>' +
                        '<span id="calendarTypeName">Dropdown</span>&nbsp;' +
                        '<i class="calendar-icon tui-full-calendar-dropdown-arrow"></i>' +
                        '</button>' +
                        '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu-calendarType">' +
                        '<li role="presentation">'+
                        '<a class="dropdown-menu-title" role="menuitem" data-action="toggle-daily">'+
                        '<i class="calendar-icon ic_view_day"></i>Ngày' +
                        '</a>' +
                        '</li>' +
                        '<li role="presentation">' +
                        '<a class="dropdown-menu-title" role="menuitem" data-action="toggle-weekly">' +
                        '<i class="calendar-icon ic_view_week"></i>Tuần'+
                        '</a>'+
                        '</li>' +
                        '<li role="presentation">' +
                        '<a class="dropdown-menu-title" role="menuitem" data-action="toggle-monthly">' +
                        '<i class="calendar-icon ic_view_month"></i>Tháng' +
                        '</a>' +
                        '</li>' +
                        '<li role="presentation">' +
                        '<a class="dropdown-menu-title" role="menuitem" data-action="toggle-weeks2">' +
                        '<i class="calendar-icon ic_view_week"></i>2 Tuần' +
                        '</a>' +
                        '</li>' +
                        '<li role="presentation">' +
                        '<a class="dropdown-menu-title" role="menuitem" data-action="toggle-weeks3">' +
                        '<i class="calendar-icon ic_view_week"></i>3 Tuần' +
                        '</a>' +
                        '</li>' +
                        '<li role="presentation" class="dropdown-divider"></li>' +
                        '</ul>' +
                        '</span>' +
                        '<span id="menu-navi">' +
                        '<button type="button" class="btn btn-default btn-sm move-today" data-action="move-today">Hôm nay</button>' +
                        '<button type="button" class="btn btn-default btn-sm move-day" data-action="move-prev">' +
                        '<i class="calendar-icon ic-arrow-line-left" data-action="move-prev"></i>' +
                        '</button>' +
                        '<button type="button" class="btn btn-default btn-sm move-day" data-action="move-next">' +
                        '<i class="calendar-icon ic-arrow-line-right" data-action="move-next"></i>' +
                        '</button>' +
                        '</span>' +
                        '<span id="renderRange" class="render-range"></span>' +
                        '<div id="calendar" style="height: 800px;"></div>'+
                        '</div>' ,
                    
                }],
            }],
            dockedItems: [{
                xtype: "toolbar",
                layout:'fit',
                dock: 'top',
                items: [{
                    xtype: 'fieldcontainer',
                    height: 'auto',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    columns: 2,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            reference: 'formdate',
                            flex: 4,
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Tải lại',
                                ui: 'soft-cyan',
                                iconCls: 'x-fa fa-refresh'
                            }, {
                                xtype: 'button',
                                text: 'Tất cả công việc',
                                ui: 'soft-cyan',
                                iconCls: 'x-fa fa-puzzle-piece',
                                menu: [{
                                    text: 'Tất cả'
                                }, {
                                    text: 'Tôi giao'
                                }, {
                                    text: 'Tôi phải làm'
                                }, {
                                    text: 'Tôi liên quan'

                                }]
                            },
                            {
                                xtype: 'button',
                                text: 'Ngày cập nhật',
                                ui: 'soft-cyan',
                                iconCls: 'x-fa fa-long-arrow-down',
                                menu: [{
                                    text: 'Ngày cập nhật'
                                }, {
                                    text: 'Ngày cập nhật'
                                }, {
                                    text: 'Ngày tạo'
                                }, {
                                    text: 'Ngày tạo'

                                }, {
                                    text: 'Ngày hoàn thành'

                                }, {
                                    text: 'Ngày hoàn thành'

                                }]
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 2,
                            items: [{
                                xtype: 'component',
                                margin: '0 5 0 0',
                                html: '<div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 200px;height:30px">' +
                                    '<i class="fa fa-calendar"></i>&nbsp;' +
                                    '<span></span>' +
                                    '</div>',
                                listeners: {
                                    afterRender: 'onJQ'
                                }
                            },
                            {
                                xtype: 'button',
                                margin: '0 5 0 0',
                                itemId: 'card-prev',
                                ui: 'blue',
                                handler: 'onshowGrid',
                                iconCls: "x-fa fa-list",
                            },
                            {
                                xtype: 'button',
                                margin: '0 5 0 0',
                                ui: 'blue',
                                handler: 'onshowCalendar',
                                iconCls: "x-fa fa-calendar",
                            },
                            {
                                xtype: 'button',
                                itemId: 'card-next',
                                ui: 'blue',
                                handler: 'onshowKanban',
                                iconCls: "x-fa fa-columns",
                            }]
                        },


                    ]
                }]
            }],//docked
        }],////item 
    
});

Ext.define("Admin.view.congviec.dsDMQuanLiController", {
    extend: "Ext.app.ViewController",
    alias: "controller.quanli-dsdmcongviec",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
       /* var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();*/
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onSearch: function () {
       /* var me = this;
        var store = me.storeInfo.store;
        var url = 'api/yeucau' ;
        store.proxy.api.read = url;
        store.load({
            params: {
               *//* skipCount: 0,
                maxResultCount: store.pageSize,*//*
            },
            scope: this,
            callback: function (records, operation, success) {
                if (records == null) {
                    store.removeAll();
                }
            }
        });*/
    },
    onJQ: function () {
        $(function () {

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

    onKanban: function () {
        var kanban = new jKanban({
            element: '#myKanban',                                           // selector of the kanban container
            gutter: '5px',                                       // gutter of the board
            widthBoard: '300px',                                      // width of the board
            responsivePercentage: false,                                    // if it is true I use percentage in the width of the boards and it is not necessary gutter and widthBoard
            dragItems: true,                                         // if false, all items are not draggable
            addItemButton: true,
            buttonContent: "6",
            boards: [
                {
                    "id": "chuathuchien",               // id of the board
                    "title": "Chưa thực hiện",              // title of the board
                    "class": "chua",        // css classes to add at the title
                    "dragTo": ['dangthuchien', 'hoanthanh', 'tamdung', 'huy'],   // array of ids of boards where items can be dropped (default: [])
                    "item": [                           // item of this board
                        {
                            "id": "item-id-1",        // id of the item
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423 </a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">{nguoithucHien} </span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                            "class": ["myClass"]     // array of additional classes
                        },
                        {
                            "id": "item-id-2",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        },
                        {
                            "id": "item-id-3",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        },
                        {
                            "id": "item-4",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        },
                        {
                            "id": "item-4",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        },
                        {
                            "id": "item-4",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        },
                        {
                            "id": "item-4",
                            "title": '<div class="board-task item_handle"><div><a href="" class="dispath">089423</a><span class="maunhat">giao cho </span><span class="nguoidonvigiao">ngaydas</span><span class="maunhat">bởi </span><span class="nguoidonvithuchien">qdqw</span></div><div class="infor-more">Nội dung:</div><div class="infor-more">Từ <span class="fromDate">07/08/2020</span> đến <span class="toDate">09/02/2020</span></div></div>',         // title of the item
                        }
                    ]
                },
                {
                    "id": "dangthuchien",
                    "title": "Đang thực hiện",
                    "class": "dang",
                    "dragTo": ['chuathuchien', 'hoanthanh', 'tamdung', 'huy'],
                },
                {
                    "id": "hoanthanh",
                    "title": "Hoàn thành",
                    "class": "xong",
                    "dragTo": ['dangthuchien', 'chuathuchien', 'tamdung', 'huy'],
                },
                {
                    "id": "tamdung",
                    "title": "Tạm dừng",
                    "class": "dung",
                    "dragTo": ['dangthuchien', 'hoanthanh', 'chuathuchien', 'huy'],
                },
                {
                    "id": "huy",
                    "title": "Hủy",
                    "class": "huy",
                    "dragTo": ['dangthuchien', 'hoanthanh', 'tamdung', 'chuathuchien'],
                }

            ],                                           // json of boards
            dragBoards: true,                                         // the boards are draggable, if false only item can be dragged
            addItemButton: false,                                        // add a button to board for easy item creation
            buttonContent: '+',                                          // text or html content of the board button
            itemHandleOptions: {
                enabled: false,                                 // if board item handle is enabled or not
                handleClass: "item_handle",                         // css class for your custom item handle
                customCssHandler: "drag_handler",                        // when customHandler is undefined, jKanban will use this property to set main handler class
                customCssIconHandler: "drag_handler_icon",                   // when customHandler is undefined, jKanban will use this property to set main icon handler class. If you want, you can use font icon libraries here
                customHandler: "<span class='item_handle'>+</span> %s"// your entirely customized handler. Use %s to position item title
            },
            click: function (el) { },                             // callback when any board's item are clicked
            dragEl: function (el, source) { },                     // callback when any board's item are dragged
            dragendEl: function (el) { },                             // callback when any board's item stop drag
            dropEl: function (el, target, source, sibling) { },    // callback when any board's item drop in a board
            dragBoard: function (el, source) { },                     // callback when any board stop drag
            dragendBoard: function (el) { },                             // callback when any board stop drag
            buttonClick: function (el, boardId) { }                      // callback when the board's button is clicked
        })

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
        var record = Ext.create("Admin.model.congviec.mDMCongViec", { maCv: 0 });
        Ext.create("Admin.view.congviec.cnDMCongViec", {
            title: 'Thông tin chi tiết công việc',
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
    onshowKanban: function (button) {
        this.doCardNavigation(1);
    },
    onshowCalendar: function (button) {
        this.doCardNavigation(2);
    },
    onshowGrid: function () {
        this.doCardNavigation(0);
    },
    doCardNavigation: function (incr) {
        var me = this;
        var l = Ext.getCmp('main').getLayout();
        var i = l.activeItem.id.split('card-')[1];
        l.setActiveItem(incr);
    },

    

});
