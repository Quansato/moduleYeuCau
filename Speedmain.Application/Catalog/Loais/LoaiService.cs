using Microsoft.EntityFrameworkCore;
using Speedmain.Application.Catalog.Loais.Dtos;
using Speedmain.Data.EF;
using Speedmain.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Speedmain.Application.Catalog.Loais
{
    public class LoaiService : ILoaiservice
    {
        private yeuCauDbContext _context;
        public LoaiService(yeuCauDbContext context)
        {
            _context = context;
        }
        public async Task<Loai> Create(Loai request)
        {
            request.NgayTao = DateTime.Now;
            _context.Loais.Add(request);
            await _context.SaveChangesAsync();
            return request;
        }

        public async Task<int> Delete(int ma)
        {
            var loai = await _context.Loais.FindAsync(ma);
            if (loai == null) throw new YeuCauException($"khong tim thay ma loai : {ma}");
            _context.Loais.Remove(loai);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<LoaiViewModel>> GetAll()
        {
            var loais = await _context.Loais.Select(x => new LoaiViewModel()
            {
                MaLoai = x.MaLoai,
                TenLoai = x.TenLoai,
                NgayTao = x.NgayTao.Value
            }).ToListAsync();
            return loais;
        }

        public async Task<PagedResult<LoaiViewModel>> GetAllPaging(int page, int start, int limit, string keyword)
        {
            //1. Select join
            var query = from a in _context.Loais
                        select new { a };
            //2. filter
            if (!string.IsNullOrEmpty(keyword))
                query = query.Where(x => x.a.TenLoai.Contains(keyword));
            //3. Paging
            int totalRow = await query.CountAsync();

            var data = await query.Skip((page - 1) * limit)
                       .Take(limit)
                       .Select(x => new LoaiViewModel()
                       {
                           MaLoai = x.a.MaLoai,
                           TenLoai = x.a.TenLoai,
                           NgayTao = x.a.NgayTao.Value
                       }).ToListAsync();
            //4. Select and projection
            var pagedResult = new PagedResult<LoaiViewModel>()
            {
                TotalRecord = totalRow,
                Items = data
            };
            return pagedResult;
        }


        public async Task<LoaiViewModel> GetByMa(int ma)
        {
            var loai = await _context.Loais.FindAsync(ma);
            var loaiViewModel = new LoaiViewModel()
            {
                MaLoai = loai.MaLoai,
                TenLoai = loai.TenLoai,
                NgayTao = loai.NgayTao.Value

            };
            return loaiViewModel;
        }
        public async Task<int> Update(int maLoai,string tenLoai)
        {
            var maloai = await _context.Loais.FindAsync(maLoai);
            var loai = await _context.Loais.FirstOrDefaultAsync(x => x.MaLoai == maLoai);
            if (maloai == null) throw new YeuCauException($"khong tim thay ma loai : {maLoai}");

            loai.TenLoai = tenLoai;
            return await _context.SaveChangesAsync();

        }

        /*Task<List<LoaiViewModel>> ILoaiservice.GetAll()
        {
            throw new NotImplementedException();
        }

        Task<PagedResult<LoaiViewModel>> ILoaiservice.GetAllPaging(int page, int start, int limit, string keyword)
        {
            throw new NotImplementedException();
        }

        Task<LoaiViewModel> ILoaiservice.GetByMa(int ma)
        {
            throw new NotImplementedException();
        }*/
    }
}
