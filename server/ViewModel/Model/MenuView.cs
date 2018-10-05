using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel.Model
{
    public class MenuView
    {
        public Guid Id { set; get; }
        public string Name { set; get; }
        public Guid? Module_Id { set; get; }
        public string ImagePath { set; get; }
        public string RouterPath { set; get; }
    }
}
