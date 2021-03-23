Ext.define('Admin.data.quanli.vattu', {
    // requires: [
    //     'KitchenSink.data.Init'
    // ]
}, function() {
    var vt = [{ 
        vtId: 1,
        maVatTu: 1,
        tenVatTu:'Máy bơm',
        khoDeXuat:'Kho 1',
        donViTinh:'số cái',
        soLuong:6,
        dinhMucTon:'Muc 1',
    },{ 
        vtId: 2,
        maVatTu: 2,
        tenVatTu:'Tủ lạnh',
        khoDeXuat:'Kho 3',
        donViTinh:'số cái',
        soLuong:6,
        dinhMucTon:'Muc 1',
    },{ 
        vtId: 1,
        maVatTu: 3,
        tenVatTu:'Máy khoan',
        khoDeXuat:'Kho 1',
        donViTinh:'số cái',
        soLuong:4,
        dinhMucTon:'Muc 1',
    },{ 
        vtId: 1,
        maVatTu: 4,
        tenVatTu:'Máy phát điện',
        khoDeXuat:'Kho 1',
        donViTinh:'số cái',
        soLuong:5,
        dinhMucTon:'Muc 1',
    },];
    Ext.ux.ajax.SimManager.register({
        type: 'json',
        url: /\/KitchenSink\/Order(\/\d+)?/,
        data: function(ctx) {
            var idPart = ctx.url.match(this.url)[1],
                filters = ctx.params.filter,
                id;
            
            if (idPart) {
                id = parseInt(idPart.substring(1), 10);
                return Ext.Array.findBy(orders, function(order) {
                    return order.id === id;
                });
            } else if (filters) {
                filters = Ext.decode(filters);
                id = filters[0].value;
                return Ext.Array.filter(orders, function(order) {
                    return order.customerId === id;
                });
            } else {
                return orders;
            }
        }
    });
});