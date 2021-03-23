using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Speedmain.Application.Catalog.KhachHangs;
using Speedmain.Application.Catalog.KhachHangs.Dtos;

namespace Speedmaint.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhachHangController : ControllerBase
    {
        private readonly IKhachHangService _khachHangService;
        public KhachHangController(IKhachHangService khachHangService)
        {
            _khachHangService = khachHangService;
        }
        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging(int page, int start, int limit, string keywords)
        {
            var result = await _khachHangService.GetAllPaging(page, start, limit, keywords);
            return Ok(result);
        }
        [HttpGet("paging/{keyword}")]
        public async Task<IActionResult> GetSearch(int page, int start, int limit, string keywords)
        {
            var result = await _khachHangService.GetAllPaging(page, start, limit, keywords);
            return Ok(result);
        }
        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            var result = await _khachHangService.GetAll();
            return Ok(result);
        }
        /*[HttpGet("{ma}")]
        public async Task<IActionResult> GetByMa(int ma)
        {
            var result = await _khachHangService.GetByMa(ma);
            return Ok(result);
        }*/
        [HttpPost()]
        public async Task<IActionResult> Create(KHCreateRequest request)
        {
            var result = await _khachHangService.Create(request);
            return Ok(result);
        }
        [HttpPut()]
        public async Task<IActionResult> Update(KHEditRequest request)
        {
            var result = await _khachHangService.Update(request);
            return Ok(result);
        }
        [HttpDelete("{ma}")]
        public async Task<IActionResult> Delete(int ma)
        {
            var result = await _khachHangService.Delete(ma);
            return Ok(result);
        }
    }
}
