using Microsoft.EntityFrameworkCore;
using Speedmain.Application.Catalog.YeuCaus.Dtos;
using Speedmain.Data.EF;
using Speedmain.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Speedmain.Application.Catalog.YeuCaus
{
    public class YeuCauService : IYeuCauService
    {
        private yeuCauDbContext _context;

        public YeuCauService(yeuCauDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(YeuCauCreateRequest request)
        {
            var yeucau = new YeuCau()
            {
                MaLoai = request.MaLoai,
                MaTrangThai = request.MaTrangThai,
                MaMucDo = request.MaMucDo,
                MaNV = request.MaNV,
                MaKH = request.MaKH,
                NgayTiepNhan = DateTime.Now,
                Noidung = request.Noidung,
                DiaDiem = request.DiaDiem,
                MoTa = request.MoTa
            };
            _context.YeuCaus.Add(yeucau);
            await _context.SaveChangesAsync();
            return request.MaTrangThai;
        }

        public async Task<int> Delete(int ma)
        {
            var yeuCau = await _context.YeuCaus.FindAsync(ma);
            if (yeuCau == null) throw new YeuCauException($"khong tim thay ma loai : {ma}");
            _context.YeuCaus.Remove(yeuCau);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<YeuCauViewModel>> GetAll()
        {
            var query = from a in _context.YeuCaus
                        join b in _context.Loais on a.MaLoai equals b.MaLoai
                        join c in _context.TrangThais on a.MaTrangThai equals c.MaTrangThai
                        join d in _context.NhanViens on a.MaNV equals d.MaNV
                        join e in _context.KhachHangs on a.MaKH equals e.MaKH
                        join f in _context.MucDos on a.MaMucDo equals f.MaMucDo
                        select new { a, b, c, d, e, f };
            var data = await query.Select(x => new YeuCauViewModel()
            {
                MaYeuCau = x.a.MaYeuCau,
                MaLoai = x.b.MaLoai,
                TenLoai = x.b.TenLoai,
                MaTrangThai = x.c.MaTrangThai,
                TenTrangThai = x.c.TenTrangThai,
                MaMucDo = x.f.MaMucDo,
                TenMucDo = x.f.TenMucDo,
                MaNV = x.d.MaNV,
                TenNV = x.d.TenNV,
                MaKH = x.e.MaKH,
                TenKH = x.e.TenKH,
                Email = x.e.Email,
                SDT = x.e.SDT,
                NgayTiepNhan = x.a.NgayTiepNhan,
                Noidung = x.a.Noidung,
                DiaDiem = x.a.DiaDiem,
                MoTa = x.a.MoTa
            }).ToListAsync();
            return data;

        }

        public async Task<PagedResult<YeuCauViewModel>> GetAllPaging(SearchRequest request)
        {
            //1. Select join
            var query = from a in _context.YeuCaus
                        join b in _context.Loais on a.MaLoai equals b.MaLoai
                        join c in _context.TrangThais on a.MaTrangThai equals c.MaTrangThai
                        join d in _context.NhanViens on a.MaNV equals d.MaNV
                        join e in _context.KhachHangs on a.MaKH equals e.MaKH
                        join f in _context.MucDos on a.MaMucDo equals f.MaMucDo
                        select new { a, b, c, d, e, f };
            //2. filter
            if (!string.IsNullOrEmpty(request.Noidung))
            {
                query = query.Where(x => x.a.Noidung.Contains(request.Noidung));
            }
            if (!string.IsNullOrEmpty(request.TenKH))
            {
                query = query.Where(x => x.e.TenKH.Contains(request.TenKH));
            }
            if (request.MaLoai.HasValue)
            {
                query = query.Where(x => x.a.MaLoai == request.MaLoai);
            }
            if (request.NgayBatDau.HasValue)
            {
                query = query.Where(x => x.a.NgayTiepNhan >= request.NgayBatDau);
            }
            if (request.NgayKetThuc.HasValue)
            {
                query = query.Where(x => x.a.NgayTiepNhan <= request.NgayKetThuc);
            }
            if (request.MaTrangThai.HasValue)
            {
                query = query.Where(x => x.a.MaTrangThai == request.MaTrangThai);
            }
            //3. Paging
            int totalRow = await query.CountAsync();

            var data = await query.Skip((request.page - 1) * request.limit)
                       .Take(request.limit)
                       .Select(x => new YeuCauViewModel()
                       {
                           MaYeuCau = x.a.MaYeuCau,
                           MaLoai = x.b.MaLoai,
                           TenLoai = x.b.TenLoai,
                           MaTrangThai = x.c.MaTrangThai,
                           TenTrangThai = x.c.TenTrangThai,
                           MaMucDo = x.f.MaMucDo,
                           TenMucDo = x.f.TenMucDo,
                           MaNV = x.d.MaNV,
                           TenNV = x.d.TenNV,
                           MaKH = x.e.MaKH,
                           TenKH = x.e.TenKH,
                           NgayTiepNhan = x.a.NgayTiepNhan,
                           Noidung = x.a.Noidung,
                           DiaDiem = x.a.DiaDiem,
                           MoTa = x.a.MoTa,
                           SDT = x.e.SDT,
                           Email = x.e.Email
                       }).ToListAsync();
            //4. Select and projection
            var pagedResult = new PagedResult<YeuCauViewModel>()
            {
                TotalRecord = totalRow,
                Items = data
            };
            return pagedResult;
        }

        public async Task<YeuCauViewModel> GetByMa(int ma)
        {
            var yeuCau = await _context.YeuCaus.FindAsync(ma);
            var YeuCauViewModel = new YeuCauViewModel()
            {
                MaYeuCau = yeuCau.MaYeuCau,
                MaLoai = yeuCau.MaLoai,
                MaTrangThai = yeuCau.MaTrangThai,
                MaMucDo = yeuCau.MaMucDo,
                MaNV = yeuCau.MaNV,
                NgayTiepNhan = yeuCau.NgayTiepNhan,
                Noidung = yeuCau.Noidung,
                DiaDiem = yeuCau.DiaDiem,
                MoTa = yeuCau.MoTa
            };
            return YeuCauViewModel;
        }

        public async Task<int> Update(YeuCauEditRequest request)
        {
            var maYeuCau = await _context.YeuCaus.FindAsync(request.MaYeuCau);
            var yeuCau = await _context.YeuCaus.FirstOrDefaultAsync(x => x.MaYeuCau == request.MaYeuCau);
            if (yeuCau == null) throw new YeuCauException($"khong tim thay ma yeu cau : {request.MaYeuCau}");

            yeuCau.MaLoai = request.MaLoai;
            yeuCau.NgayTiepNhan = DateTime.Now;
            yeuCau.MaMucDo = request.MaMucDo;
            yeuCau.Noidung = request.Noidung;
            yeuCau.DiaDiem = request.DiaDiem;
            yeuCau.MaNV = request.MaNV;

            return await _context.SaveChangesAsync();

        }

        public async Task<int> UpdateStatus(int ma, int maStatus, string moTa)
        {
            var maYeuCau = await _context.YeuCaus.FindAsync(ma);
            var yeuCau = await _context.YeuCaus.FirstOrDefaultAsync(x => x.MaYeuCau == ma);
            if (maYeuCau == null) throw new YeuCauException($"khong tim thay ma yeu cau: {ma}");

            yeuCau.MaTrangThai = maStatus;
            yeuCau.MoTa = moTa;
            return await _context.SaveChangesAsync();
        }
    }
}
