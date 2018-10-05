using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ERP.DataService.Model.Model
{
    public class Menu
    {
        public Guid Id { set; get; }
        [StringLength(50)]
        public string Name { set; get; }
        public Module module { set; get; }
         [StringLength(50)]
        public string RouterPath { set; get; }
        public string ImagePath { set; get; }
    }
}
