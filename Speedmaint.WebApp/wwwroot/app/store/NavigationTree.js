Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Công việc',
                iconCls: 'x-fa fa-th-large',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                id: 'work',

                children: [
                    {
                        text: 'Công việc',
                        iconCls: 'x-fa fa-inbox',
                        viewType: 'dsdmcongviec',
                        leaf: true
                    },

                    {
                        text: 'Lập lịch bảo trì',
                        iconCls: 'x-fa fa-calendar',
                        viewType: 'customdashboard',
                        leaf: true
                    },
                ]
            },
            {
                text: 'Quản lí yêu cầu',
                iconCls: 'x-fa fa-registered',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                id: 'request',
                children: [
                    {
                        text: 'Yêu cầu',
                        iconCls: 'x-fa fa-registered',
                        viewType: 'dsdmyeucau',
                        leaf: true
                    },

                    {
                        text: 'Khách hàng',
                        iconCls: 'x-fa fa-briefcase',
                        viewType: 'dskhachhang',
                        leaf: true
                    },
                    {
                        text: 'Nhân viên',
                        iconCls: 'x-fa fa-user',
                        viewType: 'dsnhanvien',
                        leaf: true
                    },
                    {
                        text: 'Loại yêu cầu',
                        iconCls: 'x-fa fa-bars',
                        viewType: 'dsdmphannhom',
                        leaf: true
                    },
                ]
            },
            {
                text: 'Email',
                iconCls: 'x-fa fa-paper-plane',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            {
                text: 'Kho vật tư',
                iconCls: 'x-fa fa-cubes',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Quản lí kho ',
                        iconCls: 'x-fa fa-inbox',
                        viewType: 'dsdmquanli',
                        leaf: true
                    },

                    {
                        text: 'Đề xuất vật tư',
                        iconCls: 'x-fa fa-bars',
                        viewType: 'dsdmdexuat',
                        leaf: true
                    },
                    {
                        text: 'Phiếu nhập xuất',
                        iconCls: 'x-fa fa-cloud-upload',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Danh mục kho',
                        iconCls: 'x-fa fa-archive',
                        viewType: 'lockscreen',
                        leaf: true
                    },

                    {
                        text: 'Danh mục vật tư',
                        iconCls: 'x-fa fa-th-list',
                        viewType: 'login',
                        leaf: true
                    }
                ]
            },

            {
                text: 'Map',
                iconCls: 'x-fa fa-globe',
                viewType: 'mapVN',
                leaf: true
            }
        ]
    }
});



