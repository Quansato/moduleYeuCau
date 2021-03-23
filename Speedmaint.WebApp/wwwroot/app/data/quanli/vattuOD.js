Ext.define('Admin.data.quanli.vattuOD', {
    // requires: [
    //     'KitchenSink.data.Init'
    // ]
}, function() {
    var orders = [{ 
        id: 1,
        tenNhom:'Nhóm 1',
    },{ 
        id: 2,
        tenNhom:'Nhóm 2',
    },];
    
    Ext.ux.ajax.SimManager.register({
        type: 'json',
        url: /\/KitchenSink\/Customer(\/\d+)?/,
        data: function(ctx) {
            var idPart = ctx.url.match(this.url)[1],
                id;
            if (idPart) {
                id = parseInt(idPart.substring(1), 10);
                return Ext.Array.findBy(customers, function(customer) {
                    return customer.id === id;
                });
            } else {
                return customers;
            }
        }
    });
});