using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace Speedmain.Application.Catalog.Loais.Dtos
{
    public class LoaiCreateRequest
    {
        public int MaLoai { get; set; }

        public string TenLoai { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
