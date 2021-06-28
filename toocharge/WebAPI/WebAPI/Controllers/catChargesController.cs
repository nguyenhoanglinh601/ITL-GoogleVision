using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.DL.IServices;
using WebAPI.DL.Models;
using WebAPI.DL.Services;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class catChargesController : ControllerBase
    {
        private readonly ICatChargeService _catChargeService;

        public catChargesController(ICatChargeService catChargeService)
        {
            _catChargeService = catChargeService;
        }

        //GET: api/catCharges
        [HttpGet]
        public async Task<IActionResult> GetcatCharge()
        {
            var data = await _catChargeService.GetAll();
            return Ok(data);
        }
    }
}
