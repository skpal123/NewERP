using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DataService.Model.Model;
namespace ERP.DataService.Model
{
    public class SumonERPContext : DbContext
    {
        public SumonERPContext()
            : base("SumonERPContext")
        {

        }
        public DbSet<UserInfo> UserInfos { set; get; }
        public DbSet<Module> Modules { set; get; }
        public DbSet<Menu> Menus { set; get; }
        public DbSet<SubMenu> SubMenus { set; get; }
        public DbSet<Item> Items { set; get; }
        public DbSet<Permission> Permissions { set; get; }
        public DbSet<Role> Roles { set; get; }
        public DbSet<RolePermission> RolePermissions { set; get; }
        public DbSet<PasswordChangeHistory> PasswordChangeHistorys { set; get; }
        public DbSet<SessionManagement> SessionManagements { set; get; }
        public DbSet<ApplicatonAccessLog> ApplicatonAccessLogs { set; get; }
    }
}
