using Speedmain.Application.Catalog.YeuCaus.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Speedmain.Application.Catalog.YeuCaus
{
    public interface IYeuCauService
    {
        Task<int> Create(YeuCauCreateRequest request);
        Task<int> Update(YeuCauEditRequest request);
        Task<int> Delete(int ma);
        Task<int> UpdateStatus(int ma, int maStatus, string moTa);
        Task<YeuCauViewModel> GetByMa(int ma);
        Task<List<YeuCauViewModel>> GetAll();

        Task<PagedResult<YeuCauViewModel>> GetAllPaging(SearchRequest request);
    }
}
