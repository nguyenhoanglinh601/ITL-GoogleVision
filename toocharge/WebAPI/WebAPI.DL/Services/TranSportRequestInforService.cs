using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DL.IServices;
using WebAPI.Service.Models;
using Microsoft.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
//using Microsoft.AspNetCore.Mvc;
using WebAPI.DL.Models;

namespace WebAPI.DL.Services
{
    public class TranSportRequestInforService: ITransportRequestInforService
    {
        private readonly DataContext _context;

        public TranSportRequestInforService(DataContext context)
        {
            _context = context;
        }

        public string convertCode(string id)
        {
            string code = id;
            for (int i = 0; i < id.Length; i++)
            {
                if (i == 8 || i == 13)
                {
                    code = code.Insert(i, "/");
                }
            }
            return code;
        }
       
        public async Task<TransportRequestInfor> getTransportRequestInfor(string converseCode)
        {
            //string sqlQuery = "EXEC Get_Infor_TransportRequest " + "@Code";
            SqlParameter refNo = new SqlParameter("@Code", convertCode(converseCode));
            //var transportRequestInfor = await _context.Query<TransportRequestInfor>().FromSql(sqlQuery, refNo).ToListAsync();
            var transportRequestInfor = await  _context.TransportRequestInfor.FromSql($"Get_Infor_TransportRequest {convertCode(converseCode)}").ToListAsync();
            return transportRequestInfor.FirstOrDefault();
        }
    }
}
