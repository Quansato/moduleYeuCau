using System;
using System.Collections.Generic;
using System.Text;

namespace Speedmain.Application.Catalog.KhachHangs.Dtos
{
    public class KHCreateRequest
    {
        public int MaKH { set; get; }
        public string TenKH { set; get; }
        public string Email { set; get; }
        public string SDT { set; get; }
        public string DiaChi { set; get; }
        public DateTime? NgaySinh { set; get; }
    }
}
