using Speedmain.Application.Catalog.Loais.Dtos;
using Speedmain.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Speedmain.Application.Catalog.Loais
{
    public interface ILoaiservice
    {
        Task<Loai> Create(Loai request);

        Task<int> Update(int ma, string ten);

        Task<int> Delete(int ma);

        Task<LoaiViewModel> GetByMa(int ma);

        Task<List<LoaiViewModel>> GetAll();
        /*Task Create(LoaiCreateRequest request);*/
        Task<PagedResult<LoaiViewModel>> GetAllPaging(int page, int start, int limit, string keyword);
    }
}
