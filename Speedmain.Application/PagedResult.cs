using System.Collections.Generic;

namespace Speedmain.Application
{
    public class PagedResult<T>
    {
        public List<T> Items { set; get; }
        public int TotalRecord { set; get; }
    }
}
