using System.Collections.Generic;

namespace Speedmain.Application.Catalog.YeuCaus.Dtos
{
    public class GetYeuCauPagingRequest : PagingRequestBase
    {
        public string keywords { set; get; }
        public List<int> MaYeuCau { get; set; }
    }
}
