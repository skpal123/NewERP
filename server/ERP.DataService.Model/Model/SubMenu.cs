using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataService.Model.Model
{
    public class SubMenu
    {
        public Guid Id { set; get; }
        [StringLength(50)]
        public string Name { set; get; }
        public Guid? Menu_Id { set; get; }
    }
}
