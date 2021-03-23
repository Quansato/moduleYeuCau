using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Speedmain.Application.Catalog.YeuCaus;
using Speedmain.Application.Catalog.YeuCaus.Dtos;

namespace Speedmaint.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YeuCauController : ControllerBase
    {
        private readonly IYeuCauService _yeuCauService;
        public YeuCauController(IYeuCauService yeuCauService)
        {
            _yeuCauService = yeuCauService;
        }
        /*[HttpGet("Ek")]
        public async Task<IActionResult> Get()
        {
            var yeucau = await _yeuCauService.GetAll();
            return Ok(yeucau);
        }*/

        [HttpGet()]
        public async Task<IActionResult> GetSearch([FromQuery] SearchRequest request)
        {
            var yeuCaus = await _yeuCauService.GetAllPaging(request);
            return Ok(yeuCaus);
        }
        //api/yeucau/{ma}
        [HttpGet("{ma}")]
        public async Task<IActionResult> GetByMa(int ma)
        {
            var yeucau = await _yeuCauService.GetByMa(ma);
            if (yeucau == null)
            {
                return BadRequest("Khong tim thay yeu cau");
            }
            return Ok(yeucau);
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] YeuCauCreateRequest request)
        {
            var result = await _yeuCauService.Create(request);
            if (result == 0)
            {
                return BadRequest();
            }
            return Ok(result);
        }

        [HttpPut()]
        public async Task<IActionResult> Update([FromBody] YeuCauEditRequest request)
        {
            var result = await _yeuCauService.Update(request);
            if (result == 0)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete("{ma}")]
        public async Task<IActionResult> Delete(int ma)
        {
            var result = await _yeuCauService.Delete(ma);
            if (result == 0)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
