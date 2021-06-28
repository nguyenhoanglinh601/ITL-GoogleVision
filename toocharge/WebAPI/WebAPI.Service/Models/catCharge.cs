using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Service.Models
{
    public class catCharge
    {
        //test
        public string ID { get; set; }
        public string ChargeName_VN { get; set; }
        public string ChargeName_EN { get; set; }

        public string ShipmentTypeID { get; set; }

        public string UserCreated { get; set; }

        public DateTime? DatetimeCreated { get; set; }

        public string UserModified { get; set; }

        public DateTime? DatetimeModified { get; set; }

        public bool? Inactive { get; set; }

        public DateTime? InactiveOn { get; set; }

        public bool? AutomaticallyGenerated { get; set; }

    }
}
