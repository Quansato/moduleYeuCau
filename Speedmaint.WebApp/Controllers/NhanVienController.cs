using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Speedmain.Application.Catalog.NhanViens;
using Speedmain.Application.Catalog.NhanViens.Dtos;

namespace Speedmaint.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NhanVienController : ControllerBase
    {
        private readonly INhanVienService _nhanVienService;
        public NhanVienController(INhanVienService nhanVienService)
        {
            _nhanVienService = nhanVienService;
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging(int page, int start, int limit, string keywords)
        {
            var result = await _nhanVienService.GetAllPaging(page, start, limit, keywords);
            return Ok(result);
        }
        [HttpGet("paging/{keyword}")]
        public async Task<IActionResult> GetSearch(int page, int start, int limit, string keywords)
        {
            var result = await _nhanVienService.GetAllPaging(page, start, limit, keywords);
            return Ok(result);
        }
        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            var result = await _nhanVienService.GetAll();
            return Ok(result);
        }
        /*[HttpGet("{ma}")]
        public async Task<IActionResult> GetByMa(int ma)
        {
            var result = await _nhanVienService.GetByMa(ma);
            return Ok(result);
        }*/
        [HttpPost()]
        public async Task<IActionResult> Create(NVCreateRequest request)
        {
            var result = await _nhanVienService.Create(request);
            return Ok(result);
        }
        [HttpPut()]
        public async Task<IActionResult> Update(NVUpdateRequest request)
        {
            var result = await _nhanVienService.Update(request);
            return Ok(result);
        }
        [HttpDelete("{ma}")]
        public async Task<IActionResult> Delete(int ma)
        {
            var result = await _nhanVienService.Delete(ma);
            return Ok(result);
        }
    }
}
