Ext.define("Admin.view.quanli.cnDMQuanLiModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.congviec-cndmcongviec",
    data: {
        record: null,
        fnSauKhiSave: null
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

Ext.define("Admin.view.congviec.cnDMCongViec", {
    extend: "Ext.window.Window",
    //configss: ["Admin.view.yeucau.cnDMYeuCauController", "Admin.view.yeucau.cnDMYeuCauModel"],
    controller: "congviec-cndmcongviec",
    /* viewModel: {
         type: "congviec-cndmcongviec"
     },*/
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    width: '100%',
    height: '100%',
    modal: true,
    items: [{
        xtype: 'panel',
        width: '100%',
        padding: '5 0 0 0',
        height: 125,
        items: [{
            xtype: 'form',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'fieldcontainer',
                flex: 4,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'fieldcontainer',
                    defaults: {
                        labelAlign: 'right'
                    },
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Mã',
                        flex: 1,
                    }, {
                        xtype: 'button',
                        iconCls: 'x-fa fa-refresh'
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Loại công việc',
                        flex: 1,
                    }]

                }, {
                    xtype: 'textfield',
                    labelAlign: 'right',
                    width: '70%',
                    fieldLabel: 'Tên công việc',
                    emptyText: 'Nhập tên công việc'
                }, {
                    xtype: 'fieldcontainer',
                    defaults: {
                        labelAlign: 'right'
                    },
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'datefield',
                        fieldLabel: 'Ngày bắt đầu',
                        flex: 2
                    }, {
                        xtype: 'combobox',
                        flex: 1
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Ngày kết thúc',
                        flex: 2
                    }, {
                        xtype: 'combobox',
                        flex: 1
                    }]
                }]

            }, {
                xtype: 'fieldcontainer',
                flex: 1.5,
                defaults: {
                    labelAlign: 'right'
                },
                layout: {
                    type: 'vbox'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Trạng thái',
                    width: '100%'
                }, {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox'
                    },
                    fieldLabel: 'Tiến độ',
                    items: [{
                        xtype: 'slider',
                        width: 210,
                    }, {
                        xtype: 'displayfield',
                        value: '20%',
                        style: {
                            backgroundColor: 'purple'
                        }
                    }]
                }]

            }, {
                xtype: 'component',
                flex: 0.5,
                html: '<img src="https://miro.medium.com/max/330/1*SDa8rAqN7JZ7cJfChoS5aw.png" alt="" width="100" height="100" style="text-align:center;">'
            }]
            //form
        }]

    },
    {
        xtype: 'tabpanel',
        layout: {
            type: 'fit',
        },
        defaults: { autoScroll: true },
        autoScroll: true,
        width: '100%',
        height: 700,
        items: [{
            title: 'Thông tin chung',
            xtype: 'container',
            width: '100%',
            layout: {
                type: 'hbox',
                overflow: 'scroller'
            },
            items: [{
                xtype: 'fieldcontainer',
                layout: 'fit',
                flex: 3,
                padding: '0 5 0 0',
                items: [{
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        flex: 1,
                        padding: '0 2 0 5',
                        labelAlign: 'top'
                    },
                    items: [{
                        xtype: 'combobox',
                        fieldLabel: 'Dự án/Nhóm công việc'
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Độ ưu tiên'
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        labelAlign: 'top',
                        padding: '0 2 0 5',
                        flex: 1,
                    },
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Nội dung'
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        labelAlign: 'top',
                        padding: '0 2 0 5',
                        flex: 1,
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Địa điểm thực hiện'
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        labelAlign: 'top',
                        padding: '0 2 0 5',
                        flex: 1,
                    },
                    items: [{
                        xtype: 'combobox',
                        fieldLabel: 'Nhóm phòng ban'
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Người thực hiện'
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        labelAlign: 'top',
                        padding: '0 2 0 5',
                        flex: 1,
                    },
                    items: [{
                        xtype: 'combobox',
                        fieldLabel: 'Người đơn vị liên quan'
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Người nhận báo cáo'
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaults: {
                        labelAlign: 'top',
                        padding: '0 2 0 5',
                        flex: 1,
                    },
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Nguyên nhân'
                    }, {
                        xtype: 'textarea',
                        fieldLabel: 'Giải pháp'
                    }]
                }, {
                    xtype: 'panel',
                    layout: {
                        type: 'anchor',
                        // align: 'fit'
                    },
                    flex: 3,
                    height: 400,
                    width: '100%',
                    title: 'Thông tin mở rộng',
                    iconCls: 'x-fa fa-tasks',
                    ui: 'light',
                    items: [{
                        xtype: 'fieldcontainer',
                        layout: {
                            type: 'hbox',
                        },
                        defaults: {
                            labelAlign: 'top',
                            padding: '0 2 0 5',
                            flex: 1,
                        },
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 't'
                        }, {
                            xtype: 'combobox',
                            fieldLabel: 'DanhMuc'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            labelAlign: 'top',
                            padding: '0 2 0 5',
                            flex: 1
                        },
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Tiền tệ'
                        }, {
                            xtype: 'combobox',
                            fieldLabel: 'Dữ liệu kiểu số nguyên'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            labelAlign: 'top',
                            padding: '0 2 0 5',
                            flex: 1,
                        },
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Dữ liệu kiểu kí tự'
                        }, {
                            xtype: 'combobox',
                            fieldLabel: 'Dữ liệu kiểu số thực'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            labelAlign: 'top',
                            padding: '0 2 0 5',
                            flex: 1,
                        },
                        items: [{
                            xtype: 'datefield',
                            fieldLabel: 'Dữ liệu kiểu ngày giờ'
                        }, {
                            xtype: 'datefield',
                            fieldLabel: 'Dữ liệu kiểu ngày'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            flex: 1,
                            labelAlign: 'top',
                            padding: '0 2 0 5',
                            flex: 1,
                        },
                        items: [{
                            xtype: 'checkbox',
                            fieldLabel: 'Dữ liệu kiểu logic'
                        }]
                    },]

                }]//itemfield
            }, {
                xtype: 'panel',
                height: 1050,
                flex: 2,
                //layout: 'vbox',
                items: [{
                    xtype: 'panel',
                    ui: 'light',
                    title: 'Hình ảnh/tệp đính kèm',
                    iconCls: 'x-fa fa-picture-o',
                    items: [{
                        xtype: 'dataview',
                        height: 115,
                        itemSelector: 'div.dataview-item',
                        tpl: [
                            '<tpl for=".">',
                            '<div class="dataview-item">',
                            '<img src="classic/resources/images/touch-icons/{thumb}" />',
                            '<h5>img_name</h5>',
                            '</div>',
                            '</tpl>'
                        ],
                    }]
                }, {
                    xtype: 'panel',
                    ui: 'light',
                    title: 'Bình luận',
                    iconCls: 'x-fa fa-comment',
                    items: [{
                        xtype: 'dataview',
                        height: 300,
                        itemSelector: 'div.dataview-cmt-item',
                        tpl: [
                            '<tpl for=".">',
                            '<div class="dataview-cmt-item">',
                            '<img src="classic/resources/images/touch-icons/{thumb}" />',
                            '<h5>{name}</h5>',
                            '</div>',
                            '</tpl>'
                        ],
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [{
                            xtype: 'textfield',
                            width: '80%',
                            emptyText: 'Nhập nội dung bình luận'
                        }, {
                            xtype: 'button',
                            text: 'Gửi'
                        }]
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Gửi email tới',
                        labelAlign: 'top',
                        width: '100%'
                    }]
                }, {
                    xtype: 'panel',
                    ui: 'light',
                    title: 'Thông tin mở rộng',
                    iconCls: 'x-fa fa-hdd-o',
                    height: 300,
                    itemSelector: 'div.dataview-open-item',
                    tpl: [
                        '<tpl for=".">',
                        '<div class="dataview-open-item">',
                        '<img src="classic/resources/images/touch-icons/{thumb}" />',
                        '<h5>{name}</h5>',
                        '</div>',
                        '</tpl>'
                    ],
                }]

            }]//itemsform

        }, {

            title: 'Thông tin liên quan',
            xtype: 'container',
            layout: {
                type: 'hbox',
                overflow: 'scroller'
            },
            items: [{
                xtype: 'fieldcontainer',
                layout: 'fit',
                flex: 3,
                padding: '0 5 0 0',
                items: [{
                    xtype: 'gridpanel',
                    title: 'Tài sản',
                    iconCls: 'x-fa fa-desktop',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Loại tài sản',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Mã-tên tài sản',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                            marginRight: '2px'
                        },
                        iconCls: 'fa fa-plus'
                    }, {
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Hạng mục thực hiện',
                    iconCls: 'x-fa fa-tachomet',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tên hạng mục',
                        flex: 5
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Hoàn thành',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 0.5
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Tài nguyên(Nhân sự/Phương tiện)',
                    iconCls: 'x-fa fa-bars',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Loại tài nguyên',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tên tài nguyên',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Giờ dự kiến',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Giờ thực tế',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Đơn giá',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tổng chi phí',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Vật tư',
                    iconCls: 'x-fa fa-cubes',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tên vật tư',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Số lượng',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tổng chi phí',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Mô tả',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        text: 'Đề xuất vật tư',
                        style: {
                            borderRadius: '3px',
                            marginRight: '2px'
                        },
                        iconCls: 'fa fa-list'
                    }, {
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Chi phí thuê ngoài',
                    iconCls: 'x-fa fa-money-check',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Mục',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Mô tả',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Ngày sử dụng',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Khoản chi',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Đơn vị thuê ngoài',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tổng chi phí',
                        flex: 2
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }]//itemfield
            }, {
                xtype: 'panel',
                height: 1050,
                flex: 2,
                //layout: 'vbox',
                items: [{
                    xtype: 'panel',
                    ui: 'light',
                    title: 'Đánh giá',
                    iconCls: 'x-fa fa-check',
                    items: [{
                        xtype: 'dataview',
                        height: 80,
                        itemSelector: 'div.dataview-item',
                        tpl: [
                            '<tpl for=".">',
                            '<div class="dataview-item">',
                            '<img src="classic/resources/images/touch-icons/{thumb}" />',
                            '<h5>img_name</h5>',
                            '</div>',
                            '</tpl>'
                        ],
                    }],
                    tools: [{
                        xtype: 'button',
                        text: 'Đề xuất vật tư',
                        style: {
                            borderRadius: '3px',
                            marginRight: '2px'
                        },
                        iconCls: 'fa fa-list'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Công việc liên quan',
                    iconCls: 'x-fa fa-wrench',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Tên công việc    ',
                        flex: 5
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Kiểm tra liên quan',
                    iconCls: 'x-fa fa-list',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Loại kiểm tra',
                        flex: 3
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Mã-tên tài sản',
                        flex: 4
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }, {
                    xtype: 'gridpanel',
                    title: 'Yêu cầu liên quan',
                    iconCls: 'x-fa fa-registeredmoney',
                    ui: 'light',
                    columns: [{
                        xtype: 'rownumberer',
                        text: '#',
                        flex: 0.5,
                        align: 'center',
                        sortable: false
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        text: 'Nội dung',
                        flex: 5
                    }, {
                        xtype: 'gridcolumn',
                        cls: 'content-column',
                        flex: 1
                    }],
                    viewConfig: {
                        emptyText: "Không có dữ liệu"
                    },
                    tools: [{
                        xtype: 'button',
                        style: {
                            borderRadius: '3px',
                        },
                        iconCls: 'fa fa-plus'
                    }],
                }]

            }]//itemsform
        },
        {
            title: 'Báo cáo',
            xtype: 'container',
            layout: {
                type: 'anchor'
            },
            width: '100%',
            items: [
                {
                    xtype: 'panel',
                    height: 280,
                    style: 'border-bottom:1px solid #c6e0c6',
                    viewModel: { type: "configs-dsdmreportcv" },
                    items: [
                        {
                            xtype: 'panel',
                            layout: 'hbox',
                            defaults: {
                                store: {
                                    type: "sdmreportcv",
                                },
                                flex: 1
                            },
                            items: [
                                {
                                    xtype: 'dataview',
                                    itemSelector: 'div.dataview-item',
                                    tpl: [
                                        '<tpl for=".">',
                                        '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                        '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{hoanthanh}</h5><span style="font-size:16px">Completed Planned Work</span>',
                                        '</div>',
                                        '</tpl>'
                                    ],
                                    listeners: {
                                        click: {
                                            element: 'el',
                                            fn: function (tooltip, record, item) {
                                                Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'dataview',
                                    itemSelector: 'div.dataview-item',
                                    tpl: [
                                        '<tpl for=".">',
                                        '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                        '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{hoanthanhMuon}</h5><span style="font-size:16px">Completed Unplanned Work</span>',
                                        '</div>',
                                        '</tpl>'
                                    ],
                                    listeners: {
                                        click: {
                                            element: 'el',
                                            fn: function (tooltip, record, item) {
                                                Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'dataview',
                                    itemSelector: 'div.dataview-item',
                                    tpl: [
                                        '<tpl for=".">',
                                        '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                        '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px" style="color:#a93e3e !important">{tilehoanThanh} vs</h5><h5 style="font-size:25px;font-weight: 500;margin-bottom:20px;color:#402525 !important;margin-top:20px !important;" style="color:#402525 !important;margin-top:20px !important;">{tilehoanthanhMuon}</h5><span style="font-size:16px">Planned vs Unplanned</span>',
                                        '</div>',
                                        '</tpl>'
                                    ],
                                    listeners: {
                                        click: {
                                            element: 'el',
                                            fn: function (tooltip, record, item) {
                                                Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'dataview',
                                    itemSelector: 'div.dataview-item',
                                    tpl: [
                                        '<tpl for=".">',
                                        '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                        '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{thoigianhoanThanh}</h5><span style="font-size:16px">Time spent</span>',
                                        '</div>',
                                        '</tpl>'
                                    ],
                                    listeners: {
                                        click: {
                                            element: 'el',
                                            fn: function (tooltip, record, item) {
                                                Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                            }
                                        }
                                    }
                                }]
                        },
                        {
                            xtype: 'panel',
                            layout: 'hbox',
                            defaults: {
                                store: {
                                    type: "sdmreportcv",
                                },
                                flex: 1
                            },
                            items: [{
                                xtype: 'dataview',
                                itemSelector: 'div.dataview-item',
                                tpl: [
                                    '<tpl for=".">',
                                    '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                    '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{mtbf}</h5><span style="font-size:16px">MTBF</span>',
                                    '</div>',
                                    '</tpl>'
                                ],
                                listeners: {
                                    click: {
                                        element: 'el',
                                        fn: function (tooltip, record, item) {
                                            Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                        }
                                    }
                                }
                            }, {
                                xtype: 'dataview',
                                itemSelector: 'div.dataview-item',
                                tpl: [
                                    '<tpl for=".">',
                                    '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                    '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{mttr} hrs</h5><span style="font-size:16px">MTTR</span>',
                                    '</div>',
                                    '</tpl>'
                                ],
                                listeners: {
                                    click: {
                                        element: 'el',
                                        fn: function (tooltip, record, item) {
                                            Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                        }
                                    }
                                }
                            }, {
                                xtype: 'dataview',
                                itemSelector: 'div.dataview-item',
                                tpl: [
                                    '<tpl for=".">',
                                    '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                    '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{downtime} hrs</h5><span style="font-size:16px">Downtime</span>',
                                    '</div>',
                                    '</tpl>'
                                ],
                                listeners: {
                                    click: {
                                        element: 'el',
                                        fn: function (tooltip, record, item) {
                                            Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                        }
                                    }
                                }
                            }, {
                                xtype: 'dataview',
                                itemSelector: 'div.dataview-item',
                                tpl: [
                                    '<tpl for=".">',
                                    '<div class="dataview-item" style="text-align:center;border-right:1px solid #d0d0d0">',
                                    '<h5 style="font-size:25px;font-weight: 500;color: #ad8d8d;margin-bottom:20px">{partused}</h5><span style="font-size:16px">Parts used</span>',
                                    '</div>',
                                    '</tpl>'
                                ],
                                listeners: {
                                    click: {
                                        element: 'el',
                                        fn: function (tooltip, record, item) {
                                            Ext.Msg.alert('Thông báo', 'Hiển thị thông báo')
                                        }
                                    }
                                }
                            }]
                        }]
                },
                {
                    xtype: 'panel',
                    height: 750,
                    layout: 'hbox',
                    items: [{
                        xtype: 'panel',
                        title: 'Tổng chi phí ',
                        store: {
                            type: "sdmcostcv",
                        },
                        ui: 'light',
                        iconCls: 'x-fa fa-bar-chart-o',
                        flex: 1,
                        items: [{
                            xtype: 'polar',
                            width: 500,
                            height: 500,
                            interactions: ['rotate'],
                            insetPadding: 50,
                            innerPadding: 20,
                            store: {
                                type: "sdmcostcv",
                            },
                            legend: {
                                type: 'sprite',
                                docked: 'bottom',
                            },
                            series: {
                                type: 'pie',
                                highlight: true,
                                angleField: 'data1',
                                label: {
                                    field: 'nameCost',
                                    display: 'none'

                                },
                                tooltip: {
                                    trackMouse: true,
                                    renderer: 'onSeriesTooltipRender'
                                },
                                donut: 0
                            }
                        }]
                    },
                    {
                        xtype: 'panel',
                        title: 'Chi phí ước tính',
                        ui: 'light',
                        iconCls: 'x-fa fa-bar-chart-o',
                        flex: 1,
                        items: [{
                            xtype: 'cartesian',
                            reference: 'chart',
                            width: '100%',
                            height: 500,
                            store: {
                                type: 'sdmcostdukiencv'
                            },
                            legend: {
                                type: 'sprite',
                                docked: 'bottom'
                            },
                            interactions: {
                                type: 'itemedit',
                                tooltip: {
                                    renderer: 'onEditTipRender'
                                }
                            },
                            insetPadding: {
                                top: 40,
                                left: 40,
                                right: 40,
                                bottom: 40
                            },
                            axes: [{
                                type: 'numeric',
                                position: 'left',
                                adjustByMajorUnit: true,
                                grid: true,
                                fields: ['labor'],
                                //renderer: 'onAxisLabelRender',
                                minimum: 0
                            }, {
                                type: 'category',
                                position: 'bottom',
                                grid: true,
                                fields: ['month'],
                                label: {
                                    rotate: {
                                        degrees: -45
                                    }
                                }
                            }],
                            series: [{
                                type: 'bar',
                                title: ['Labor', 'Part'],
                                xField: 'month',
                                yField: ['labor', 'parts'],
                                stacked: true,
                                style: {
                                    opacity: 0.80
                                },
                                highlight: {
                                    fillStyle: 'yellow'
                                },
                                tooltip: {
                                    renderer: 'onBarTipRender'
                                }
                            }]
                        }],

                    }]
                }]//itemsbaocao

        }]
    }],
    buttons: [{
        text: 'Lưu thông tin',
        iconCls: 'fa fa-save',
        style: {
            borderRadius: '3px',
        },
    }, {
        text: 'Hủy bỏ',
        ui: 'soft-red',
        iconCls: 'fa fa-times',
        style: {
            borderRadius: '3px',
        },
    }]

});

Ext.define("Admin.view.yeucau.cnDMCongviecController", {
    extend: "Ext.app.ViewController",
    alias: "controller.congviec-cndmcongviec",
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
            url: 'api/yeucau/' + record.get('maYeuCau') + '/' + record.get('maTrangThai') + '/' + record.get('moTa'),
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
    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('nameCost') + ': ' + record.get('data1') + '$');
    },

    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(
            'Labor: ' +
            record.get('labor') + '$' + 'Parts: ' +
            record.get(item.field).toFixed(1) + '$');
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
    },

    onReport: function () {
        this.rp()
    },
    rp: function () {
        Ext.Msg.alert('Thông báo', 'Thêm thành công ');
    }

});
