using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using WebAPI.DL.IServices;
using WebAPI.DL.Models;
using WebAPI.Service.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.DL.Services
{
    public class CatChargeService : ICatChargeService
    {
        private readonly DataContext _context;
        public CatChargeService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<catCharge>> GetAll()
        {

            return await _context.catCharge.ToListAsync();
        }
    }
}
