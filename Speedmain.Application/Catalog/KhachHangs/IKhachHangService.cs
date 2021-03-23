using Speedmain.Application.Catalog.KhachHangs.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Speedmain.Application.Catalog.KhachHangs
{
    public interface IKhachHangService
    {
        Task<KHCreateRequest> Create(KHCreateRequest request);
        Task<int> Update(KHEditRequest request);
        Task<int> Delete(int MaKH);
        Task<KHViewModel> GetByMa(int ma);
        Task<PagedResult<KHViewModel>> GetAllPaging(int page, int start, int limit, string keywords);
        Task<List<KHViewModel>> GetAll();
    }
}
